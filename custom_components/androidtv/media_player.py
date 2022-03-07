"""Support for functionality to interact with Android TV / Fire TV devices."""
from __future__ import annotations

from datetime import datetime
import functools
import logging
import sys
import importlib
from .androidtv11hack import androidtv

from adb_shell.exceptions import (
    AdbTimeoutError,
    InvalidChecksumError,
    InvalidCommandError,
    InvalidResponseError,
    TcpTimeoutException,
)
from androidtv import ha_state_detection_rules_validator
from androidtv.constants import APPS, KEYS
from androidtv.exceptions import LockNotAcquiredException
import voluptuous as vol

from homeassistant.components import persistent_notification
from homeassistant.components.media_player import PLATFORM_SCHEMA, MediaPlayerEntity
from homeassistant.components.media_player.const import (
    SUPPORT_NEXT_TRACK,
    SUPPORT_PAUSE,
    SUPPORT_PLAY,
    SUPPORT_PREVIOUS_TRACK,
    SUPPORT_SELECT_SOURCE,
    SUPPORT_STOP,
    SUPPORT_TURN_OFF,
    SUPPORT_TURN_ON,
    SUPPORT_VOLUME_MUTE,
    SUPPORT_VOLUME_SET,
    SUPPORT_VOLUME_STEP,
)
from homeassistant.config_entries import SOURCE_IMPORT, ConfigEntry
from homeassistant.const import (
    ATTR_COMMAND,
    ATTR_CONNECTIONS,
    ATTR_MANUFACTURER,
    ATTR_MODEL,
    ATTR_SW_VERSION,
    CONF_DEVICE_CLASS,
    CONF_HOST,
    CONF_NAME,
    CONF_PORT,
    STATE_IDLE,
    STATE_OFF,
    STATE_PAUSED,
    STATE_PLAYING,
    STATE_STANDBY,
)
from homeassistant.core import HomeAssistant
from homeassistant.helpers import config_validation as cv, entity_platform
from homeassistant.helpers.device_registry import CONNECTION_NETWORK_MAC, format_mac
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity import DeviceInfo
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.typing import ConfigType, DiscoveryInfoType

from .const import (
    ANDROID_DEV,
    ANDROID_DEV_OPT,
    CONF_ADB_SERVER_IP,
    CONF_ADB_SERVER_PORT,
    CONF_ADBKEY,
    CONF_APPS,
    CONF_EXCLUDE_UNNAMED_APPS,
    CONF_GET_SOURCES,
    CONF_MIGRATION_OPTIONS,
    CONF_SCREENCAP,
    CONF_STATE_DETECTION_RULES,
    CONF_TURN_OFF_COMMAND,
    CONF_TURN_ON_COMMAND,
    DEFAULT_ADB_SERVER_PORT,
    DEFAULT_DEVICE_CLASS,
    DEFAULT_EXCLUDE_UNNAMED_APPS,
    DEFAULT_GET_SOURCES,
    DEFAULT_PORT,
    DEFAULT_SCREENCAP,
    DEVICE_ANDROIDTV,
    DEVICE_CLASSES,
    DOMAIN,
    PROP_ETHMAC,
    PROP_WIFIMAC,
    SIGNAL_CONFIG_ENTITY,
)

_LOGGER = logging.getLogger(__name__)

SUPPORT_ANDROIDTV = (
    SUPPORT_PAUSE
    | SUPPORT_PLAY
    | SUPPORT_TURN_ON
    | SUPPORT_TURN_OFF
    | SUPPORT_PREVIOUS_TRACK
    | SUPPORT_NEXT_TRACK
    | SUPPORT_SELECT_SOURCE
    | SUPPORT_STOP
    | SUPPORT_VOLUME_MUTE
    | SUPPORT_VOLUME_SET
    | SUPPORT_VOLUME_STEP
)

SUPPORT_FIRETV = (
    SUPPORT_PAUSE
    | SUPPORT_PLAY
    | SUPPORT_TURN_ON
    | SUPPORT_TURN_OFF
    | SUPPORT_PREVIOUS_TRACK
    | SUPPORT_NEXT_TRACK
    | SUPPORT_SELECT_SOURCE
    | SUPPORT_STOP
)

ATTR_ADB_RESPONSE = "adb_response"
ATTR_DEVICE_PATH = "device_path"
ATTR_HDMI_INPUT = "hdmi_input"
ATTR_LOCAL_PATH = "local_path"

