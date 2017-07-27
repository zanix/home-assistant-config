"""
See https://community.home-assistant.io/t/script-to-track-all-devices-with-a-battery-level/2596
for more details.

- justyns
"""
import logging
import voluptuous as vol

from homeassistant.helpers.event import track_state_change
from homeassistant.const import MATCH_ALL
from homeassistant.components.sensor import PLATFORM_SCHEMA
import homeassistant.helpers.config_validation as cv

_LOGGER = logging.getLogger(__name__)

DOMAIN = 'battery_state'
DEPENDENCIES = []
CONFIG_SCHEMA = vol.Schema({
    DOMAIN: vol.Schema({
        vol.Optional('include'): cv.ensure_list,
        vol.Optional('exclude'): cv.ensure_list,
        vol.Optional('attributes'): cv.ensure_list,
    }),
}, extra=vol.ALLOW_EXTRA)

def setup(hass, config):
    """ Setup the Battery component. """
    excluded_items = config[DOMAIN].get('exclude', [])
    included_items = config[DOMAIN].get('include', MATCH_ALL)
    attribute_items = config[DOMAIN].get('attributes', ['battery_level', 'battery'])

    def state_changed(entity_id, old_state, new_state):
        if new_state is None \
            or entity_id in excluded_items \
            or (included_items != MATCH_ALL and entity_id not in included_items):
            return
        for attr in attribute_items:
            if attr in new_state.attributes:
                try:
                    new_value = str(new_state.attributes[attr]).replace('%', '')
                    hass.states.set('sensor.%s_battery' % new_state.object_id,
                                    float(new_value),
                                    {
                                        'friendly_name': "%s Battery" % new_state.attributes['friendly_name'],
                                        'unit_of_measurement': '%',
                                        'icon': 'mdi:battery'
                                    })
                except Exception as e:
                    _LOGGER.error("Error setting battery sensor value: %r", e)

    # Watch for changes to the devices we're interested in
    track_state_change(hass, included_items, state_changed)
    _LOGGER.info("The 'battery' component is ready!"
                 "Include list: %r. Exclude list: %r.  Attribute list: %r",
                 included_items, excluded_items, attribute_items)

    return True
