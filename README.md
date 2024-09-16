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

<details><summary>8 Add-ons</summary>

- Mosquitto broker
- ESPHome
- AdGuard Home
- Advanced SSH & Web Terminal
- Studio Code Server
- Zigbee2MQTT
- Z-Wave JS UI
- Govee to MQTT Bridge

---

</details>

## Technical Details

| Description    | Value |
| -------------- | -- |
| All Entities   | 3481 |
| Sensors        | 1077 |
| Binary Sensors | 258 |
| Lights         | 62 |
| Switches       | 149 |

<details><summary>Stock Integrations</summary>

Since some integrations can only be enabled from within the UI, here is a list of integrations that are enabled via the Integrations UI on my Home Assistant.

### [AdGuard](https://www.home-assistant.io/integrations/adguard)

The AdGuard integration allows you to control and monitor your AdGuard Home instance.

### [AirNow](https://www.home-assistant.io/integrations/airnow)

The airnow integration uses the AirNow web service as a source for air quality data for your location

### [Android Debug Bridge](https://www.home-assistant.io/integrations/androidtv)

The Android Debug Bridge integration allows you to control an Android device or Amazon Fire TV device

### [Android TV Remote](https://www.home-assistant.io/integrations/androidtv_remote)

The Android TV Remote integration allows you to control an Android TV device by sending commands and launching apps

### [Bluetooth](https://www.home-assistant.io/integrations/bluetooth)

The Bluetooth integration will detect nearby Bluetooth devices.

### [Default Config](https://www.home-assistant.io/integrations/default_config)

This integration is a meta-component and configures a default set of integrations

### [Denon AVR Network Receivers](https://www.home-assistant.io/integrations/denonavr)

The denonavr platform allows you to control Denon Network Receivers

### [EcoBee](https://www.home-assistant.io/integrations/ecobee)

The ecobee integration lets you control and view sensor data from ecobee thermostats

(Also connected via HomeKit Controller integration for local control)

### [Ecowitt](https://www.home-assistant.io/integrations/ecowitt)

Integration an Ecowitt wether station

### [Electricity Maps](https://www.home-assistant.io/integrations/co2signal)

Queries the Electricity Maps API for the CO2 intensity of a specific region.

### [ESPHome](https://www.home-assistant.io/integrations/esphome)

Connect ESPHome devices directly with the native ESPHome API

### [File Size](https://www.home-assistant.io/integrations/filesize)

The filesize sensor is for displaying the size in MB of a file.

### [Glances](https://www.home-assistant.io/integrations/glances)

The glances integration allows you to monitor the system information provided by the Glances API

### [Google Cast](https://www.home-assistant.io/integrations/cast)

Google Cast integration

### [Google Cloud Platform](https://www.home-assistant.io/integrations/google_cloud)

The google_cloud platform allows you to use Google Cloud Platform API and integrate them into Home Assistant.

### [HomeKit Device](https://www.home-assistant.io/integrations/homekit_controller)

The HomeKit Device integration allows you to connect accessories with the “Works with HomeKit” logo to Home Assistant.

### [iBeacon Tracker](https://www.home-assistant.io/integrations/ibeacon)

iBeacons are Bluetooth-enabled devices that advertise identifiers to announce their location

### [InfluxDB](https://www.home-assistant.io/integrations/influxdb)

The influxdb integration makes it possible to transfer all state changes to an external InfluxDB database

### [IQVIA](https://www.home-assistant.io/integrations/iqvia)

The iqvia sensor platform collects and displays allergy, asthma and disease information

### [Local Calendar](https://www.home-assistant.io/integrations/local_calendar)

The local calendar integration allows you to create a calendar of events for powering automations

### [Logitech Harmony Hub](https://www.home-assistant.io/integrations/harmony)

The harmony remote platform allows you to control the state of your Harmony Hub Device

### [Mealie](https://www.home-assistant.io/integrations/mealie)

The Mealie integration will fetch data from your Mealie instance

### [Meater](https://www.home-assistant.io/integrations/meater)

The Meater Smart Meat Thermometer integration allows for communicating with the Meater Temperature Probe from Apption Labs