SERVICE_ADB_COMMAND = "adb_command"
SERVICE_DOWNLOAD = "download"
SERVICE_LEARN_SENDEVENT = "learn_sendevent"
SERVICE_UPLOAD = "upload"

DEFAULT_NAME = "Android TV"

# Deprecated in Home Assistant 2022.2
PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend(
    {
        vol.Required(CONF_HOST): cv.string,
        vol.Optional(CONF_DEVICE_CLASS, default=DEFAULT_DEVICE_CLASS): vol.In(
            DEVICE_CLASSES
        ),
        vol.Optional(CONF_NAME, default=DEFAULT_NAME): cv.string,
        vol.Optional(CONF_PORT, default=DEFAULT_PORT): cv.port,
        vol.Optional(CONF_ADBKEY): cv.isfile,
        vol.Optional(CONF_ADB_SERVER_IP): cv.string,
        vol.Optional(CONF_ADB_SERVER_PORT, default=DEFAULT_ADB_SERVER_PORT): cv.port,
        vol.Optional(CONF_GET_SOURCES, default=DEFAULT_GET_SOURCES): cv.boolean,
        vol.Optional(CONF_APPS, default={}): vol.Schema(
            {cv.string: vol.Any(cv.string, None)}
        ),
        vol.Optional(CONF_TURN_ON_COMMAND): cv.string,
        vol.Optional(CONF_TURN_OFF_COMMAND): cv.string,
        vol.Optional(CONF_STATE_DETECTION_RULES, default={}): vol.Schema(
            {cv.string: ha_state_detection_rules_validator(vol.Invalid)}
        ),
        vol.Optional(
            CONF_EXCLUDE_UNNAMED_APPS, default=DEFAULT_EXCLUDE_UNNAMED_APPS
        ): cv.boolean,
        vol.Optional(CONF_SCREENCAP, default=DEFAULT_SCREENCAP): cv.boolean,
    }
)

# Translate from `AndroidTV` / `FireTV` reported state to HA state.
ANDROIDTV_STATES = {
    "off": STATE_OFF,
    "idle": STATE_IDLE,
    "standby": STATE_STANDBY,
    "playing": STATE_PLAYING,
    "paused": STATE_PAUSED,
}


