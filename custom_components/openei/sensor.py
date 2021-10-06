"""Sensor platform for integration_blueprint."""
from typing import Any, Optional

from homeassistant.components.sensor import SensorEntity
from homeassistant.const import ATTR_ATTRIBUTION
from homeassistant.helpers.update_coordinator import CoordinatorEntity
from homeassistant.util import slugify


from .const import ATTRIBUTION, DOMAIN, SENSOR_TYPES


async def async_setup_entry(hass, entry, async_add_devices):
    """Setup sensor platform."""
    coordinator = hass.data[DOMAIN][entry.entry_id]

    sensors = []
    for sensor in SENSOR_TYPES:
        sensors.append(OpenEISensor(hass, sensor, entry, coordinator))

    async_add_devices(sensors, False)


class OpenEISensor(CoordinatorEntity, SensorEntity):
    """OpenEI Sensor class."""

    def __init__(self, hass, sensor_type, entry, coordinator) -> None:
        """Initialize the sensor."""
        super().__init__(coordinator)
        self.hass = hass
        self._name = sensor_type
        self._unique_id = entry.entry_id
        self._config = entry
        self.coordinator = coordinator
        self._device_class = SENSOR_TYPES[self._name][3]

    @property
    def unique_id(self) -> str:
        """Return a unique, Home Assistant friendly identifier for this entity."""
        return f"{self._name}_{self._unique_id}"

    @property
    def name(self):
        """Return the name of the sensor."""
        return f"{slugify(self._config.title)}_{SENSOR_TYPES[self._name][0]}"

    @property
    def icon(self) -> str:
        """Return the icon of the sensor."""
        return SENSOR_TYPES[self._name][1]

    @property
    def native_value(self) -> Any:
        """Return the value of the sensor."""
        return self.coordinator.data.get(self._name)

    @property
    def native_unit_of_measurement(self) -> Any:
        """Return the unit of measurement."""
        if self._name in ["current_rate", "monthly_tier_rate"]:
            return f"{self.hass.config.currency}/kWh"
        if f"{self._name}_uom" in self.coordinator.data:
            return self.coordinator.data.get(f"{self._name}_uom")
        return None

    @property
    def available(self) -> bool:
        """Return if entity is available."""
        return self.coordinator.last_update_success

    @property
    def device_state_attributes(self) -> Optional[dict]:
        """Return sesnsor attributes."""
        attrs = {}
        attrs[ATTR_ATTRIBUTION] = ATTRIBUTION
        return attrs

    @property
    def device_class(self):
        """Return the device class of the sensor."""
        return self._device_class