### [Mobile App](https://www.home-assistant.io/integrations/mobile_app)

The Mobile App integration allows Home Assistant mobile apps to easily integrate with Home Assistant

### [Moon](https://www.home-assistant.io/integrations/moon)

The Moon integration tracks the phases of the moon

### [MQTT](https://www.home-assistant.io/integrations/mqtt)

Allows extremely lightweight publish/subscribe messaging transport

### [MusicCast](https://www.home-assistant.io/integrations/yamaha_musiccast)

The Yamaha MusicCast integration allows you to control Yamaha MusicCast Receivers

### [OpenWeatherMap](https://www.home-assistant.io/integrations/openweathermap)

The OpenWeatherMap weather integrations uses OpenWeatherMap as a source for current meteorological data for your location

### [Ping (ICMP)](https://www.home-assistant.io/integrations/ping)

Uses ICMP pings to check if a device is online

### [Plex Media Server](https://www.home-assistant.io/integrations/plex)

The plex integration allows you to connect to a Plex Media Server

### [Proximity](https://www.home-assistant.io/integrations/proximity)

The proximity integration allows you to monitor the proximity of devices or persons to a particular zone and the direction of travel

### [Python Scripts](https://www.home-assistant.io/integrations/python_script)

This integration allows you to write Python scripts that are exposed as services

### [Radio Browser](https://www.home-assistant.io/integrations/radio_browser)

The Radio Browser integration allows you to use the directory of radio stations collected on Radio Browser

### [Reolink IP NVR/camera](https://www.home-assistant.io/integrations/reolink)

The integration allows you to control Reolink NVRs or cameras.

### [RESTful](https://www.home-assistant.io/integrations/rest)

The rest sensor platform is consuming a given endpoint which is exposed by a RESTful API of a device, an application, or a web service. The sensor has support for GET and POST requests.

### [RESTful Command](https://www.home-assistant.io/integrations/rest_command)

This integration can expose regular REST commands as services

### [Shell Command](https://www.home-assistant.io/integrations/shell_command)

This integration can expose regular shell commands as services

### [Shopping list](https://www.home-assistant.io/integrations/shopping_list)

The Shopping list integration allows you to keep track of shopping list items

### [SNMP](https://www.home-assistant.io/integrations/snmp)

This is a standardized method for monitoring/managing network connected devices. SNMP uses a tree-like hierarchy where each node is an object.

### [Sony Playstation 4](https://www.home-assistant.io/integrations/ps4)

The PS4 integration allows you to control a Sony PlayStation 4 console

### [Spotify](https://www.home-assistant.io/integrations/spotify)

The Spotify media player integration allows you to control Spotify playback

### [SQL](https://www.home-assistant.io/integrations/sql)

The sql sensor platform enables you to use values from an SQL database supported by the sqlalchemy library, to populate a sensor state (and attributes)

### [Steam](https://www.home-assistant.io/integrations/steam_online)

The Steam integration will allow you to track the online status of public Steam accounts

### [Sun](https://www.home-assistant.io/integrations/sun)

The sun integration will use the location as configured to track if the sun is above or below the horizon

### [System Monitor](https://www.home-assistant.io/integrations/systemmonitor)

Monitors disk usage, memory usage, CPU usage, and running processes

### [Tasmota](https://www.home-assistant.io/integrations/tasmota)

This integration allows to control of Tasmota devices over MQTT

### [Text-to-Speech (TTS)](https://www.home-assistant.io/integrations/tts)

Text-to-Speech (TTS) enables Home Assistant to speak to you

### [Twinkly](https://www.home-assistant.io/integrations/twinkly)

The Twinkly integration allows you to control Twinkly LED string

### [UniFi Network](https://www.home-assistant.io/integrations/unifi)

The unifi integration allows you to connects to a UniFi controller and gather device tracking data

### [Universal media player](https://www.home-assistant.io/integrations/universal)

A universal media player can combine multiple existing entities in Home Assistant into a single media player entity. This is used to create a single media player entity that can control an entire media center.

### [Uptime](https://www.home-assistant.io/integrations/uptime)