async def async_setup_platform(
    hass: HomeAssistant,
    config: ConfigType,
    async_add_entities: AddEntitiesCallback,
    discovery_info: DiscoveryInfoType | None = None,
) -> None:
    """Set up the Android TV / Fire TV platform."""

    host = config[CONF_HOST]

    # get main data
    config_data = {
        CONF_HOST: host,
        CONF_DEVICE_CLASS: config.get(CONF_DEVICE_CLASS, DEFAULT_DEVICE_CLASS),
        CONF_PORT: config.get(CONF_PORT, DEFAULT_PORT),
    }
    for key in (CONF_ADBKEY, CONF_ADB_SERVER_IP, CONF_ADB_SERVER_PORT, CONF_NAME):
        if key in config:
            config_data[key] = config[key]

    # get options
    config_options = {
        key: config[key]
        for key in (
            CONF_APPS,
            CONF_EXCLUDE_UNNAMED_APPS,
            CONF_GET_SOURCES,
            CONF_SCREENCAP,
            CONF_STATE_DETECTION_RULES,
            CONF_TURN_OFF_COMMAND,
            CONF_TURN_ON_COMMAND,
        )
        if key in config
    }

    # save option to use with entry
    if config_options:
        config_data[CONF_MIGRATION_OPTIONS] = config_options

    # Launch config entries setup
    hass.async_create_task(
        hass.config_entries.flow.async_init(
            DOMAIN, context={"source": SOURCE_IMPORT}, data=config_data
        )
    )


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up the Android TV entity."""
    aftv = hass.data[DOMAIN][entry.entry_id][ANDROID_DEV]
    device_class = aftv.DEVICE_CLASS
    device_type = "Android TV" if device_class == DEVICE_ANDROIDTV else "Fire TV"
    if CONF_NAME in entry.data:
        device_name = entry.data[CONF_NAME]
    else:
        device_name = f"{device_type} {entry.data[CONF_HOST]}"

    device_args = [
        aftv,
        device_name,
        device_type,
        entry.unique_id,
        entry.entry_id,
        hass.data[DOMAIN][entry.entry_id],
    ]

    async_add_entities(
        [
            AndroidTVDevice(*device_args)
            if device_class == DEVICE_ANDROIDTV
            else FireTVDevice(*device_args)
        ]
    )

    platform = entity_platform.async_get_current_platform()
    platform.async_register_entity_service(
        SERVICE_ADB_COMMAND,
        {vol.Required(ATTR_COMMAND): cv.string},
        "adb_command",
    )
    platform.async_register_entity_service(
        SERVICE_LEARN_SENDEVENT, {}, "learn_sendevent"
    )
    platform.async_register_entity_service(
        SERVICE_DOWNLOAD,
        {
            vol.Required(ATTR_DEVICE_PATH): cv.string,
            vol.Required(ATTR_LOCAL_PATH): cv.string,
        },
        "service_download",
    )
    platform.async_register_entity_service(
        SERVICE_UPLOAD,
        {
            vol.Required(ATTR_DEVICE_PATH): cv.string,
            vol.Required(ATTR_LOCAL_PATH): cv.string,
        },
        "service_upload",
    )


def adb_decorator(override_available=False):
    """Wrap ADB methods and catch exceptions.

    Allows for overriding the available status of the ADB connection via the
    `override_available` parameter.
    """

    def _adb_decorator(func):
        """Wrap the provided ADB method and catch exceptions."""

        @functools.wraps(func)
        async def _adb_exception_catcher(self, *args, **kwargs):
            """Call an ADB-related method and catch exceptions."""
            # pylint: disable=protected-access
            if not self.available and not override_available:
                return None

            try:
                return await func(self, *args, **kwargs)
            except LockNotAcquiredException:
                # If the ADB lock could not be acquired, skip this command
                _LOGGER.info(
                    "ADB command not executed because the connection is currently in use"
                )
                return
            except self.exceptions as err:
                _LOGGER.error(
                    "Failed to execute an ADB command. ADB connection re-"
                    "establishing attempt in the next update. Error: %s",
                    err,
                )
                await self.aftv.adb_close()
                self._attr_available = False
                return None
            except Exception:
                # An unforeseen exception occurred. Close the ADB connection so that
                # it doesn't happen over and over again, then raise the exception.
                await self.aftv.adb_close()
                self._attr_available = False
                raise

        return _adb_exception_catcher

    return _adb_decorator


class ADBDevice(MediaPlayerEntity):
    """Representation of an Android TV or Fire TV device."""

    def __init__(
        self,
        aftv,
        name,
        dev_type,
        unique_id,
        entry_id,
        entry_data,
    ):
        """Initialize the Android TV / Fire TV device."""
        self.aftv = aftv
        self._attr_name = name
        self._attr_unique_id = unique_id
        self._entry_id = entry_id
        self._entry_data = entry_data

        info = aftv.device_properties
        model = info.get(ATTR_MODEL)
        self._attr_device_info = DeviceInfo(
            identifiers={(DOMAIN, unique_id)},
            model=f"{model} ({dev_type})" if model else dev_type,
            name=name,
        )
        if manufacturer := info.get(ATTR_MANUFACTURER):
            self._attr_device_info[ATTR_MANUFACTURER] = manufacturer
        if sw_version := info.get(ATTR_SW_VERSION):
            self._attr_device_info[ATTR_SW_VERSION] = sw_version
        if mac := format_mac(info.get(PROP_ETHMAC) or info.get(PROP_WIFIMAC, "")):
            self._attr_device_info[ATTR_CONNECTIONS] = {(CONNECTION_NETWORK_MAC, mac)}

        self._app_id_to_name = {}
        self._app_name_to_id = {}
        self._get_sources = DEFAULT_GET_SOURCES
        self._exclude_unnamed_apps = DEFAULT_EXCLUDE_UNNAMED_APPS
        self._screencap = DEFAULT_SCREENCAP
        self.turn_on_command = None
        self.turn_off_command = None

        # ADB exceptions to catch
        if not aftv.adb_server_ip:
            # Using "adb_shell" (Python ADB implementation)
            self.exceptions = (
                AdbTimeoutError,
                BrokenPipeError,
                ConnectionResetError,
                ValueError,
                InvalidChecksumError,
                InvalidCommandError,
                InvalidResponseError,
                TcpTimeoutException,
            )
        else:
            # Using "pure-python-adb" (communicate with ADB server)
            self.exceptions = (ConnectionResetError, RuntimeError)

        # Property attributes
        self._attr_extra_state_attributes = {
            ATTR_ADB_RESPONSE: None,
            ATTR_HDMI_INPUT: None,
        }

    def _process_config(self):
        """Load the config options."""
        _LOGGER.debug("Loading configuration options")
        options = self._entry_data[ANDROID_DEV_OPT]

        apps = options.get(CONF_APPS, {})
        self._app_id_to_name = APPS.copy()
        self._app_id_to_name.update(apps)
        self._app_name_to_id = {
            value: key for key, value in self._app_id_to_name.items() if value
        }

        # Make sure that apps overridden via the `apps` parameter are reflected
        # in `self._app_name_to_id`
        for key, value in apps.items():
            self._app_name_to_id[value] = key

        self._get_sources = options.get(CONF_GET_SOURCES, DEFAULT_GET_SOURCES)
        self._exclude_unnamed_apps = options.get(
            CONF_EXCLUDE_UNNAMED_APPS, DEFAULT_EXCLUDE_UNNAMED_APPS
        )
        self._screencap = options.get(CONF_SCREENCAP, DEFAULT_SCREENCAP)
        self.turn_off_command = options.get(CONF_TURN_OFF_COMMAND)
        self.turn_on_command = options.get(CONF_TURN_ON_COMMAND)

    async def async_added_to_hass(self):
        """Set config parameter when add to hass."""
        await super().async_added_to_hass()
        self._process_config()
        self.async_on_remove(
            async_dispatcher_connect(
                self.hass,
                f"{SIGNAL_CONFIG_ENTITY}_{self._entry_id}",
                self._process_config,
            )
        )
        return

    @property
    def media_image_hash(self) -> str | None:
        """Hash value for media image."""
        return f"{datetime.now().timestamp()}" if self._screencap else None

    @adb_decorator()
    async def _adb_screencap(self):
        """Take a screen capture from the device."""
        return await self.aftv.adb_screencap()

    async def async_get_media_image(self):
        """Fetch current playing image."""
        if not self._screencap or self.state in (STATE_OFF, None) or not self.available:
            return None, None

        media_data = await self._adb_screencap()
        if media_data:
            return media_data, "image/png"

        # If an exception occurred and the device is no longer available, write the state
        if not self.available:
            self.async_write_ha_state()

        return None, None

    @adb_decorator()
    async def async_media_play(self):
        """Send play command."""
        await self.aftv.media_play()

    @adb_decorator()
    async def async_media_pause(self):
        """Send pause command."""
        await self.aftv.media_pause()

    @adb_decorator()
    async def async_media_play_pause(self):
        """Send play/pause command."""
        await self.aftv.media_play_pause()

    @adb_decorator()
    async def async_turn_on(self):
        """Turn on the device."""
        if self.turn_on_command:
            await self.aftv.adb_shell(self.turn_on_command)
        else:
            await self.aftv.turn_on()

    @adb_decorator()
    async def async_turn_off(self):
        """Turn off the device."""
        if self.turn_off_command:
            await self.aftv.adb_shell(self.turn_off_command)
        else:
            await self.aftv.turn_off()

    @adb_decorator()
    async def async_media_previous_track(self):
        """Send previous track command (results in rewind)."""
        await self.aftv.media_previous_track()

    @adb_decorator()
    async def async_media_next_track(self):
        """Send next track command (results in fast-forward)."""
        await self.aftv.media_next_track()

    @adb_decorator()
    async def async_select_source(self, source):
        """Select input source.

        If the source starts with a '!', then it will close the app instead of
        opening it.
        """
        if isinstance(source, str):
            if not source.startswith("!"):
                await self.aftv.launch_app(self._app_name_to_id.get(source, source))
            else:
                source_ = source[1:].lstrip()
                await self.aftv.stop_app(self._app_name_to_id.get(source_, source_))

    @adb_decorator()
    async def adb_command(self, command):
        """Send an ADB command to an Android TV / Fire TV device."""
        if key := KEYS.get(command):
            await self.aftv.adb_shell(f"input keyevent {key}")
            return

        if command == "GET_PROPERTIES":
            self._attr_extra_state_attributes[ATTR_ADB_RESPONSE] = str(
                await self.aftv.get_properties_dict()
            )
            self.async_write_ha_state()
            return

        try:
            response = await self.aftv.adb_shell(command)
        except UnicodeDecodeError:
            return

        if isinstance(response, str) and response.strip():
            self._attr_extra_state_attributes[ATTR_ADB_RESPONSE] = response.strip()
            self.async_write_ha_state()

        return

    @adb_decorator()
    async def learn_sendevent(self):
        """Translate a key press on a remote to ADB 'sendevent' commands."""
        output = await self.aftv.learn_sendevent()
        if output:
            self._attr_extra_state_attributes[ATTR_ADB_RESPONSE] = output
            self.async_write_ha_state()

            msg = f"Output from service '{SERVICE_LEARN_SENDEVENT}' from {self.entity_id}: '{output}'"
            persistent_notification.async_create(
                self.hass,
                msg,
                title="Android TV",
            )
            _LOGGER.info("%s", msg)

    @adb_decorator()
    async def service_download(self, device_path, local_path):
        """Download a file from your Android TV / Fire TV device to your Home Assistant instance."""
        if not self.hass.config.is_allowed_path(local_path):
            _LOGGER.warning("'%s' is not secure to load data from!", local_path)
            return

        await self.aftv.adb_pull(local_path, device_path)

    @adb_decorator()
    async def service_upload(self, device_path, local_path):
        """Upload a file from your Home Assistant instance to an Android TV / Fire TV device."""
        if not self.hass.config.is_allowed_path(local_path):
            _LOGGER.warning("'%s' is not secure to load data from!", local_path)
            return

        await self.aftv.adb_push(local_path, device_path)


class AndroidTVDevice(ADBDevice):
    """Representation of an Android TV device."""

    _attr_supported_features = SUPPORT_ANDROIDTV

    @adb_decorator(override_available=True)
    async def async_update(self):
        """Update the device state and, if necessary, re-connect."""
        # Check if device is disconnected.
        if not self.available:
            # Try to connect
            self._attr_available = await self.aftv.adb_connect(always_log_errors=False)

        # If the ADB connection is not intact, don't update.
        if not self.available:
            return

        # Get the updated state and attributes.
        (
            state,
            self._attr_app_id,
            running_apps,
            _,
            self._attr_is_volume_muted,
            self._attr_volume_level,
            self._attr_extra_state_attributes[ATTR_HDMI_INPUT],
        ) = await self.aftv.update(self._get_sources)

        self._attr_state = ANDROIDTV_STATES.get(state)
        if self._attr_state is None:
            self._attr_available = False

        if running_apps:
            self._attr_source = self._attr_app_name = self._app_id_to_name.get(
                self._attr_app_id, self._attr_app_id
            )
            sources = [
                self._app_id_to_name.get(
                    app_id, app_id if not self._exclude_unnamed_apps else None
                )
                for app_id in running_apps
            ]
            self._attr_source_list = [source for source in sources if source]
        else:
            self._attr_source_list = None

    @adb_decorator()
    async def async_media_stop(self):
        """Send stop command."""
        await self.aftv.media_stop()

    @adb_decorator()
    async def async_mute_volume(self, mute):
        """Mute the volume."""
        await self.aftv.mute_volume()

    @adb_decorator()
    async def async_set_volume_level(self, volume):
        """Set the volume level."""
        await self.aftv.set_volume_level(volume)

    @adb_decorator()
    async def async_volume_down(self):
        """Send volume down command."""
        self._attr_volume_level = await self.aftv.volume_down(self._attr_volume_level)

    @adb_decorator()
    async def async_volume_up(self):
        """Send volume up command."""
        self._attr_volume_level = await self.aftv.volume_up(self._attr_volume_level)


class FireTVDevice(ADBDevice):
    """Representation of a Fire TV device."""

    _attr_supported_features = SUPPORT_FIRETV

    @adb_decorator(override_available=True)
    async def async_update(self):
        """Update the device state and, if necessary, re-connect."""
        # Check if device is disconnected.
        if not self.available:
            # Try to connect
            self._attr_available = await self.aftv.adb_connect(always_log_errors=False)

        # If the ADB connection is not intact, don't update.
        if not self.available:
            return

        # Get the `state`, `current_app`, `running_apps` and `hdmi_input`.
        (
            state,
            self._attr_app_id,
            running_apps,
            self._attr_extra_state_attributes[ATTR_HDMI_INPUT],
        ) = await self.aftv.update(self._get_sources)

        self._attr_state = ANDROIDTV_STATES.get(state)
        if self._attr_state is None:
            self._attr_available = False

        if running_apps:
            self._attr_source = self._app_id_to_name.get(
                self._attr_app_id, self._attr_app_id
            )
            sources = [
                self._app_id_to_name.get(
                    app_id, app_id if not self._exclude_unnamed_apps else None
                )
                for app_id in running_apps
            ]
            self._attr_source_list = [source for source in sources if source]
        else:
            self._attr_source_list = None

    @adb_decorator()
    async def async_media_stop(self):
        """Send stop (back) command."""
        await self.aftv.back()
