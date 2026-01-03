# Zanix's Smart Home

| zanix/home-assistant-config | Home Assistant Community |
| :---: | :---: |
| [![Home Assistant Version][ha-version-shield]][ha-version] [![Github Action Status][github-build-status-shield]][github-build-status] | [![Home Assistant Community Forum][forum-shield]][forum] |
| [![Last Commit][github-last-commit]][github-master] [![GitHub Activity][commits-shield]][commits] | [![Discord][discord-shield]][discord] |

This is my Home Assistant Configuration created for use with the [Home Assistant OS](https://www.home-assistant.io/docs/installation/docker/)
version of [Home Assistant][home-assistant] running on an Intel NUC5i5MYHE.

> [!TIP]
> If you want to back up your own Home Assistant configuration to GitHub, follow [this guide](https://community.home-assistant.io/t/sharing-your-configuration-on-github/195144).

## Software

<details><summary>9 Add-ons</summary>

- Mosquitto broker
- ESPHome Device Builder
- AdGuard Home
- Advanced SSH & Web Terminal
- Studio Code Server
- Zigbee2MQTT
- Z-Wave JS UI
- Govee to MQTT Bridge
- DbStats

---

</details>

## Technical Details

| Description    | Value |
| -------------- | -- |
| All Entities   | 4912 |
| Sensors        | 1732 |
| Binary Sensors | 358 |
| Lights         | 77 |
| Switches       | 754 |

<details><summary>Stock Integrations</summary>

Many integrations can only be enabled from within the UI, here is a list of integrations that are enabled via the Integrations UI on my Home Assistant.

### [AdGuard Home](https://www.home-assistant.io/integrations/adguard)

The AdGuard integration allows you to control and monitor your AdGuard Home instance.

### [AirNow](https://www.home-assistant.io/integrations/airnow)

The airnow integration uses the AirNow web service as a source for air quality data for your location.

### [Android Debug Bridge](https://www.home-assistant.io/integrations/androidtv)

The Android Debug Bridge integration allows you to control an Android device or Amazon Fire TV device.

### [Android TV Remote](https://www.home-assistant.io/integrations/androidtv_remote)

The Android TV Remote integration allows you to control an Android TV device by sending commands and launching apps.

### [Backup](https://www.home-assistant.io/integrations/backup)

The Backup integration is used by all installation types to create and restore backups.

### [Bluetooth](https://www.home-assistant.io/integrations/bluetooth)

The Bluetooth integration will detect nearby Bluetooth devices.

### [Default Config](https://www.home-assistant.io/integrations/default_config)

This integration is a meta-component and configures a default set of integrations.

### [Denon AVR Network Receivers](https://www.home-assistant.io/integrations/denonavr)

The denonavr platform allows you to control Denon Network Receivers.

### [EcoBee](https://www.home-assistant.io/integrations/ecobee)

The ecobee integration lets you control and view sensor data from ecobee thermostats.

> Also connected via HomeKit Controller integration for local control.

### [Ecowitt](https://www.home-assistant.io/integrations/ecowitt)

Integration an Ecowitt wether station.

### [Electricity Maps](https://www.home-assistant.io/integrations/co2signal)

Queries the Electricity Maps API for the CO2 intensity of a specific region.

### [ESPHome](https://www.home-assistant.io/integrations/esphome)

Connect ESPHome devices directly with the native ESPHome API.

### [File Size](https://www.home-assistant.io/integrations/filesize)

The filesize sensor is for displaying the size in MB of a file.

### [Glances](https://www.home-assistant.io/integrations/glances)

The glances integration allows you to monitor the system information provided by the Glances API.

### [Google Cast](https://www.home-assistant.io/integrations/cast)

Google Cast integration.

### [Google Cloud Platform](https://www.home-assistant.io/integrations/google_cloud)

The google_cloud platform allows you to use Google Cloud Platform API and integrate them into Home Assistant.

### [Google Generative AI](https://hass.clarkjo.info/config/integrations/integration/google_generative_ai_conversation)

The Google Generative AI integration adds a conversation agent powered by Google Generative AI in Home Assistant.

### [HomeKit Device](https://www.home-assistant.io/integrations/homekit_controller)

The HomeKit Device integration allows you to connect accessories with the “Works with HomeKit” logo to Home Assistant.

### [iBeacon Tracker](https://www.home-assistant.io/integrations/ibeacon)

iBeacons are Bluetooth-enabled devices that advertise identifiers to announce their location.

### [InfluxDB](https://www.home-assistant.io/integrations/influxdb)

The influxdb integration makes it possible to transfer all state changes to an external InfluxDB database.

### [INKBIRD](https://www.home-assistant.io/integrations/inkbird)

Integrates INKBIRD devices into Home Assistant.

### [IQVIA](https://www.home-assistant.io/integrations/iqvia)

The iqvia sensor platform collects and displays allergy, asthma and disease information.

### [Jellyfin](https://www.home-assistant.io/integrations/jellyfin)

Exposes a Jellyfin server as a media source in Home Assistant.

### [Local Calendar](https://www.home-assistant.io/integrations/local_calendar)

The local calendar integration allows you to create a calendar of events for powering automations.

### [Logitech Harmony Hub](https://www.home-assistant.io/integrations/harmony)

The harmony remote platform allows you to control the state of your Harmony Hub Device.

### [Mealie](https://www.home-assistant.io/integrations/mealie)

The Mealie integration will fetch data from your Mealie instance.

### [Meater](https://www.home-assistant.io/integrations/meater)

The Meater Smart Meat Thermometer integration allows for communicating with the Meater Temperature Probe from Apption Labs.

### [Mobile App](https://www.home-assistant.io/integrations/mobile_app)

The Mobile App integration allows Home Assistant mobile apps to easily integrate with Home Assistant.

### [Moon](https://www.home-assistant.io/integrations/moon)

The Moon integration tracks the phases of the moon.

### [MQTT](https://www.home-assistant.io/integrations/mqtt)

Allows extremely lightweight publish/subscribe messaging transport

### [MusicCast](https://www.home-assistant.io/integrations/yamaha_musiccast)

The Yamaha MusicCast integration allows you to control Yamaha MusicCast Receivers

### [OpenAI Conversation](https://www.home-assistant.io/integrations/openai_conversation)

The OpenAI integration adds a conversation agent powered by OpenAI in Home Assistant.

### [OpenWeatherMap](https://www.home-assistant.io/integrations/openweathermap)

The OpenWeatherMap weather integrations uses OpenWeatherMap as a source for current meteorological data for your location.

### [Ping (ICMP)](https://www.home-assistant.io/integrations/ping)

Uses ICMP pings to check if a device is online.

### [Plex Media Server](https://www.home-assistant.io/integrations/plex)

The plex integration allows you to connect to a Plex Media Server.

### [Proximity](https://www.home-assistant.io/integrations/proximity)

The proximity integration allows you to monitor the proximity of devices or persons to a particular zone and the direction of travel.

### [Python Scripts](https://www.home-assistant.io/integrations/python_script)

This integration allows you to write Python scripts that are exposed as services.

### [Radio Browser](https://www.home-assistant.io/integrations/radio_browser)

The Radio Browser integration allows you to use the directory of radio stations collected on Radio Browser.

### [Reolink](https://www.home-assistant.io/integrations/reolink)

The integration allows you to control Reolink NVRs or cameras.

### [RESTful](https://www.home-assistant.io/integrations/rest)

The rest sensor platform is consuming a given endpoint which is exposed by a RESTful API of a device, an application, or a web service. The sensor has support for GET and POST requests.

### [RESTful Command](https://www.home-assistant.io/integrations/rest_command)

This integration can expose regular REST commands as services.

### [Shell Command](https://www.home-assistant.io/integrations/shell_command)

This integration can expose regular shell commands as services.

### [Shopping list](https://www.home-assistant.io/integrations/shopping_list)

The Shopping list integration allows you to keep track of shopping list items.

### [SNMP](https://www.home-assistant.io/integrations/snmp)

This is a standardized method for monitoring/managing network connected devices. SNMP uses a tree-like hierarchy where each node is an object.

### [Sony Playstation 4](https://www.home-assistant.io/integrations/ps4)

The PS4 integration allows you to control a Sony PlayStation 4 console.

### [Spotify](https://www.home-assistant.io/integrations/spotify)

The Spotify media player integration allows you to control Spotify playback.

### [SQL](https://www.home-assistant.io/integrations/sql)

The sql sensor platform enables you to use values from an SQL database supported by the sqlalchemy library, to populate a sensor state (and attributes).

### [Steam](https://www.home-assistant.io/integrations/steam_online)

The Steam integration will allow you to track the online status of public Steam accounts.

### [Sun](https://www.home-assistant.io/integrations/sun)

The sun integration will use the location as configured to track if the sun is above or below the horizon.

### [System Monitor](https://www.home-assistant.io/integrations/systemmonitor)

Monitors disk usage, memory usage, CPU usage, and running processes

### [Tasmota](https://www.home-assistant.io/integrations/tasmota)

This integration allows to control of Tasmota devices over MQTT.

### [Text-to-Speech (TTS)](https://www.home-assistant.io/integrations/tts)

Text-to-Speech (TTS) enables Home Assistant to speak to you.

### [Twinkly](https://www.home-assistant.io/integrations/twinkly)

The Twinkly integration allows you to control Twinkly LED string.

### [UniFi Network](https://www.home-assistant.io/integrations/unifi)

The unifi integration allows you to connects to a UniFi controller and gather device tracking data.

### [Universal media player](https://www.home-assistant.io/integrations/universal)

A universal media player can combine multiple existing entities in Home Assistant into a single media player entity. This is used to create a single media player entity that can control an entire media center.

### [Uptime](https://www.home-assistant.io/integrations/uptime)

The uptime integration provides a sensor that stores the timestamp (date and time) when Home Assistant was last started.

### [Utility Meter](https://www.home-assistant.io/integrations/utility_meter)

The Utility Meter integration provides functionality to track consumptions of various utilities (e.g., energy, gas, water, heating).

### [Vizio SmartCast](https://www.home-assistant.io/integrations/vizio)

The vizio integration allows you to control SmartCast-compatible TVs and sound bars

### [Wake on LAN](https://www.home-assistant.io/integrations/wake_on_lan)

The wake_on_lan integration enables the ability to send magic packets to Wake on LAN capable devices to turn them on.

### [Withings](https://www.home-assistant.io/integrations/withings)

The Withings integration consumes data from various health products produced by Withings.

### [WLED](https://www.home-assistant.io/integrations/wled)

WLED is a fast and feature-rich implementation of an ESP8266/ESP32 webserver to control NeoPixel (WS2812B, WS2811, SK6812, APA102, and similar) LED's.

### [Workday](https://www.home-assistant.io/integrations/workday)

The workday binary sensor indicates whether the current day is a workday or not.

### [Z-Wave JS](https://www.home-assistant.io/integrations/zwave_js)

The Z-Wave integration allows you to control a Z-Wave network via the [Z-Wave JS UI](https://zwave-js.github.io/zwave-js-ui) driver. This is the recommended Z-Wave integration for Home Assistant.

---

</details>

<details><summary>26 Custom Integrations</summary>

### [Adaptive Lighting](https://github.com/basnijholt/adaptive-lighting) [v1.28.0]

Adaptive Lighting custom component for Home Assistant

Authors: [@basnijholt](https://github.com/basnijholt), [@RubenKelevra](https://github.com/RubenKelevra), [@th3w1zard1](https://github.com/th3w1zard1), [@protyposis](https://github.com/protyposis).

### [Bambu Lab](https://github.com/greghesp/ha-bambulab) [v2.2.16]

A Home Assistant Integration for Bambu Lab Printers

Authors: [@greghesp](https://github.com/greghesp), [@AdrianGarside](https://github.com/AdrianGarside).

### [Browser Mod](https://github.com/thomasloven/hass-browser_mod) [v2.6.4]

🔹 A Home Assistant integration to turn your browser into a controllable entity and media player

### [Custom Icons](https://github.com/thomasloven/hass-custom_icons) [v1.0.2]

🔹 Use custom svg icons in Home Assistant

Authors: [@thomasloven](https://github.com/thomasloven).

### [Dreame Vacuum](https://github.com/Tasshack/dreame-vacuum) [v1.0.7]

Home Assistant integration for Dreame robot vacuums with map support

Authors: [@tasshack](https://github.com/tasshack).

### [Dreamscreen Service](https://github.com/J3n50m4t/Home-Assistant-DreamScreen-Service)

Home Assistant Service for sending commands to a Wifi enabled DreamScreen

Authors: [https://github.com/GregoryDosh](https://github.com/https://github.com/GregoryDosh).

### [Frigate](https://github.com/blakeblackshear/frigate-hass-integration) [v5.11.0]

Frigate integration for Home Assistant

Authors: [@blakeblackshear](https://github.com/blakeblackshear), [@dermotduffy](https://github.com/dermotduffy), [@NickM-27](https://github.com/NickM-27).

### [Gasbuddy](https://github.com/firstof9/ha-gasbuddy) [v1.1.4]

Component to integrate with GasBuddy fuel price tracker.

Authors: [@firstof9](https://github.com/firstof9).

### [Ge Home (Smarthq)](https://github.com/simbaja/ha_gehome) [v2025.12.0]

GE Home Appliances (SmartHQ) for Home Assistant

Authors: [@simbaja](https://github.com/simbaja).

### [Generate Readme](https://github.com/custom-components/readme) [v0.5.0]

Use Jinja and data from Home Assistant to generate your README.md file

Authors: [@ludeeus](https://github.com/ludeeus).

### [Google Home](https://github.com/leikoilja/ha-google-home) [v1.13.1]

Home Assistant Google Home custom component

Authors: [@leikoilja](https://github.com/leikoilja), [@DurgNomis-drol](https://github.com/DurgNomis-drol), [@ArnyminerZ](https://github.com/ArnyminerZ), [@KapJI](https://github.com/KapJI).

### [Home Assistant Community Store (HACS)](https://github.com/hacs/integration) [v2.0.5]

HACS gives you a powerful UI to handle downloads of all your custom needs.

Authors: [@ludeeus](https://github.com/ludeeus).

### [Hass.Agent 2 Integration   Media Player & Notifications](https://github.com/hass-agent/HASS.Agent-Integration) [v2.1.1]

HASS.Agent's Home Assistant integration. Adds notifications and mediaplayer capabilities to HASS.Agent - a Windows based client (companion app) for Home Assistant.

Authors: [@fillefilip8](https://github.com/fillefilip8), [@DrR0X-glitch](https://github.com/DrR0X-glitch), [@amadeo-alex](https://github.com/amadeo-alex).

### [Holidays](https://github.com/bruxy70/Holidays) [v1.9.10]

📅 Custom Home Assistant integration for public holidays - also used for garbage_collection integration to automatically move scheduled events that fall on a public holiday (by an automation blueprint)

Authors: [@bruxy70](https://github.com/bruxy70).

### [Keymaster](https://github.com/FutureTense/keymaster) [v0.1.0]

Home Assistant integration for managing Z-Wave enabled locks

Authors: [@FutureTense](https://github.com/FutureTense), [@firstof9](https://github.com/firstof9), [@raman325](https://github.com/raman325).

### [Kia Uvo / Hyundai Bluelink](https://github.com/Hyundai-Kia-Connect/kia_uvo) [v2.46.2]

A Home Assistant HACS integration that supports Kia Connect(Uvo) and Hyundai Bluelink. The integration supports the EU, Canada and the USA.

Authors: [@fuatakgun](https://github.com/fuatakgun).

### [Kidschores](https://github.com/ad-ha/kidschores-ha) [v0.3.1]

KidsChores Custom Integration for Home Assistant

Authors: [@ad-ha](https://github.com/ad-ha).

### [Mail And Packages](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) [v0.4.2]

Home Assistant integration providing day of package counts and USPS informed delivery images.

Authors: [@moralmunky](https://github.com/moralmunky), [@firstof9](https://github.com/firstof9).

### [Mqtt Media Player](https://github.com/bkbilly/mqtt_media_player) [v2025.11.0]

Fill out your Media Player Entity with MQTT Topics

Authors: [@bkbilly](https://github.com/bkbilly).

### [Neakasa](https://github.com/timniklas/hass-neakasa) [v1.2]

Home Assistant Neakasa Integration

Authors: [@timniklas](https://github.com/timniklas).

### [Opensprinkler Integration For Home Assistant](https://github.com/vinteo/hass-opensprinkler) [v1.5.3]

OpenSprinkler Integration for Home Assistant

Authors: [@vinteo](https://github.com/vinteo).

### [Spook 👻 Your Homie](https://github.com/frenck/spook) [v4.0.1]

A scary 👻 powerful toolbox 🧰 for Home Assistant 🏡

Authors: [@frenck](https://github.com/frenck).

### [Subaru (Hacs)](https://github.com/G-Two/homeassistant-subaru) [v0.7.20]

MySubaru Connected Services Custom Component for Home Assistant

Authors: [@G-Two](https://github.com/G-Two).

### [Tapo: Cameras Control](https://github.com/JurajNyiri/HomeAssistant-Tapo-Control) [v7.0.12]

Control for Tapo cameras as a Home Assistant component

Authors: [@JurajNyiri](https://github.com/JurajNyiri).

### [Watchman](https://github.com/dummylabs/thewatchman) [v0.6.5]

Home Assistant custom integration to keep track of missing entities and actions in your config files

Authors: [@dummylabs](https://github.com/dummylabs).

### [Webrtc Camera](https://github.com/AlexxIT/WebRTC) [v3.6.1]

Home Assistant custom component for real-time viewing of almost any camera stream using WebRTC and other technologies.

Authors: [@AlexxIT](https://github.com/AlexxIT).

---

</details>

<details><summary>40 Dashboard Plugins</summary>

### [Advanced Camera Card](https://github.com/dermotduffy/advanced-camera-card) [v7.19.4]

A comprehensive camera card for Home Assistant

### [Apexcharts Card](https://github.com/RomRider/apexcharts-card) [v2.2.3]

📈 A Lovelace card to display advanced graphs and charts based on ApexChartsJS for Home Assistant

### [Auto Entities](https://github.com/thomasloven/lovelace-auto-entities) [v1.16.1]

🔹Automatically populate the entities-list of lovelace cards

### [Badge Horizontal Container Card](https://github.com/selvalt7/badge-horizontal-container-card) [v0.4.2]

Simple badge container card for Home Assistant

### [Bar Card](https://github.com/spacerokk/bar-card) [v4.0.8]

Customizable Animated Bar card for Home Assistant Lovelace

### [Battery State Card / Entity Row](https://github.com/maxwroc/battery-state-card) [v3.2.1]

Battery state card for Home Assistant

### [Bubble Card](https://github.com/Clooos/Bubble-Card) [v3.0.4]

Bubble Card is a minimalist card collection for Home Assistant with a nice pop-up touch.

### [Button Card](https://github.com/custom-cards/button-card) [v7.0.1]

❇️ Lovelace button-card for home assistant

### [Card Mod](https://github.com/thomasloven/lovelace-card-mod) [v4.1.0]

🔹 Add CSS styles to (almost) any lovelace card

### [Card Tools](https://github.com/thomasloven/lovelace-card-tools) [v11]

🔹A collection of tools for other lovelace plugins to use

### [Custom Features For Home Assistant Cards](https://github.com/Nerwyn/custom-card-features) [v4.7.4]

Home Assistant custom features for tile cards and more. Call any action using buttons, dropdowns, inputs, selectors, sliders, spinboxes, and toggles.

### [Expander Card](https://github.com/MelleD/lovelace-expander-card) [v4.0.3]

Expander card for HomeAssistant

### [Fold Entity Row](https://github.com/thomasloven/lovelace-fold-entity-row) [v.2.3.2]

🔹 A foldable row for entities card, containing other rows

### [Gauge Card Pro](https://github.com/benjamin-dcs/gauge-card-pro) [v1.8.1]

Build beautiful Gauge cards using 🌈 gradients and 🛠️ templates

### [Ha Floorplan 🖌🎨 | Your Imagination (Almost) Defines The Limits](https://github.com/ExperienceLovelace/ha-floorplan) [v1.1.4]

Bring new life to Home Assistant. By mapping entities to a SVG-object, you're able to control devices, show states, calling services - and much more. Add custom styling on top, to visualize whatever you can think of. Your imagination just became the new limit.

### [History Explorer Card](https://github.com/SpangleLabs/history-explorer-card) [v1.0.54]

A card for Home Assistant Lovelace for exploring the history of your entities interactively and in real time.

### [Horizon Card](https://github.com/rejuvenate/lovelace-horizon-card) [v1.3.1]

Sun Card successor: Visualize the position of the Sun over the horizon.

### [Hourly Weather Card](https://github.com/decompil3d/lovelace-hourly-weather) [v6.8.0]

Hourly weather card for Home Assistant. Visualize upcoming weather conditions as a colored horizontal bar.

### [Hui Element](https://github.com/thomasloven/lovelace-hui-element) [v1a80547]

🔹 Use built-in elements in the wrong place

### [Kiosk Mode](https://github.com/NemesisRE/kiosk-mode) [v9.0.2]

🙈 Hides the Home Assistant header and/or sidebar

### [Layout Card](https://github.com/thomasloven/lovelace-layout-card) [v2.4.7]

🔹 Get more control over the placement of lovelace cards.

### [Material You Utilities   Material Design 3 Color Theme Generation And Component Modification](https://github.com/Nerwyn/material-you-utilities) [v2.0.27]

Material Design 3 Color Theme Generation and Component Modification for Home Assistant

### [Mini Graph Card](https://github.com/kalkih/mini-graph-card) [v0.13.0]

Minimalistic graph card for Home Assistant Lovelace UI

### [Mini Media Player](https://github.com/kalkih/mini-media-player) [v1.16.10]

Minimalistic media card for Home Assistant Lovelace UI

### [Mushroom](https://github.com/piitaya/lovelace-mushroom) [v5.0.8]

Build a beautiful Home Assistant dashboard easily

### [Opensprinkler Card](https://github.com/rianadon/opensprinkler-card) [v1.13]

Home Assistant card for collecting OpenSprinkler status

### [Paper Buttons Row](https://github.com/jcwillox/lovelace-paper-buttons-row) [v2.3.1]

Adds highly configurable buttons that use actions and per-state styling.

### [Platinum Weather Card](https://github.com/tommyjlong/platinum-weather-card) [v1.2.0]

This is a fully customisable weather card for Home Assistant with a graphical configuration.

### [Power Flow Card Plus](https://github.com/flixlix/power-flow-card-plus) [v0.2.6]

A power distribution card inspired by the official Energy Distribution card for Home Assistant

### [Sankey Chart Card](https://github.com/MindFreeze/ha-sankey-chart) [v3.10.0]

A Home Assistant lovelace card to display a sankey chart. For example for power consumption

### [Simple Tabs Card](https://github.com/agoberg85/home-assistant-simple-tabs) [v1.1.7]

A simple and configurable tabs card for Home Assistant Dashboards.

### [Steam Card](https://github.com/Kibibit/kb-steam-card) [v1.1.1]

A Home Assistant card for Steam integrations

### [Streamline Card](https://github.com/brunosabot/streamline-card) [v0.1.0]

Streamline your Lovelace configuration with with a card template system.

### [Tabbed Card](https://github.com/kinghat/tabbed-card) [v0.3.3]

a custom card for home assistant that utilizes tabs to segregate individual cards.

### [Timer Bar Card](https://github.com/rianadon/timer-bar-card) [v1.31.1]

A progress bar display for Home Assistant timers

### [Ultra Vehicle Card](https://github.com/WJDDesigns/Ultra-Vehicle-Card) [v3.0.0]

This custom card allows you to display vehicle information in your Home Assistant dashboard, including the vehicle name, image, and fuel or charge level.

### [Uptime Card](https://github.com/dylandoamaral/uptime-card) [v0.16.0]

Minimalistic uptime card for Home Assistant Lovelace UI

### [Vertical Stack In Card](https://github.com/ofekashery/vertical-stack-in-card) [v1.0.1]

📐 Home Assistant Card: Group multiple cards into a single sleek card.

### [Wind Rose Card](https://github.com/aukedejong/lovelace-windrose-card) [v1.26.1]

Home Assistant Lovelace Windrose Card

### [Xiaomi Vacuum Map Card](https://github.com/PiotrMachowski/lovelace-xiaomi-vacuum-map-card) [v2.3.1]

This card provides a user-friendly way to fully control map-based vacuums in Home Assistant. Supported brands include Xiaomi (Roborock/Viomi/Dreame/Roidmi/Valetudo/Valetudo RE), Neato, Wyze, Roomba, Ecovacs (and probably more).

---

</details><details><summary>2 Themes</summary>

### [HA LCARS](https://github.com/th3jesta/ha-lcars) [vHA-LCARS-3.2.1]

LCARS theme for Home Assistant

### [Material You Theme   A Fully Featured Implementation Of Material Design 3](https://github.com/Nerwyn/material-you-theme) [v5.0.5]

Material Design 3 Theme for Home Assistant

---

</details>

## Devices

### Climate

- [EcoBee Enhanced Thermostat](https://www.amazon.com/dp/B09XXTQPXC) - Smart Thermostat with [extra sensors](https://www.amazon.com/dp/B07NQVWRR3)

### Lighting

- [Aeotec Nano Dimmer](https://www.amazon.com/dp/B06XC4CH98) - Hard-wired into lamps with local control using a momentary switch on the metal frame of a lamp
- [DreamScreen](https://www.amazon.com/dp/B01M6UETVR) (4K DIY) - Responsive LED Backlighting for Video, Music & Games
- [Govee Smart LED Floor Lamp](https://www.amazon.com/dp/B097T5YFZ3) - Nice white light (2200K-6500K) adjustable lamp
- [Honeywell 39348/ZW4005 Switch](https://www.amazon.com/Honeywell-Interchangeable-Repeater-Extender-Required/dp/B07B3LY1SJ)
- [Inovelli LZW30 Black Series On/Off Switch](https://support.inovelli.com/portal/en/kb/articles/products-switches-on-off-lzw30-spec-sheet)
- [Inovelli LZW30-SN Red Series On/Off Switch](https://support.inovelli.com/portal/en/kb/articles/products-switches-on-off-lzw30-sn-spec-sheet)
- [Inovelli VZM31-SN Blue Series Smart 2-1 Switch](https://inovelli.com/products/blue-series-smart-2-1-switch-on-off-or-dimmer)
- [Philips Hue White Ambiance](https://www.amazon.com/dp/B0753H5GKN)
- [Sengled Zigbee Bulb](https://www.amazon.com/dp/B07HL5GPPF)
- [Sengled Zigbee Smart Light Bulbs BR30](https://www.amazon.com/dp/B08R5FWMCW)
- [Tuya Star Projector](https://solution.tuya.com/projects/CMamw6tl7mwgzm) - Light and laser projector, [hacked](https://github.com/seberm/esphome-SK20-Nebula-Light/tree/master) with [Tuya Cloudcutter](https://github.com/tuya-cloudcutter/tuya-cloudcutter)
- [WLED](https://github.com/Aircoookie/WLED) - DIY light strip
- [Zooz ZEN71 On-Off Switch](https://www.getzooz.com/zooz-zen71-on-off-switch/)

### Sensor

- [AirGradient One](https://www.airgradient.com/indoor/) - Indoor Air Quality Monitor
- [Apollo MSR-1](https://shop.apolloautomation.cloud/products/multisensor-mk1) - mmWave CO2 Multisensor
- [Aqara Water Leak Sensor](https://www.amazon.com/dp/B07D39MSZS) - Detect water leaks
- [Dome Water Leak Sensor](https://www.amazon.com/dp/B01LXR0B8Q) - Detect water leaks
- [Emporia Vue 3](https://www.amazon.com/gp/product/B0C79PNK84) - Real Time Electricity Monitor/Meter
  flashed for local data with [custom firmware](https://github.com/emporia-vue-local/esphome)
- [ESPHome](https://esphome.io) - DIY devices
- [THIRDREALITY Zigbee Motion Sensor](https://www.amazon.com/dp/B09MVKWBFF)
- [THIRDREALITY Zigbee Temperature and Humidity Sensor](https://www.amazon.com/dp/B0BF9W3WMK)
- [THIRDREALITY Zigbee Temperature and Humidity Sensor Lite](https://www.amazon.com/dp/B0D2NVJTS3)
- [Zooz Z-Wave Long Range Q Sensor ZSE11](https://www.amazon.com/dp/B09GDL6BGY)

### Switch

- [IKEA E1524/E1810 5-Button Remote Control](https://www.amazon.com/dp/B07KM1YZWW)
- [Philips Hue Dimmer Remote 324131092621](https://www.amazon.com/dp/B0167Z0P3I)
- [SONOFF S31 Lite 15A Zigbee Smart Plug](https://www.amazon.com/dp/B08Y87WD1X) - Smart plug
- [Tasmota](https://tasmota.github.io/docs/) - Flashed devices
- [THIRDREALITY ZigBee Smart Plug Gen2](https://www.amazon.com/dp/B0BPY5D1KC) - Smart plug with power monitoring
- [Zooz Titan Water Valve Actuator](https://www.thesmartesthouse.com/products/zooz-z-wave-plus-700-series-titan-water-valve-actuator-zac36) - Control the water main

### Camera

- [Reolink Doorbell](https://www.amazon.com/gp/product/B0B7S3JSG7)
- [Tapo C110 2K Camera](https://www.amazon.com/dp/B09YL5G1Y8)
- [Tapo C210 2K Pan/Tilt Camera](https://www.amazon.com/dp/B09Y8TLP25)

### Media

- [ChromeCast](https://www.google.com/chromecast/)
- [Google Home Mini](https://store.google.com/us/product/google_nest_mini)
- [Harmony Hub](https://www.logitech.com/en-us/products/harmony/harmony-hub.html)
- [MagicMirror](https://magicmirror.builders)
- [Nintendo Switch](https://www.amazon.com/dp/B0BFJWCYTL)
- [nVidia Shield](https://www.nvidia.com/en-us/shield/) (2015, 2017, and 2019 versions)
- [PlayStation 4 Pro](https://www.amazon.com/dp/B07K14XKZH)
- [Plex](https://plex.tv)
- [Samsung HW-Q990C 11.1.4ch Soundbar](https://www.amazon.com/dp/B0BZK3SRR7)
- [Vizio P-Series Quantum](https://www.vizio.com/en/tv/p-series-quantum)
- [Vizio P-Series Quantum X](https://www.vizio.com/en/tv/p-series-quantum-x)

### Network

- [SONOFF Zigbee 3.0 USB Dongle Plus Gateway](https://sonoff.tech/product/diy-smart-switch/sonoff-dongle-plus)
- [Ubiquiti Unifi Cloud Gateway Ultra](https://store.ui.com/us/en/products/ucg-ultra)
- [Ubiquiti Switch 24 PoE (250W)](https://store.ui.com/us/en/collections/unifi-switching-standard-power-over-ethernet/products/us-24-250w)
- [Ubiquiti Switch 8](https://store.ui.com/us/en/products/us-8)
- [Ubiquiti Switch Flex Mini](https://store.ui.com/us/en/collections/unifi-switching-utility-mini/products/usw-flex-mini)
- [Ubiquiti Access Point WiFi 6 Pro](https://store.ui.com/us/en/collections/unifi-wifi-flagship-high-capacity/products/u6-pro)
- [Zooz 800 Series Z-Wave Long Range S2](https://www.amazon.com/gp/product/B0BW171KP3)

### Security

- [Yale Assure Lock 2](https://www.amazon.com/gp/product/B0BMS871H7) - Z-Wave controllable lock. Nice to give temp codes for guests or when you forget the keys.

### Other

- [Aqara Pet Feeder C1](https://www.amazon.com/dp/B0B9XZ96PH) - Zigbee controlled pet feeder
- [Bambu Lab P1S](https://us.store.bambulab.com/products/p1s) - 3D printer
- [Dreame L10s Pro Ultra Heat](https://www.amazon.com/gp/product/B0CVL2TT74)
- [INKBIRD BBQ Thermometer IBT-6XS](https://inkbird.com/products/bluetooth-bbq-thermometer-ibt-6xs) - Bluetooth BBQ thermometer
- [OpenSprinkler](https://opensprinkler.com) - Automate and access sprinklers from anywhere
- [Ratgdo](https://paulwieland.github.io/ratgdo/) - WiFi control board for Chamberlain or Liftmaster garage door openers

## Automations

> [!NOTE]
> For more details, see the [automations.xml][automations] file and `automation:` blocks in [integrations].

<details><summary>151 Automations</summary>

- ⏯ Ensure Android TV Apps are Running
- ⏯ Family Room Media Off
- ⏯ Family Room Media State at Night 🚫
- ⏯ Family Room Sound Mode
- ⏯ Living Room Media Off
- ⏯ Living Room Media State at Night 🚫
- ⏯ Living Room Sound Mode 🚫
- ⏯ Living Room Sound Night Mode 🚫
- ⏯ Main Bedroom Media Off
- ⏯ PS4 Harmony Activity
- ⏯️ Samsung Soundbar Night Mode 🚫
- ⏯️ Samsung Soundbar Voice Enhancer 🚫
- ☑️ Cat Feeder Filled
- ☑️ Close Garage Door
- ☑️ Garbage Collection
- ☑️ Guest Mode Check Handler
- ☑️ Ignore Door Alerts
- ☑️ Ignore Garage Door Alerts
- ☑️ Ignore Window Alerts 🚫
- ☑️ Retry Remote Start Ascent
- ☑️ Retry Remote Start Kona
- ☑️ Turn on Water Main
- ♨️ iBBQ Grill Alerts
- ⚙️ Action Sniffer [Zigbee] 🚫
- ⚙️ Automated Backup
- ⚙️ Automation Fail Detector
- ⚙️ Battery Level Low
- ⚙️ Clear TTS Cache 🚫
- ⚙️ Disk Space Low
- ⚙️ Event Sniffer 🚫
- ⚙️ Event Sniffer [Z-Wave JS] 🚫
- ⚙️ Failed Login
- ⚙️ Forward Reload Templates
- ⚙️ Offline Devices
- ⚙️ RAM Usage High
- ⚙️ Scan Interval 🚫
- ⚙️ Startup
- ⚙️ Update Database Filesize Sensor
- ⚙️ Updates Available
- ⚡ Tariff Changes
- ⛩️ Automatic Garage Door
- ✨ DreamScreen Harmony Power Off
- ✨ DreamScreen Harmony Reactive Activity
- ✨ DreamScreen Scene Changed
- ✴️ Joshua Office CO2 Levels
- ✴️ Joshua Office Light On/Off Presence
- 🌐 IP Address Changed
- 🌐 UniFi WAN Status 🚫
- 🍽️ Dishwasher is Done
- 🍽️ Dishwasher Timer
- 🍽️ Microwave Finished
- 🍽️ Oven Bake Timer Completed
- 🍽️ Oven Cook Timer
- 🍽️ Oven is Preheated
- 🍽️ Oven Kitchen Timer
- 🍽️ Oven Kitchen Timer Completed
- 🎄 XMas Lights On/Off 🚫
- 🎄 XMas Tree On/Off 🚫
- 🏢 Joshua Office Mode
- 🐱 Cat Feeder Empty Notification
- 🐱 Cat Feeder Error
- 🐱 Cat Litterbox Full
- 🐱 Cat Litterbox Litter Low
- 💡 All Lights off when Away
- 💡 Dim Front Lights at Night
- 💡 Front Lights off at Sunrise
- 💡 Front Lights on at Sunset
- 💡 Living Room Lamps on/off
- 💡 School Departure Light Indicator
- 💡 Turn Lights On when Arrive
- 💧 Shut-Off Valve Overheated
- 💧 Softener Salt Level Low
- 💧 Water Leak Detected
- 💬 Ascent Failed Notification
- 💬 Ascent Fuel Level Low
- 💬 Ascent Remote Start Expired Notification
- 💬 Ascent Started
- 💬 Bambu P1S Print Completed
- 💬 Bambu P1S Print Status
- 💬 Bambu P1S Printer Error
- 💬 Door Closed
- 💬 Door Left Open
- 💬 Door Left Open and Leaving
- 💬 Door Opened and Away
- 💬 Garage Door Closed
- 💬 Garage Door Left Open
- 💬 Garage Door Left Open and Leaving
- 💬 Garage Door Opened and Away
- 💬 Garbage Collection
- 💬 Guest Mode Check Reminder
- 💬 Kona Battery Low
- 💬 Kona Failed Notification
- 💬 Kona Fuel Level Low
- 💬 Kona Remote Start Expired Notification
- 💬 Kona Started
- 💬 Window Left Open 🚫
- 📅 Emma's Projector On/Off
- 📅 Ethan's Projector On/Off
- 📅 Garbage Collection Event Generator
- 📅 Grow Light On/Off 🚫
- 📅 Living Room Fan On/Off
- 📅 Main Bedroom Fan On/Off
- 📅 Update KidsChore UI Helpers
- 📋 [Controller] Ikea Remote Main Bedroom
- 📋 [Inovelli] Amy Office Switch
- 📋 [Inovelli] Emma Switch
- 📋 [Inovelli] Ethan Switch
- 📋 [Inovelli] Family Room Aux Switch
- 📋 [Inovelli] Family Room Switch
- 📋 [Inovelli] Garage Switch
- 📋 [Inovelli] Joshua Office Switch
- 📋 [Inovelli] Living Room Fan Light Switch
- 📋 [Inovelli] Main Bedroom Switch
- 📋 [Sensor Light] Basement Hallway
- 📍 Itinerary Tracker Notification
- 📦 Clear Packages Out for Delivery
- 📦 Mail Delivered
- 📦 Mail Today
- 📦 Packages Delivered
- 📦 Packages Out for Delivery
- 📦 Update USPS Mail Camera
- 📱 MagicMirror Brightness on Lights On/Off
- 📱 MagicMirror Dim at Sunset
- 📱 MagicMirror On/Off Presence
- 📱 MagicMirror On/Off Schedule
- 🔒 Door Lock Jammed
- 🔒 Lock Doors when Away
- 🔔 Doorbell Object or Ring
- 🔔 Doorbell Ring
- 🔔 Frigate Doorbell - Event Handler
- 🔔 Frigate Doorbell - Object Seen
- 🕗 Main Bedroom Ceiling Fan Default Light Status
- 🖥️ [Ardena] Power on Activity
- 🖥️ [Erebus] Microphone/Camera Active
- 🖥️ [Quest] Charge Complete
- 🖥️ [Quest] Interactive
- 🖥️ [Work Josh] Microphone/Camera Active
- 🖨️ Low Toner
- 🖨️ Out of Paper
- 🗺️ Arriving Home 🚫
- 🗺️ Leaving Zone
- 🚦 Amy Office Light Switch Status 🚫
- 🚦 Emma Light Switch Status
- 🚦 Ethan Light Switch Status
- 🚦 Garage Entry Light Switch Status
- 🚦 Garage Light Switch Status
- 🚦 Joshua Office Light Switch Status 🚫
- 🚦 Outside Entry Light Switch Status
- 🤖 Robot Vacuum Error
- 🧺 Dryer Notifications
- 🧺 Washer Notifications

---

</details>

## Todo List

See the [issue queue](https://github.com/zanix/home-assistant-config/issues).

---

**All files are edited with [Visual Studio Code](https://code.visualstudio.com).**

**Configuration files are tested against the stable, beta, and dev versions of Home Assistant using [Github Actions](https://github.com/zanix/home-assistant-config/actions).**

Readme generated by the [custom readme integration](https://github.com/custom-components/readme)

[home-assistant]: https://home-assistant.io

[ha-version]: https://www.home-assistant.io/blog/categories/release-notes/
[ha-version-shield]: https://img.shields.io/badge/2025.11.3-555555?style=flat-square&logo=home-assistant

[github-build-status-shield]: https://img.shields.io/github/actions/workflow/status/zanix/home-assistant-config/home-assistant.yaml?branch=master&style=flat-square&logo=github-actions&logoColor=838B95
[github-build-status]: https://github.com/zanix/home-assistant-config/actions/workflows/home-assistant.yaml

[github-last-commit]: https://img.shields.io/github/last-commit/zanix/home-assistant-config/master?style=flat-square&logo=github&logoColor=838B95
[github-master]: https://github.com/zanix/home-assistant-config/commits/master

[commits-shield]: https://img.shields.io/github/commit-activity/m/zanix/home-assistant-config/master?style=flat-square&logo=github&logoColor=838B95
[commits]: https://github.com/zanix/home-assistant-config/commits/master

[forum-shield]: https://img.shields.io/discourse/topics?style=flat-square&label=community&logo=discourse&color=46B4ED&logoColor=46B4ED&server=https%3A%2F%2Fcommunity.home-assistant.io
[forum]: https://community.home-assistant.io

[discord-shield]: https://img.shields.io/discord/330944238910963714?style=flat-square&color=7289da&label=discord&logo=discord
[discord]: https://discord.gg/c5DvZ4e

[automations]: https://github.com/zanix/home-assistant-config/blob/master/automations.yaml
[integrations]: https://github.com/zanix/home-assistant-config/tree/master/integrations