The uptime integration provides a sensor that stores the timestamp (date and time) when Home Assistant was last started

### [Utility Meter](https://www.home-assistant.io/integrations/utility_meter)

The Utility Meter integration provides functionality to track consumptions of various utilities (e.g., energy, gas, water, heating)

### [Version](https://www.home-assistant.io/integrations/version)

The Version integration can display the current Home Assistant Core versions

### [Vizio SmartCast](https://www.home-assistant.io/integrations/vizio)

The vizio integration allows you to control SmartCast-compatible TVs and sound bars

### [Wake on LAN](https://www.home-assistant.io/integrations/wake_on_lan)

The wake_on_lan integration enables the ability to send magic packets to Wake on LAN capable devices to turn them on

### [Withings](https://www.home-assistant.io/integrations/withings)

The Withings integration consumes data from various health products produced by Withings.

### [WLED](https://www.home-assistant.io/integrations/wled)

WLED is a fast and feature-rich implementation of an ESP8266/ESP32 webserver to control NeoPixel (WS2812B, WS2811, SK6812, APA102, and similar) LED's

### [Workday](https://www.home-assistant.io/integrations/workday)

The workday binary sensor indicates whether the current day is a workday or not

### [Z-Wave JS](https://www.home-assistant.io/integrations/zwave_js)

