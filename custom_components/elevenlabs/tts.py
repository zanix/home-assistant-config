from http.client import HTTPException
import logging

from pyElevenlabs.pyElevenlabs import pyElevenlabsClient
import voluptuous as vol

from homeassistant.components.tts import CONF_LANG, PLATFORM_SCHEMA, Provider
from homeassistant.const import CONF_API_KEY, CONF_TYPE
import homeassistant.helpers.config_validation as cv

_LOGGER = logging.getLogger(__name__)

DEFAULT_TYPE = "21m00Tcm4TlvDq8ikWAM"

SUPPORTED_LANGUAGES = [
    "en-us"
]
DEFAULT_LANG = "en-us"

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend(
    {
        vol.Required(CONF_API_KEY): cv.string,
        vol.Required(CONF_TYPE, default=DEFAULT_TYPE): cv.string,
        vol.Required(CONF_LANG, default=DEFAULT_LANG): vol.In(SUPPORTED_LANGUAGES)
    }
)


def get_engine(hass, config, discovery_info=None):
    return ElevenlabsProvider(config[CONF_API_KEY], config[CONF_TYPE], config[CONF_LANG])


class ElevenlabsProvider(Provider):
    """The ElevenLabs speech API Provider"""

    def __init__(self, apikey, ttype, lang):
        self._apikey = apikey
        self._type = ttype
        self._lang = lang

    @property
    def default_language(self):
        return self._lang

    @property
    def supported_languages(self):
        return SUPPORTED_LANGUAGES

    @property
    def supported_options(self):
        return [CONF_TYPE]

    @property
    def default_options(self):
        return {CONF_TYPE: self._type}

    def get_tts_audio(self, message, language, options=None):
        try:
            t = pyElevenlabsClient(self._apikey)
            data = t.speak(options[CONF_TYPE], message)
        except HTTPException as ex:
            _LOGGER.error("Error occurred for ElevenLabs TTS: %s", ex)
            return (None, None)
        return ("wav", data)
