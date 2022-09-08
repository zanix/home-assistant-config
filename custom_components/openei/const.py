"""Constants for integration_blueprint."""
from __future__ import annotations
from homeassistant.components.binary_sensor import (
    BinarySensorEntityDescription,
)
from homeassistant.components.sensor import (
    SensorEntityDescription,
)
from homeassistant.helpers.entity import EntityCategory

from typing import Final

# Base component constants
NAME = "OpenEI"
DOMAIN = "openei"
DOMAIN_DATA = f"{DOMAIN}_data"
VERSION = "0.1.8"
ATTRIBUTION = "Data provided by OpenEI.org"
ISSUE_URL = "https://github.com/firstof9/ha-openei/issues"
PLATFORMS = ["binary_sensor", "sensor"]

# Icons
ICON = "mdi:format-quote-close"

# Device classes
BINARY_SENSOR_DEVICE_CLASS = "connectivity"

# Configuration and options
CONF_API_KEY = "api_key"
CONF_LOCATION = "location"
CONF_MANUAL_PLAN = "manual_plan"
CONF_PLAN = "rate_plan"
CONF_RADIUS = "radius"
CONF_SENSOR = "sensor"
CONF_UTILITY = "utility"

# Defaults
DEFAULT_NAME = DOMAIN


STARTUP_MESSAGE = f"""
-------------------------------------------------------------------
{NAME}
Version: {VERSION}
This is a custom integration!
If you have any issues with this you need to open an issue here:
{ISSUE_URL}
-------------------------------------------------------------------
"""
# property: name, icon, unit_of_measurement, device_class
SENSOR_TYPES: Final[dict[str, SensorEntityDescription]] = {
    "current_rate": SensorEntityDescription(
        key="current_rate",
        name="Current Energy Rate",
        icon="mdi:cash-multiple",
    ),
    "current_adjustment": SensorEntityDescription(
        key="current_adjustment",
        name="Current Energy Adjustment",
        icon="mdi:cash-multiple",
    ),    
    "distributed_generation": SensorEntityDescription(
        key="distributed_generation",
        name="Distributed Generation",
        icon="mdi:gauge",
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    "rate_name": SensorEntityDescription(
        key="rate_name",
        name="Plan Name",
        icon="mdi:tag",
    ),
    "all_rates": SensorEntityDescription(
        key="all_rates",
        name="All Listed Rates",
        icon="mdi:format-list-bulleted",
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    "monthly_tier_rate": SensorEntityDescription(
        key="monthly_tier_rate",
        name="Monthly Energy Rate",
        icon="mdi:cash-multiple",
    ),
    "mincharge": SensorEntityDescription(
        key="mincharge",
        name="Minimum Charge",
        icon="mdi:cash-multiple",
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
}

BINARY_SENSORS: Final[dict[str, BinarySensorEntityDescription]] = {
    "approval": BinarySensorEntityDescription(
        name="Approval",
        key="approval",
        icon="mdi:check",
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
}