The Z-Wave integration allows you to control a Z-Wave network via the [Z-Wave JS UI](https://zwave-js.github.io/zwave-js-ui) driver. This is the recommended Z-Wave integration for Home Assistant

---

</details>

<details><summary>24 Custom Integrations</summary>

### [Adaptive Lighting](https://github.com/basnijholt/adaptive-lighting) [v1.23.0]

Adaptive Lighting custom component for Home Assistant

Authors: [@basnijholt](https://github.com/basnijholt), [@RubenKelevra](https://github.com/RubenKelevra), [@th3w1zard1](https://github.com/th3w1zard1), [@protyposis](https://github.com/protyposis).

### [Bambu Lab](https://github.com/greghesp/ha-bambulab) [v2.0.22]

A Home Assistant Integration for Bambu Lab Printers

Authors: [@greghesp](https://github.com/greghesp), [@AdrianGarside](https://github.com/AdrianGarside).

### [Browser Mod](https://github.com/thomasloven/hass-browser_mod) [v2.3.1]

🔹 A Home Assistant integration to turn your browser into a controllable entity and media player

### [Dreame Vacuum](https://github.com/Tasshack/dreame-vacuum) [v1.0.4]

Home Assistant integration for Dreame robot vacuums with map support

Authors: [@tasshack](https://github.com/tasshack).

### [Dreamscreen Service](https://github.com/J3n50m4t/Home-Assistant-DreamScreen-Service)

Home Assistant Service for sending commands to a Wifi enabled DreamScreen

Authors: [https://github.com/GregoryDosh](https://github.com/https://github.com/GregoryDosh).

### [Fontawesome](https://github.com/thomasloven/hass-fontawesome) [v2.2.1]

🔹 Use icons from fontawesome in home-assistant

Authors: [@thomasloven](https://github.com/thomasloven).

### [Frigate](https://github.com/blakeblackshear/frigate-hass-integration) [v5.4.0]

Frigate integration for Home Assistant

Authors: [@blakeblackshear](https://github.com/blakeblackshear).

### [Gasbuddy](https://github.com/firstof9/ha-gasbuddy) [v1.0.9]

Component to integrate with GasBuddy fuel price tracker.

Authors: [@firstof9](https://github.com/firstof9).

### [Ge Home (Smarthq)](https://github.com/simbaja/ha_gehome) [v0.6.11]

GE Home Appliances (SmartHQ) for Home Assistant

Authors: [@simbaja](https://github.com/simbaja).

### [Generate Readme](https://github.com/custom-components/readme) [v0.5.0]

Use Jinja and data from Home Assistant to generate your README.md file

Authors: [@ludeeus](https://github.com/ludeeus).

### [Home Assistant Community Store (HACS)](https://github.com/hacs/integration) [v2.0.1]

HACS gives you a powerful UI to handle downloads of all your custom needs.

Authors: [@ludeeus](https://github.com/ludeeus).

### [Hass.Agent 2 Integration   Media Player & Notifications](https://github.com/hass-agent/HASS.Agent-Integration) [v2.1.0-beta1]

HASS.Agent's Home Assistant integration. Adds notifications and mediaplayer capabilities to HASS.Agent - a Windows based client (companion app) for Home Assistant.

Authors: [@fillefilip8](https://github.com/fillefilip8), [@DrR0X-glitch](https://github.com/DrR0X-glitch), [@amadeo-alex](https://github.com/amadeo-alex).

### [Holidays](https://github.com/bruxy70/Holidays) [v1.9.10]

📅 Custom Home Assistant integration for public holidays - also used for garbage_collection integration to automatically move scheduled events that fall on a public holiday (by an automation blueprint)

Authors: [@bruxy70](https://github.com/bruxy70).

### [Keymaster](https://github.com/FutureTense/keymaster) [v0.0.98]

Home Assistant integration for managing Z-Wave enabled locks

Authors: [@FutureTense](https://github.com/FutureTense), [@firstof9](https://github.com/firstof9), [@raman325](https://github.com/raman325).

### [Kia Uvo / Hyundai Bluelink](https://github.com/Hyundai-Kia-Connect/kia_uvo) [v2.26.6]

A Home Assistant HACS integration that supports Kia Connect(Uvo) and Hyundai Bluelink. The integration supports the EU, Canada and the USA.

Authors: [@fuatakgun](https://github.com/fuatakgun).

### [Mail And Packages](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) [v0.4.0]

Home Assistant integration providing day of package counts and USPS informed delivery images.

Authors: [@moralmunky](https://github.com/moralmunky), [@firstof9](https://github.com/firstof9).

### [Nintendo Switch Parental Controls](https://github.com/pantherale0/ha-nintendoparentalcontrols) [v2024.4.0]

Home Assistant integration for Nintendo Switch Parental Controls

Authors: [@pantherale0](https://github.com/pantherale0).

### [Opensprinkler Integration For Home Assistant](https://github.com/vinteo/hass-opensprinkler) [v1.3.8]

OpenSprinkler Integration for Home Assistant

Authors: [@vinteo](https://github.com/vinteo).

### [Samsung Soundbar](https://github.com/samuelspagl/ha_samsung_soundbar) [v0.4.0]

YASSI (Yet another Samsung Soundbar integration) is a HomeAssistant integration for Samsung Soundbars.

Authors: [@samuelspagl](https://github.com/samuelspagl).

### [Spook 👻 Your Homie](https://github.com/frenck/spook) [v3.1.0]

A scary 👻 powerful toolbox 🧰 for Home Assistant 🏡

Authors: [@frenck](https://github.com/frenck).

### [Subaru (Hacs)](https://github.com/G-Two/homeassistant-subaru) [v0.7.15]

Subaru STARLINK custom component for Home Assistant.

Authors: [@G-Two](https://github.com/G-Two).

### [Tapo: Cameras Control](https://github.com/JurajNyiri/HomeAssistant-Tapo-Control) [v5.6.1]

Control for Tapo cameras as a Home Assistant component

Authors: [@JurajNyiri](https://github.com/JurajNyiri).

### [Watchman](https://github.com/dummylabs/thewatchman) [v0.6.3]

Home Assistant custom integration to keep track of missing entities and services in your config files

Authors: [@dummylabs](https://github.com/dummylabs).

### [Webrtc Camera](https://github.com/AlexxIT/WebRTC) [v3.5.2]

Home Assistant custom component for real-time viewing of almost any camera stream using WebRTC and other technologies.

Authors: [@AlexxIT](https://github.com/AlexxIT).

---

</details>

<details><summary>33 Lovelace Plugins</summary>

### [Apexcharts Card](https://github.com/RomRider/apexcharts-card) [v2.1.2]

📈 A Lovelace card to display advanced graphs and charts based on ApexChartsJS for Home Assistant

### [Auto Entities](https://github.com/thomasloven/lovelace-auto-entities) [v1.13.0]

🔹Automatically populate the entities-list of lovelace cards

### [Bar Card](https://github.com/custom-cards/bar-card) [v3.2.0]

Customizable Animated Bar card for Home Assistant Lovelace

### [Battery State Card / Entity Row](https://github.com/maxwroc/battery-state-card) [v3.2.1]

Battery state card for Home Assistant

### [Bubble Card](https://github.com/Clooos/Bubble-Card) [v2.2.4]

Bubble Card is a minimalist card collection for Home Assistant with a nice pop-up touch.

### [Button Card](https://github.com/custom-cards/button-card) [v4.1.2]

❇️ Lovelace button-card for home assistant

### [Card Mod](https://github.com/thomasloven/lovelace-card-mod) [v3.4.3]

🔹 Add CSS styles to (almost) any lovelace card

### [Card Tools](https://github.com/thomasloven/lovelace-card-tools) [v11]

🔹A collection of tools for other lovelace plugins to use

### [Decluttering Card](https://github.com/custom-cards/decluttering-card) [v1.0.0]

🧹 Declutter your lovelace configuration with the help of this card

### [Fold Entity Row](https://github.com/thomasloven/lovelace-fold-entity-row) [v2.2.0]

🔹 A foldable row for entities card, containing other rows

### [Frigate Card](https://github.com/dermotduffy/frigate-hass-card) [v5.2.0]

A Lovelace card for Frigate in Home Assistant

### [Ha Floorplan 🖌🎨 | Your Imagination Just Became The New Limit](https://github.com/ExperienceLovelace/ha-floorplan) [v1.0.44]

Bring new life to Home Assistant. By mapping entities to a SVG-object, you're able to control devices, show states, calling services - and much more. Add custom styling on top, to visualize whatever you can think of. Your imagination just became the new limit.

### [History Explorer Card](https://github.com/alexarch21/history-explorer-card) [v1.0.51]

A card for Home Assistant Lovelace for exploring the history of your entities interactively and in real time.

### [Horizon Card](https://github.com/rejuvenate/lovelace-horizon-card) [v1.1.0]

Sun Card successor: Visualize the position of the Sun over the horizon.

### [Hourly Weather Card](https://github.com/decompil3d/lovelace-hourly-weather) [v6.1.0]

Hourly weather card for Home Assistant. Visualize upcoming weather conditions as a colored horizontal bar.

### [Kiosk Mode](https://github.com/NemesisRE/kiosk-mode) [v6.1.1]

🙈 Hides the Home Assistant header and/or sidebar

### [Layout Card](https://github.com/thomasloven/lovelace-layout-card) [v2.4.5]

🔹 Get more control over the placement of lovelace cards.

### [Lovelace Yet Another Expander Card](https://github.com/clarinetJWD/lovelace-yet-another-expander-card) [v0.0.4]

Yet Another Collapsible Expandable Lovelace Card

### [Mini Graph Card](https://github.com/kalkih/mini-graph-card) [v0.12.1]

Minimalistic graph card for Home Assistant Lovelace UI

### [Mini Media Player](https://github.com/kalkih/mini-media-player) [v1.16.9]

Minimalistic media card for Home Assistant Lovelace UI

### [Mushroom](https://github.com/piitaya/lovelace-mushroom) [v4.0.7]

Build a beautiful Home Assistant dashboard easily

### [Opensprinkler Card](https://github.com/rianadon/opensprinkler-card) [v1.13]

Home Assistant card for collecting OpenSprinkler status

### [Platinum Weather Card](https://github.com/tommyjlong/platinum-weather-card) [v1.2.0]

This is a fully customisable weather card for Home Assistant with a graphical configuration.

### [Power Flow Card Plus](https://github.com/flixlix/power-flow-card-plus) [v0.2.4]

A power distribution card inspired by the official Energy Distribution card for Home Assistant

### [Rgb Light Card](https://github.com/bokub/rgb-light-card) [v1.11.0]

💡 A Lovelace custom card for RGB lights

### [Sankey Chart Card](https://github.com/MindFreeze/ha-sankey-chart) [v3.2.4]

A Home Assistant lovelace card to display a sankey chart. For example for power consumption

### [Steam Card](https://github.com/Kibibit/kb-steam-card) [v1.1.1]

A Home Assistant card for Steam integrations

### [Swipe Card](https://github.com/bramkragten/swipe-card) [v5.0.0]

Card that allows you to swipe throught multiple cards for Home Assistant Lovelace

### [Tabbed Card](https://github.com/kinghat/tabbed-card) [v0.4.0-alpha.2]

a custom card for home assistant that utilizes tabs to segregate individual cards.

### [Timer Bar Card](https://github.com/rianadon/timer-bar-card) [v1.30.2]

A progress bar display for Home Assistant timers

### [Uptime Card](https://github.com/dylandoamaral/uptime-card) [v0.16.0]

Minimalistic uptime card for Home Assistant Lovelace UI

### [Vertical Stack In Card](https://github.com/ofekashery/vertical-stack-in-card) [v0.4.4]

📐 Home Assistant Card: Group multiple cards into a single sleek card.

### [Xiaomi Vacuum Map Card](https://github.com/PiotrMachowski/lovelace-xiaomi-vacuum-map-card) [v2.2.4]

This card provides a user-friendly way to fully control map-based vacuums in Home Assistant. Supported brands include Xiaomi (Roborock/Viomi/Dreame/Roidmi/Valetudo/Valetudo RE), Neato, Wyze, Roomba, Ecovacs (and probably more).

---

</details><details><summary>3 Themes</summary>

### [HA LCARS](https://github.com/th3jesta/ha-lcars) [vHA-LCARS-2.3.0]

LCARS theme for Home Assistant

### [Material Rounded Theme   Based On Material You By Google On Android](https://github.com/Nerwyn/material-rounded-theme) [v2.1.2]

A Material You and Google Home app influenced theme for Home Assistant

### [Metrology   Metro + Fluent + Windows Themes   By Mmak.Es](https://github.com/Madelena/Metrology-for-Hass) [v.1.9.1]

🎨 Give your Home Assistant a modern and clean facelift. 🟥🟧🟩🟦🟪 24 Variations with 2 Styles + 6 Colors (Magenta Red / Orange / Green / Blue / Purple) + 🌞 Light and 🌚 Dark modes included. Based on Metro and Fluent UI Design Systems from Microsoft Windows.

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
- [Tuya Star Projector](https://solution.tuya.com/projects/CMamw6tl7mwgzm) - Light and laser projector, [hacked](https://github.com/seberm/esphome-SK20-Nebula-Light/tree/master) with [Tuya Cloudcutter](https://github.com/tuya-cloudcutter/tuya-cloudcutter)
- [WLED](https://github.com/Aircoookie/WLED) - DIY light strip
- [Zooz ZEN71 On-Off Switch](https://www.getzooz.com/zooz-zen71-on-off-switch/)

### Sensor

- [AirGradient One](https://www.airgradient.com/indoor/) - Indoor Air Quality Monitor
- [Apollo MSR-1](https://shop.apolloautomation.cloud/products/multisensor-mk1) - mmWave CO2 Multisensor
- [Aqara Water Leak Sensor](https://www.amazon.com/dp/B07D39MSZS) - Detect water leaks
- [Dome Water Leak Sensor](https://www.amazon.com/dp/B01LXR0B8Q) - Detect water leaks
- [Emporia Vue 3](https://www.amazon.com/gp/product/B0C79PNK84) - Real Time Electricity Monitor/Meter
  flashed for local data with [custom firmware](https://gist.github.com/flaviut/93a1212c7b165c7674693a45ad52c512)
- [ESPHome](https://esphome.io) - DIY devices
- [Zooz 700 Series Z-Wave Plus 4-in-1 Sensor ZSE40](https://www.amazon.com/dp/B01AKSO80O)

### Switch

- [IKEA E1524/E1810 5-Button Remote Control](https://www.amazon.com/dp/B07KM1YZWW)
- [Philips Hue Dimmer Remote 324131092621](https://www.amazon.com/dp/B0167Z0P3I)
- [SONOFF S31 Lite 15A Zigbee Smart Plug](https://www.amazon.com/dp/B08Y87WD1X) - Smart plug
- [Tasmota](https://tasmota.github.io/docs/) - Flashed devices
- [THIRDREALITY ZigBee Smart Plug Gen2](https://www.amazon.com/dp/B0BPY5D1KC) - Smart plug with power monitoring
- [Zooz Titan Water Valve Actuator](https://www.thesmartesthouse.com/products/zooz-z-wave-plus-700-series-titan-water-valve-actuator-zac36) - Control the water main

### Camera

- [Reolink Doorbell](https://www.amazon.com/gp/product/B0B7S3JSG7)
- [Tapo C210 2K Pan/Tilt Camera](https://www.amazon.com/dp/B09Y8TLP25)

### Media

- [ChromeCast](https://www.google.com/chromecast/)
- [Google Home Mini](https://store.google.com/us/product/google_nest_mini)
- [Harmony Hub](https://www.logitech.com/en-us/products/harmony/harmony-hub.html)
- [MagicMirror](https://magicmirror.builders)
- [nVidia Shield](https://www.nvidia.com/en-us/shield/) (2015, 2017, and 2019 versions)
- [PlayStation 4 Pro](https://www.amazon.com/dp/B07K14XKZH)
- [Plex](https://plex.tv)
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
- [OpenSprinkler](https://opensprinkler.com) - Automate and access sprinklers from anywhere
- [Ratgdo](https://paulwieland.github.io/ratgdo/) - WiFi control board for Chamberlain or Liftmaster garage door openers

## Automations

> For more details, see the [automations.xml][automations] file and `automation:` blocks in [integrations].

<details><summary>504 Automations</summary>

> Keymaster automations are hidden

- ⏯ Ensure PiPup is Running 🚫
- ⏯ Family Room Media Auto Off
- ⏯ Family Room Media State at Night 🚫
- ⏯ Family Room Sound Mode 🚫
- ⏯ Living Room Media State at Night 🚫
- ⏯ Living Room Sound Mode 🚫
- ⏯ Main Bedroom Media Auto Off 🚫
- ⏯ PS4 Harmony Activity 🚫
- ⏯️ Samsung Soundbar Night Mode
- ⏯️ Samsung Soundbar Voice Enhancer
- ☑️ Cat Feeder Filled
- ☑️ Close Garage Door
- ☑️ Garbage Collection
- ☑️ Ignore Door Alerts
- ☑️ Ignore Garage Door Alerts
- ☑️ Ignore Window Alerts 🚫
- ☑️ Retry Remote Start Ascent
- ☑️ Turn on Water Main
- ⚙️ Action Sniffer [Zigbee] 🚫
- ⚙️ Automated Backup
- ⚙️ Battery Level Low
- ⚙️ Clear TTS Cache 🚫
- ⚙️ Disk Space Low
- ⚙️ Event Sniffer [Actionable Event] 🚫
- ⚙️ Event Sniffer [Z-Wave JS] 🚫
- ⚙️ Failed Login
- ⚙️ Offline Devices
- ⚙️ RAM Usage High
- ⚙️ Reload Addons and Integrations
- ⚙️ Scan Interval 🚫
- ⚙️ Startup
- ⚙️ Update Database Filesize Sensor
- ⚙️ Updates Available
- ⚡ Tariff Changes
- ✨ DreamScreen Harmony Power Off
- ✨ DreamScreen Harmony Reactive Activity
- ✨ DreamScreen Scene Changed
- ✴️ Joshua Office CO2 Levels
- ✴️ Joshua Office Light On/Off Presence
- 🌐 UniFi WAN Status 🚫
- 🍽️ Dishwasher is Done
- 🍽️ Oven is Preheated
- 🍽️ Oven Timer Completed
- 🎄 XMas Lights On/Off 🚫
- 🎄 XMas Tree On/Off 🚫
- 🏢 Joshua Office Day Mode
- 🏢 Joshua Office Night Mode
- 🐱 Cat Feeder Empty Notification
- 🐱 Cat Feeder Error
- 💡 All Lights off when Away
- 💡 Dim Front Lights at Night
- 💡 Front Lights off at Sunrise
- 💡 Front Lights on at Sunset
- 💡 Living Room Lamps off at Night
- 💡 Living Room Lamps on at Sunset
- 💡 Turn Lights On when Arrive 🚫
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
- 💬 Kona Battery Charge Low
- 💬 Kona Fuel Level Low
- 💬 Window Left Open 🚫
- 📅 Emma's Projector On/Off
- 📅 Ethan's Projector On/Off
- 📅 Garbage Collection Event Generator
- 📅 Grow Light On/Off 🚫
- 📅 Living Room Fan On/Off
- 📅 Main Bedroom Fan On/Off
- 📋 [Controller] Hue Dimmer Remote 🚫
- 📋 [Controller] Ikea Remote Main Bedroom
- 📋 [Inovelli] Amy Office Switch
- 📋 [Inovelli] Emma Switch
- 📋 [Inovelli] Ethan Switch
- 📋 [Inovelli] Family Room Switch
- 📋 [Inovelli] Garage Switch
- 📋 [Inovelli] Joshua Office Switch
- 📋 [Inovelli] Kitchen Switch 🚫
- 📋 [Inovelli] Living Room Switch 🚫
- 📋 [Inovelli] Main Bedroom Switch
- 📦 Clear Packages Out for Delivery
- 📦 Mail Today
- 📦 Packages Delivered
- 📦 Packages Out for Delivery
- 📦 Update USPS Mail Camera
- 📱 MagicMirror Brightness on Lights On/Off 🚫
- 📱 MagicMirror Dim at Sunset 🚫
- 📱 MagicMirror On/Off Presence
- 📱 MagicMirror On/Off Schedule
- 🔒 Door Lock Jammed
- 🔒 Lock Doors when Away
- 🔔 Doorbell Object or Ring
- 🔔 Doorbell Ring
- 🔔 Frigate Doorbell - Event Handler
- 🔔 Frigate Doorbell - Object Seen
- 🖥️ [Ardena] Power Actions
- 🖥️ [Ardena] Power on Activity
- 🖥️ [Ardena] Sleep When Harmony Off
- 🖥️ [Quest] Charge Complete
- 🖥️ [Quest] Interactive
- 🖨️ Low Toner
- 🖨️ Out of Paper
- 🗺️ Arriving Home
- 🗺️ Leaving Zone
- 🚦 Amy Office Light Switch Status
- 🚦 Emma Light Switch Status
- 🚦 Ethan Light Switch Status
- 🚦 Garage Entry Light Switch Status
- 🚦 Garage Light Switch Status
- 🚦 Joshua Office Light Switch Status 🚫
- 🚦 Outside Entry Light Switch Status
- 🧺 Dryer Running
- 🧺 Washer Running

---

</details>

## Things to Consider Buying

- [433Mhz Transmitter and receiver](https://www.amazon.com/dp/B00M2CUALS) - For 433Mhz based devices
- LED RGB [Wifi Controller](https://www.amazon.com/dp/B01JZ2SI6Q) flux_led compatible with [LED Strip kits](https://www.amazon.com/dp/B01CUILC3I) - ~100 Feet
- [First Alert 2-in-1 Z-Wave Wireless Smoke Detector & Carbon Monoxide Alarm](https://www.amazon.com/gp/product/B00KMHXFAI)

## Todo List

See the [issue queue](https://github.com/zanix/home-assistant-config/issues).

---

**All files are edited with [Visual Studio Code](https://code.visualstudio.com).**

**Configuration files are tested against the stable, beta, and dev versions of Home Assistant using [Github Actions](https://github.com/zanix/home-assistant-config/actions).**

Readme generated by the [custom readme integration](https://github.com/custom-components/readme)

[home-assistant]: https://home-assistant.io

[ha-version]: https://www.home-assistant.io/blog/categories/release-notes/
[ha-version-shield]: https://img.shields.io/badge/2024.9.1-555555?style=flat-square&logo=home-assistant

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