"""Sensor platform for integration_blueprint."""
from typing import Any, Optional

from homeassistant.components.sensor import SensorEntity, SensorEntityDescription
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import ATTR_ATTRIBUTION
from homeassistant.core import HomeAssistant
from homeassistant.helpers.update_coordinator import CoordinatorEntity
from homeassistant.util import slugify


from .const import ATTRIBUTION, DOMAIN, SENSOR_TYPES


async def async_setup_entry(hass, entry, async_add_devices):
    """Setup sensor platform."""
    coordinator = hass.data[DOMAIN][entry.entry_id]

    sensors = []
    for sensor in SENSOR_TYPES:
        sensors.append(OpenEISensor(hass, SENSOR_TYPES[sensor], entry, coordinator))

    async_add_devices(sensors, False)


class OpenEISensor(CoordinatorEntity, SensorEntity):
    """OpenEI Sensor class."""

    def __init__(
        self,
        hass: HomeAssistant,
        sensor_description: SensorEntityDescription,
        entry: ConfigEntry,
        coordinator: str,
    ) -> None:
        """Initialize the sensor."""
        super().__init__(coordinator)
        self.hass = hass
        self._name = sensor_description.name
        self._key = sensor_description.key
        self._unique_id = entry.entry_id
        self._config = entry
        self._icon = sensor_description.icon
        self.coordinator = coordinator

        self._attr_name = f"{slugify(self._config.title)}_{self._name}"
        self._attr_unique_id = f"{self._key}_{self._unique_id}"

    @property
    def native_value(self) -> Any:
        """Return the value of the sensor."""
        return self.coordinator.data.get(self._key)

    @property
    def native_unit_of_measurement(self) -> Any:
        """Return the unit of measurement."""
        if self._key in ["current_rate", "monthly_tier_rate"]:
            return f"{self.hass.config.currency}/kWh"
        if f"{self._key}_uom" in self.coordinator.data:
            return self.coordinator.data.get(f"{self._key}_uom")
        return None

    @property
    def available(self) -> bool:
        """Return if entity is available."""
        return self.coordinator.last_update_success

    @property
    def extra_state_attributes(self) -> Optional[dict]:
        """Return sesnsor attributes."""
        attrs = {}
        attrs[ATTR_ATTRIBUTION] = ATTRIBUTION
        return attrs

    @property
    def icon(self) -> str:
        """Return the icon."""
        return self._icon