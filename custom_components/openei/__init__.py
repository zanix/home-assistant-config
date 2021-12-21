"""Custom integration to integrate OpenEI with Home Assistant."""
from datetime import datetime, timedelta
import logging

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import Config, HomeAssistant
from homeassistant.exceptions import ConfigEntryNotReady
from homeassistant.helpers.event import async_call_later
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, UpdateFailed
import openeihttp

from .const import (
    BINARY_SENSORS,
    CONF_API_KEY,
    CONF_MANUAL_PLAN,
    CONF_PLAN,
    CONF_SENSOR,
    DOMAIN,
    PLATFORMS,
    SENSOR_TYPES,
    STARTUP_MESSAGE,
)

SCAN_INTERVAL = timedelta(minutes=15)

_LOGGER: logging.Logger = logging.getLogger(__package__)


async def async_setup(hass: HomeAssistant, config: Config):
    """Set up this integration using YAML is not supported."""
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry):
    """Set up this integration using UI."""
    if hass.data.get(DOMAIN) is None:
        hass.data.setdefault(DOMAIN, {})
        _LOGGER.info(STARTUP_MESSAGE)

    updated_config = entry.data.copy()

    _LOGGER.debug("config_entry: %s", updated_config)

    if CONF_SENSOR in updated_config.keys() and updated_config[CONF_SENSOR] == "(none)":
        updated_config.pop(CONF_SENSOR, None)

    if CONF_MANUAL_PLAN not in updated_config.keys():
        updated_config[CONF_MANUAL_PLAN] = ""

    if CONF_PLAN not in updated_config.keys():
        updated_config[CONF_PLAN] = ""

    if not any([updated_config[CONF_MANUAL_PLAN], updated_config[CONF_PLAN]]):
        _LOGGER.error("Plan configuration missing.")
        raise ConfigEntryNotReady

    _LOGGER.debug("updated_config: %s", updated_config)
    if updated_config != entry.data:
        hass.config_entries.async_update_entry(entry, data=updated_config)

    entry.add_update_listener(update_listener)

    coordinator = OpenEIDataUpdateCoordinator(hass, config=entry)
    await coordinator.async_refresh()

    if not coordinator.last_update_success:
        raise ConfigEntryNotReady

    hass.data[DOMAIN][entry.entry_id] = coordinator
    hass.config_entries.async_setup_platforms(entry, PLATFORMS)

    return True


class OpenEIDataUpdateCoordinator(DataUpdateCoordinator):
    """Class to manage fetching data from the API."""

    def __init__(self, hass: HomeAssistant, config: ConfigEntry) -> None:
        """Initialize."""
        self._config = config
        self.hass = hass
        self.interval = timedelta(seconds=30)
        self._data = {}

        _LOGGER.debug("Data will be updated at the top of every hour.")

        super().__init__(hass, _LOGGER, name=DOMAIN, update_interval=self.interval)

    async def _async_update_data(self) -> dict:
        """Update data via library."""
        if len(self._data) == 0:
            delta = timedelta(hours=1)
            now = datetime.now()
            next_hour = (now + delta).replace(microsecond=0, second=1, minute=0)
            wait_seconds = (next_hour - now).seconds

            _LOGGER.debug("Next update in %s seconds.", wait_seconds)
            async_call_later(self.hass, wait_seconds, self._async_refresh_data)
            try:
                self._data = await self.hass.async_add_executor_job(
                    get_sensors, self.hass, self._config
                )
            except Exception as exception:
                raise UpdateFailed() from exception
        return self._data

    async def _async_refresh_data(self, data=None) -> None:
        """Update data via library."""
        delta = timedelta(hours=1)
        now = datetime.now()
        next_hour = (now + delta).replace(microsecond=0, second=1, minute=0)
        wait_seconds = (next_hour - now).seconds

        _LOGGER.debug("Next update in %s seconds.", wait_seconds)
        async_call_later(self.hass, wait_seconds, self._async_refresh_data)
        try:
            self._data = await self.hass.async_add_executor_job(
                get_sensors, self.hass, self._config
            )
        except Exception as exception:
            raise UpdateFailed() from exception


def get_sensors(hass, config) -> dict:
    api = config.data.get(CONF_API_KEY)
    plan = config.data.get(CONF_PLAN)
    meter = config.data.get(CONF_SENSOR)
    reading = None

    if config.data.get(CONF_MANUAL_PLAN):
        plan = config.data.get(CONF_MANUAL_PLAN)

    if meter:
        _LOGGER.debug("Using meter data from sensor: %s", meter)
        reading = hass.states.get(meter)
        if not reading:
            reading = None
            _LOGGER.warning("Sensor: %s is not valid.", meter)
        else:
            reading = reading.state

    rate = openeihttp.Rates(
        api=api,
        plan=plan,
        reading=reading,
    )
    rate.update()
    data = {}

    for sensor in SENSOR_TYPES:
        _sensor = {}
        value = getattr(rate, SENSOR_TYPES[sensor].key)
        if isinstance(value, tuple):
            _sensor[sensor] = value[0]
            _sensor[f"{sensor}_uom"] = value[1]
        else:
            _sensor[sensor] = getattr(rate, SENSOR_TYPES[sensor].key)
        data.update(_sensor)

    for sensor in BINARY_SENSORS:
        _sensor = {}
        _sensor[sensor] = getattr(rate, sensor)
        data.update(_sensor)

    _LOGGER.debug("DEBUG: %s", data)
    return data


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Handle removal of an entry."""
    unload_ok = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)

    return unload_ok


async def update_listener(hass: HomeAssistant, config_entry: ConfigEntry) -> None:
    """Update listener."""

    if not config_entry.options:
        return

    _LOGGER.debug("Attempting to reload entities from the %s integration", DOMAIN)

    new_data = config_entry.options.copy()

    hass.config_entries.async_update_entry(
        entry=config_entry,
        data=new_data,
        options={},
    )

    await hass.config_entries.async_reload(config_entry.entry_id)
