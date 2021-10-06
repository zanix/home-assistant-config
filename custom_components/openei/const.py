"""Constants for integration_blueprint."""
from homeassistant.const import DEVICE_CLASS_MONETARY

# Base component constants
NAME = "OpenEI"
DOMAIN = "openei"
DOMAIN_DATA = f"{DOMAIN}_data"
VERSION = "0.1.5"
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
SENSOR_TYPES = {
    "current_rate": [
        "Current Energy Rate",
        "mdi:cash-multiple",
        None,
        DEVICE_CLASS_MONETARY,
    ],
    "distributed_generation": ["Distributed Generation", "mdi:gauge", None, None],
    "rate_name": ["Plan Name", "mdi:tag", None, None],
    "all_rates": ["All Listed Rates", "mdi:format-list-bulleted", None, None],
    "monthly_tier_rate": [
        "Monthly Energy Rate",
        "mdi:cash-multiple",
        None,
        DEVICE_CLASS_MONETARY,
    ],
    "mincharge": ["Minimum Charge", "mdi:cash-multiple", None, DEVICE_CLASS_MONETARY],
}

BINARY_SENSORS = {
    "approval": ["Approval", "mdi:check", None, None],
}
