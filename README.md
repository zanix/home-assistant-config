# Zanix's Smart Home

| zanix/home-assistant-config | Home Assistant Community |
| :---: | :---: |
| [![Home Assistant Version][ha-version-shield]][ha-version] [![Github Action Status][github-build-status-shield]][github-build-status] [![Github Linter Status][github-linter-status-shield]][github-linter-status] | [![Home Assistant Community Forum][forum-shield]][forum] |
| [![Last Commit][github-last-commit]][github-master] [![GitHub Activity][commits-shield]][commits] [![Lines of Code][code-lines-shield]][code-link] | [![Discord][discord-shield]][discord] |

This is my Home Assistant Configuration created for use with the [docker container](https://www.home-assistant.io/docs/installation/docker/)
version of [Home Assistant][home-assistant] running on an Intel NUC5i5MYHE.

If you want to back up your own Home Assistant configuration to GitHub, follow [this guide](https://home-assistant.io/docs/ecosystem/backup/backup_github/).

## Software

- [Home Assistant][home-assistant]
- [MQTT](https://mosquitto.org) - MQTT Broker docker container
- [Zigbee2MQTT](https://www.zigbee2mqtt.io) - Zigbee to MQTT bridge, get rid of your proprietary Zigbee bridges
- [Z-Wave JS UI](https://zwave-js.github.io/zwave-js-ui/#/) - Full featured Z-Wave Control Panel and MQTT Gateway.

## Technical Details

This Home Assistant install has approximately **2013 total entities**,
including **990 sensors**.

<details><summary>Stock Integrations</summary>

Since some integrations can only be enabled from within the UI, here is a list of integrations that are enabled via the Integrations UI on my Home Assistant.

### [AirNow](https://www.home-assistant.io/integrations/airnow)

The airnow integration uses the AirNow web service as a source for air quality data for your location

### [Android TV](https://www.home-assistant.io/integrations/androidtv)

The androidtv platform allows you to control an Android TV device or Amazon Fire TV device

### [Denon AVR Network Receivers](https://www.home-assistant.io/integrations/denonavr)

The denonavr platform allows you to control Denon Network Receivers

### [ecobee](https://www.home-assistant.io/integrations/ecobee)

The ecobee integration lets you control and view sensor data from ecobee thermostats

(Also connected via HomeKit Controller integration for local control)

### [ESPHome](https://www.home-assistant.io/integrations/esphome)

Connect ESPHome devices directly with the native ESPHome API

### [Forecast.Solar](https://www.home-assistant.io/integrations/forecast_solar)

The Forecast.Solar service provides solar production forecasting for your solar panel system, based on historic averages combined with weather forecasting

### [Generic Camera](https://www.home-assistant.io/integrations/github)

The generic camera platform allows you to integrate any IP camera or other URL

### [GitHub](https://www.home-assistant.io/integrations/generic)

The GitHub integration allows you to monitor your favorite GitHub repositories

### [Glances](https://www.home-assistant.io/integrations/glances)

The glances integration allows you to monitor the system information provided by the Glances API

### [Google Cast](https://www.home-assistant.io/integrations/cast)

Google Cast integration

### [HomeKit Controller](https://www.home-assistant.io/integrations/homekit_controller)

The HomeKit controller integration allows you to connect accessories with the "Works with HomeKit" logo

### [IQVIA](https://www.home-assistant.io/integrations/iqvia)

The iqvia sensor platform collects and displays allergy, asthma and disease information

### [InfluxDB](https://www.home-assistant.io/integrations/influxdb)

The influxdb integration makes it possible to transfer all state changes to an external InfluxDB database

### [Joaoapps Join](https://www.home-assistant.io/integrations/joaoapps_join)

The joaoapps_join integration exposes services from [Join](https://joaoapps.com/join)

### [Logitech Harmony](https://www.home-assistant.io/integrations/harmony)

The harmony remote platform allows you to control the state of your Harmony Hub Device

### [Meater](https://www.home-assistant.io/integrations/meater)

The Meater Smart Meat Thermometer integration allows for communicating with the Meater Temperature Probe from Apption Labs

### [MJPEG IP Camera](https://www.home-assistant.io/integrations/mjpeg)

The MJPEG IP Camera integration allows you to integrate IP cameras which are capable to stream their video with MJPEG (Motion JPEG)

### [Mobile App](https://www.home-assistant.io/integrations/mobile_app)

The Mobile App integration allows Home Assistant mobile apps to easily integrate with Home Assistant

### [Moon](https://www.home-assistant.io/integrations/moon)

The Moon integration tracks the phases of the moon

### [MQTT](https://www.home-assistant.io/integrations/mqtt)

Allows extremely lightweight publish/subscribe messaging transport

### [OpenGarage](https://www.home-assistant.io/integrations/opengarage)

The OpenGarage integration lets you control the open-source OpenGarage.io device

### [OpenWeatherMap](https://www.home-assistant.io/integrations/openweathermap)

The OpenWeatherMap weather integrations uses OpenWeatherMap as a source for current meteorological data for your location

### [Plex](https://www.home-assistant.io/integrations/plex)

The plex integration allows you to connect to a Plex Media Server

### [Rachio](https://www.home-assistant.io/integrations/rachio)

The rachio platform allows you to control your Rachio irrigation system

### [Radio Browser](https://www.home-assistant.io/integrations/radio_browser)

The Radio Browser integration allows you to use the directory of radio stations collected on Radio Browser

### [SNMP](https://www.home-assistant.io/integrations/snmp)

This is a standardized method for monitoring/managing network connected devices. SNMP uses a tree-like hierarchy where each node is an object.

This is used to get printer status data

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

### [Twinkly](https://www.home-assistant.io/integrations/twinkly)

The Twinkly integration allows you to control Twinkly LED string

### [Ubiquiti UniFi](https://www.home-assistant.io/integrations/unifi)

The unifi integration allows you to connects to a UniFi controller and gather device tracking data

### [Uptime](https://www.home-assistant.io/integrations/uptime)

The uptime integration provides a sensor that stores the timestamp (date and time) when Home Assistant was last started

### [Version](https://www.home-assistant.io/integrations/version)

The Version integration can display the current Home Assistant Core versions

### [Vizio SmartCast](https://www.home-assistant.io/integrations/vizio)

The vizio integration allows you to control SmartCast-compatible TVs and sound bars

### [WLED](https://www.home-assistant.io/integrations/wled)

WLED is a fast and feature-rich implementation of an ESP8266/ESP32 webserver to control NeoPixel (WS2812B, WS2811, SK6812, APA102, and similar) LED's

### [Yamaha MusicCast](https://www.home-assistant.io/integrations/yamaha_musiccast)

The Yamaha MusicCast integration allows you to control Yamaha MusicCast Receivers

### [Z-Wave JS](https://www.home-assistant.io/integrations/zwave_js)

The Z-Wave integration allows you to control a Z-Wave network via the [Z-Wave JS UI](https://zwave-js.github.io/zwave-js-ui) driver. This is the recommended Z-Wave integration for Home Assistant

---

</details>

<details><summary>18 Custom Integrations</summary>

### [Adaptive Lighting](https://github.com/basnijholt/adaptive-lighting) [v1.11.0]

Adaptive Lighting custom component for Home Assistant

Authors: [@basnijholt](https://github.com/basnijholt), [@RubenKelevra](https://github.com/RubenKelevra), [@th3w1zard1](https://github.com/th3w1zard1).

### [Browser Mod](https://github.com/thomasloven/hass-browser_mod) [v2.2.1]

🔹 A Home Assistant integration to turn your browser into a controllable entity and media player

### [Dahua](https://github.com/rroller/dahua) [v0.9.44]

Dahua Camera and Doorbell Home Assistant Integration

Authors: [@rroller](https://github.com/rroller).

### [Dreamscreen Service](https://github.com/J3n50m4t/Home-Assistant-DreamScreen-Service)

Home Assistant Service for sending commands to a Wifi enabled DreamScreen

Authors: [https://github.com/GregoryDosh](https://github.com/https://github.com/GregoryDosh).

### [Fontawesome](https://github.com/thomasloven/hass-fontawesome) [v2.1.5]

🔹 Use icons from fontawesome in home-assistant

### [Frigate](https://github.com/blakeblackshear/frigate-hass-integration) [v4.0.0]

Frigate integration for Home Assistant

Authors: [@blakeblackshear](https://github.com/blakeblackshear).

### [Garbage Collection](https://github.com/bruxy70/Garbage-Collection) [v4.10.2]

🗑 Custom Home Assistant sensor for scheduling garbage collection (or other regularly re-occurring events - weekly on given days, semi-weekly or monthly)

Authors: [@bruxy70](https://github.com/bruxy70).

### [Generate Readme](https://github.com/custom-components/readme) [v0.5.0]

Use Jinja and data from Home Assistant to generate your README.md file

Authors: [@ludeeus](https://github.com/ludeeus).

### [Govee](https://github.com/LaggAt/hacs-govee) [v0.2.2]

A HACS repository for Govee light integration

Authors: [@LaggAt](https://github.com/LaggAt).

### [Home Assistant Community Store (HACS)](https://github.com/hacs/integration) [v1.32.1]

HACS gives you a powerful UI to handle downloads of all your custom needs.

Authors: [@ludeeus](https://github.com/ludeeus).

### [Hass.Agent](https://github.com/LAB02-Research/HASS.Agent-Integration) [v2022.11.9]

HASS.Agent's Home Assistant integration. Adds notifications and mediaplayer capabilities to HASS.Agent - a Windows based client (companion app) for Home Assistant.

Authors: [@fillefilip8](https://github.com/fillefilip8), [@LAB02-Admin](https://github.com/LAB02-Admin).

### [Holidays](https://github.com/bruxy70/Holidays) [v1.9.4]

📅 Custom Home Assistant integration for public holidays - also used for garbage_collection integration to automatically move scheduled events that fall on a public holiday (by an automation blueprint)

Authors: [@bruxy70](https://github.com/bruxy70).

### [Keymaster](https://github.com/FutureTense/keymaster) [v0.0.85]

Home Assistant integration for managing Z-Wave enabled locks

Authors: [@FutureTense](https://github.com/FutureTense), [@firstof9](https://github.com/firstof9), [@raman325](https://github.com/raman325).

### [Mail And Packages](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) [v0.3.13]

Home Assistant integration providing day of package counts and USPS informed delivery images.

Authors: [@moralmunky](https://github.com/moralmunky), [@firstof9](https://github.com/firstof9).

### [Subaru (Hacs)](https://github.com/G-Two/homeassistant-subaru) [v0.7.7]

Subaru STARLINK custom component for Home Assistant.

Authors: [@G-Two](https://github.com/G-Two).

### [Unifi Status](https://github.com/zvldz/unifi_status)

High level health status of UniFi Security Gateway devices via UniFi Controller

Authors: [@jchasey](https://github.com/jchasey), [@zvldz](https://github.com/zvldz).

### [Watchman](https://github.com/dummylabs/thewatchman) [v0.6.1]

Home Assistant custom integration to keep track of missing entities and services in your config files

Authors: [@dummylabs](https://github.com/dummylabs).

### [Webrtc Camera](https://github.com/AlexxIT/WebRTC) [v3.1.0]

Home Assistant custom component for viewing almost any camera stream in real time using WebRTC and other technologies.

Authors: [@AlexxIT](https://github.com/AlexxIT).

---

</details>

<details><summary>31 Lovelace Plugins</summary>

### [Apexcharts Card](https://github.com/RomRider/apexcharts-card) [v2.0.4]

📈 A Lovelace card to display advanced graphs and charts based on ApexChartsJS for Home Assistant

### [Auto Entities](https://github.com/thomasloven/lovelace-auto-entities) [v1.12.1]

🔹Automatically populate the entities-list of lovelace cards

### [Bar Card](https://github.com/custom-cards/bar-card) [v3.2.0]

Customizable Animated Bar card for Home Assistant Lovelace

### [Battery State Card / Entity Row](https://github.com/maxwroc/battery-state-card) [v2.1.1]

Battery state card for Home Assistant

### [Button Card](https://github.com/custom-cards/button-card) [v3.5.0]

❇️ Lovelace button-card for home assistant

### [Card Mod](https://github.com/thomasloven/lovelace-card-mod) [v3.2.2]

🔹 Add CSS styles to (almost) any lovelace card

### [Card Tools](https://github.com/thomasloven/lovelace-card-tools) [v11]

🔹A collection of tools for other lovelace plugins to use

### [Decluttering Card](https://github.com/custom-cards/decluttering-card) [v1.0.0]

🧹 Declutter your lovelace configuration with the help of this card

### [Expander Card](https://github.com/Alia5/lovelace-expander-card) [v0.0.3]

Expander card for HomeAssistant

### [Fold Entity Row](https://github.com/thomasloven/lovelace-fold-entity-row) [v2.2.0]

🔹 A foldable row for entities card, containing other rows

### [Frigate Card](https://github.com/dermotduffy/frigate-hass-card) [v5.0.0]

A Lovelace card for Frigate in Home Assistant

### [Ha Floorplan](https://github.com/ExperienceLovelace/ha-floorplan) [v1.0.35]

Bring new life to Home Assistant. By mapping entities to a SVG-object, you're able to control devices, show states, calling services - and much more. Add custom styling on top, to visualize whatever you can think of. Your imagination just become the new limit.

### [History Explorer Card](https://github.com/alexarch21/history-explorer-card) [v1.0.45]

A card for Home Assistant Lovelace for exploring the history of your entities interactively and in real time.

### [Horizon Card](https://github.com/rejuvenate/lovelace-horizon-card) [v0.9.0]

Sun Card successor: Visualize the position of the Sun over the horizon.

### [Hourly Weather Card](https://github.com/decompil3d/lovelace-hourly-weather) [v4.10.1]

Hourly weather card for Home Assistant. Visualize upcoming weather conditions as a colored horizontal bar.

### [Kiosk Mode](https://github.com/NemesisRE/kiosk-mode) [v1.8.3]

🙈 Hides the Home Assistant header and/or sidebar

### [Layout Card](https://github.com/thomasloven/lovelace-layout-card) [v2.4.4]

🔹 Get more control over the placement of lovelace cards.

### [Mini Graph Card](https://github.com/kalkih/mini-graph-card) [v0.11.0]

Minimalistic graph card for Home Assistant Lovelace UI

### [Mini Media Player](https://github.com/kalkih/mini-media-player) [v1.16.5]

Minimalistic media card for Home Assistant Lovelace UI

### [Mushroom](https://github.com/piitaya/lovelace-mushroom) [v2.7.0]

Mushroom Cards - Build a beautiful dashboard easily 🍄

### [Number Box](https://github.com/htmltiger/numberbox-card) [v4.8]

Replace input_number sliders with plus and minus buttons

### [Platinum Weather Card](https://github.com/Makin-Things/platinum-weather-card) [v1.0.5]

This is a fully customisable weather card for Home Assistant with a graphical configuration.

### [Power Flow Card Plus](https://github.com/flixlix/power-flow-card-plus) [v0.0.9.6]

A power distribution card inspired by the official Energy Distribution card for Home Assistant

### [Rgb Light Card](https://github.com/bokub/rgb-light-card) [v1.11.0]

💡 A Lovelace custom card for RGB lights

### [Sankey Chart Card](https://github.com/MindFreeze/ha-sankey-chart) [v1.12.0]

A Home Assistant lovelace card to display a sankey chart. For example for power consumption

### [Steam Card](https://github.com/Kibibit/kb-steam-card) [v1.1.1]

A Home Assistant card for Steam integrations

### [Swipe Card](https://github.com/bramkragten/swipe-card) [v5.0.0]

Card that allows you to swipe throught multiple cards for Home Assistant Lovelace

### [Time Picker Card](https://github.com/GeorgeSG/lovelace-time-picker-card) [v1.4.0]

🕰️ Time Picker Card for Home Assistant's Lovelace UI

### [Timer Bar Card](https://github.com/rianadon/timer-bar-card) [v1.26]

A progress bar display for Home Assistant timers

### [Uptime Card](https://github.com/dylandoamaral/uptime-card) [v0.14.0]

Minimalistic uptime card for Home Assistant Lovelace UI

### [Vertical Stack In Card](https://github.com/ofekashery/vertical-stack-in-card) [v0.4.4]

📐 Home Assistant Card: Group multiple cards into a single sleek card.

---

</details><details><summary>3 Themes</summary>

### [Metrology   Metro + Fluent + Windows Themes   By Mmak.Es](https://github.com/Madelena/Metrology-for-Hass) [v.1.9.1]

🎨 Give your Home Assistant a modern and clean facelift. 🟥🟧🟩🟦🟪 24 Variations with 2 Styles + 6 Colors (Magenta Red / Orange / Green / Blue / Purple) + 🌞 Light and 🌚 Dark modes included. Based on Metro and Fluent UI Design Systems from Microsoft Windows.

### [Noctis](https://github.com/aFFekopp/noctis) [v2.15]

🐵 Dark Blue Theme for Home Assistant

### [Noctis Grey](https://github.com/chaptergy/noctis-grey) [v1.3.6]

Dark Grey Theme for Home Assistant

---

</details>

<details><summary>Unused Integrations</summary>

This is a list of integrations that are currently disabled, but have not been removed because I think I still might use them someday.

### Python Zwave Fade

Fade Zwave lights over time. It's super buggy for short fades (< 60 seconds), more stable for longer fades.

[Forum Post](https://community.home-assistant.io/t/light-fade-in/35509/19) | [My Current Code](https://github.com/zanix/home-assistant-config/blob/master/python_scripts/zwave_fade.py)

---

</details>

## Devices

### Climate

- [EcoBee3 Thermostat](https://www.amazon.com/dp/B00ZIRV39M) - Smart Thermostat with [extra sensors](https://www.amazon.com/dp/B00NXRYOIQ/)

### Lighting

- [Aeotec Nano Dimmer](https://www.amazon.com/dp/B06XC4CH98) - Hard-wired into lamps with local control using a momentary switch on the metal frame of a lamp
- [DreamScreen](https://www.amazon.com/dp/B01M6UETVR/) (4K DIY) - Responsive LED Backlighting for Video, Music & Games
- [Govee Smart LED Floor Lamp](https://www.amazon.com/dp/B097T5YFZ3) - Nice white light (2200K-6500K) adjustable lamp
- [Honeywell 39348/ZW4005 Switch](https://www.amazon.com/Honeywell-Interchangeable-Repeater-Extender-Required/dp/B07B3LY1SJ)
- [Inovelli LZW30 Black Series On/Off Switch](https://support.inovelli.com/portal/en/kb/articles/products-switches-on-off-lzw30-spec-sheet)
- [Inovelli LZW30-SN Red Series On/Off Switch](https://support.inovelli.com/portal/en/kb/articles/products-switches-on-off-lzw30-sn-spec-sheet)
- [Inovelli VZM31-SN Blue Series Smart 2-1 Switch](https://inovelli.com/products/blue-series-smart-2-1-switch-on-off-or-dimmer)
- [Philips Hue White Ambiance](https://www.amazon.com/dp/B0753H5GKN)
- [WLED](https://github.com/Aircoookie/WLED) - DIY light strip
- [Zooz ZEN71 On-Off Switch](https://www.getzooz.com/zooz-zen71-on-off-switch/)

### Sensor

- [Aqara Door and Window Sensor](https://www.amazon.com/dp/B07D37VDM3)
- [Dome Water Leak Sensor](https://www.amazon.com/dp/B01LXR0B8Q) - Detect water leaks
- [Emporia Vue 2](https://www.amazon.com/dp/B08CJGPHL9/) - Real Time Electricity Monitor/Meter
  flashed for local data with [custom firmware](https://gist.github.com/flaviut/93a1212c7b165c7674693a45ad52c512)
- [ESPHome](https://esphome.io) - DIY devices
  - Bluetooth proxy
  - Car presense
  - Soft water salt level sensor
- [OpenGarage](https://opengarage.io) - Opens, closes, and reads the status of my garage door as well detecting the presence of my car
- [Vision Z-Wave Plus Recessed Door and Window Sensor](https://www.amazon.com/dp/B01JNOCQL4)
- [Zooz 700 Series Z-Wave Plus 4-in-1 Sensor ZSE40](https://www.amazon.com/dp/B01AKSO80O)

### Switch

- [IKEA E1524/E1810 5-Button Remote Control](https://www.amazon.com/dp/B07KM1YZWW)
- [Leviton ZW4SF-1BW Smart 4 Speed Fan Controller](https://www.amazon.com/dp/B08GQJWSRG)
- [Philips Hue Dimmer Remote 324131092621](https://www.amazon.com/dp/B0167Z0P3I)
- [Rachio Sprinkler Controller](https://www.amazon.com/dp/B01D1NMLJU) - Smart Sprinkler controller
- [SONOFF S31 Lite 15A Zigbee Smart Plug](https://www.amazon.com/dp/B08Y87WD1X) -  Smart plug
- [Tasmota](https://tasmota.github.io/docs/) - Flashed devices
- [Zooz Titan Water Valve Actuator](https://www.thesmartesthouse.com/products/zooz-z-wave-plus-700-series-titan-water-valve-actuator-zac36) - Control the water main

### Camera

- [Amcrest AD410 Doorbell](https://www.amazon.com/dp/B091KMT9GB)
- [Wyze Cam v2](https://www.amazon.com/dp/B09XJ36RP2)

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

- [Aeon Labs Z Wave Stick (GEN 5)](https://www.amazon.com/dp/B00X0AWA6E)
- [SONOFF Zigbee 3.0 USB Dongle Plus Gateway](https://sonoff.tech/product/diy-smart-switch/sonoff-dongle-plus/)
- [Ubiquiti Access Point WiFi 6 Pro](https://store.ui.com/collections/unifi-network-wireless/products/unifi-ap6-professional)
- [Ubiquiti Switch 24 PoE (250W)](https://store.ui.com/collections/unifi-network-switching/products/unifiswitch-24-250w)
- [Ubiquiti Switch 8](https://store.ui.com/collections/unifi-network-switching/products/unifi-switch-8)
- [Ubiquiti Switch Flex Mini](https://store.ui.com/collections/unifi-network-switching/products/usw-flex-mini)
- [Ubiquiti Unifi Security Gateway](https://store.ui.com/products/unifi-security-gateway)

### Security

- [Schlage Connect Lock](https://www.amazon.com/gp/product/B00OV49YXU) - Z-Wave controllable lock. Nice to give temp codes for guests or when you forget the keys

## Automations

> For more details, see the [automations.xml][automations] file and `automation:` blocks in [integrations].

<details><summary>146 Automations</summary>

- ⏯ Ensure PiPup is Running
- ⏯ Family Room Media Auto Off
- ⏯ Family Room Media State at Night (Disabled)
- ⏯ Family Room Sound Mode
- ⏯ Living Room Media Auto Off (Disabled)
- ⏯ Living Room Media State at Night (Disabled)
- ⏯ Living Room Sound Mode
- ⏯ Master Bedroom Media Auto Off
- ⏯ PS4 Harmony Activity
- ☑️ Close Garage Door
- ☑️ Garbage Collection
- ☑️ Ignore Door Alerts
- ☑️ Ignore Garage Door Alerts
- ☑️ Ignore Window Alerts (Disabled)
- ☑️ Retry Remote Start Subaru
- ☑️ Turn on Water Main
- ⚙️ Action Sniffer [Zigbee] (Disabled)
- ⚙️ Battery Level Low
- ⚙️ Clear TTS Cache (Disabled)
- ⚙️ Disk Space Low
- ⚙️ ESPHome Update
- ⚙️ Event Sniffer [Actionable Event] (Disabled)
- ⚙️ Event Sniffer [Z-Wave JS] (Disabled)
- ⚙️ Failed Login
- ⚙️ HACS Updates
- ⚙️ RAM Usage High
- ⚙️ Startup
- ⚙️ Upgrade Available
- ⚙️ Zigbee2MQTT Update
- ⚙️ ZWave JS UI Update
- ⚡ Power Mode Changed
- ⚡ PVOutput
- ⚡ Tariff Summer Off-Peak
- ⚡ Tariff Summer Peak
- ⚡ Tariff Winter Off-Peak
- ⚡ Tariff Winter Peak
- ✨ DreamScreen Harmony Power Off
- ✨ DreamScreen Harmony Reactive Activity
- ✨ DreamScreen Scene Changed
- 🌐 UniFi WAN Status
- 🍽️ Dishwasher is Running
- 🎄 XMas Lights Off (Disabled)
- 🎄 XMas Lights On (Disabled)
- 🎄 XMas Tree Off (Disabled)
- 🎄 XMas Tree On (Disabled)
- 🏢 Office Day Mode
- 🏢 Office Night Mode
- 💡 All Lights off when Away
- 💡 Dim Front Lights at Night
- 💡 Ethan Lamp off at Sunrise
- 💡 Ethan Lamp on at Night
- 💡 Front Lights off at Sunrise
- 💡 Front Lights on at Sunset
- 💡 Living Room Lamps off at Night
- 💡 Living Room Lamps on at Sunset
- 💡 Turn Lights On when Arrive
- 💧 Leak Detected
- 💧 Leak Stopped
- 💧 Shut-Off Valve Overheated
- 💧 Softener Salt Level Low
- 💬 Door Closed
- 💬 Door Left Open
- 💬 Door Left Open and Leaving
- 💬 Door Opened and Away
- 💬 Ender 3 Pro
- 💬 Garage Door Closed
- 💬 Garage Door Left Open
- 💬 Garage Door Left Open and Leaving
- 💬 Garage Door Opened and Away
- 💬 Garbage Collection
- 💬 Potty Time (Disabled)
- 💬 Subaru Failed Notification
- 💬 Subaru Remote Start Expired Notification
- 💬 Subaru Started Notification
- 💬 Window Left Open (Disabled)
- 📋 [Controller] Hue Dimmer Switch
- 📋 [Controller] Ikea 5-Button Remote
- 📋 [Holiday in Week] Garbage Collection Adjustment
- 📋 [Holiday in Week] Recycle Collection Adjustment
- 📋 [Inovelli] Emma Switch
- 📋 [Inovelli] Ethan Switch
- 📋 [Inovelli] Family Room Switch
- 📋 [Inovelli] Garage Switch
- 📋 [Inovelli] Guest Room Switch
- 📋 [Inovelli] Kitchen Switch
- 📋 [Inovelli] Living Room Switch
- 📋 [Inovelli] Master Bedroom Switch
- 📋 [Inovelli] Office Switch
- 📋 [Inovelli] Play Space Switch
- 📦 Clear Packages Out for Delivery
- 📦 Mail Today
- 📦 Packages Delivered
- 📦 Packages Out for Delivery
- 📦 Update USPS Mail Camera
- 📱 Smart Display Brighten when Kitchen Light On
- 📱 Smart Display Dim at Sunset
- 📱 Smart Display Dim when Kitchen Light Off
- 📱 Smart Display Off at Night
- 📱 Smart Display Off when Away
- 📱 Smart Display On at Morning
- 📱 Smart Display On when Arrive
- 🔑 Front Door Changed Code
- 🔑 Front Door Decrement Access Count
- 🔑 Front Door Lock Notifications
- 🔑 Front Door Open and Close
- 🔑 Front Door Reset
- 🔑 Front Door Reset Codeslot
- 🔑 Front Door User Notifications
- 🔑 Synchronize Codeslot Front Door 1
- 🔑 Synchronize Codeslot Front Door 2
- 🔑 Synchronize Codeslot Front Door 3
- 🔑 Synchronize Codeslot Front Door 4
- 🔑 Synchronize Codeslot Front Door 5
- 🔑 Synchronize Codeslot Front Door 6
- 🔑 Synchronize Codeslot Front Door 7
- 🔑 Synchronize Codeslot Front Door 8
- 🔑 Turn on Access Limit Front Door 1
- 🔑 Turn on Access Limit Front Door 2
- 🔑 Turn on Access Limit Front Door 3
- 🔑 Turn on Access Limit Front Door 4
- 🔑 Turn on Access Limit Front Door 5
- 🔑 Turn on Access Limit Front Door 6
- 🔑 Turn on Access Limit Front Door 7
- 🔑 Turn on Access Limit Front Door 8
- 🔒 Front Door Lock at Night
- 🔒 Front Door Lock Jammed (Disabled)
- 🔒 Front Door Lock when Away
- 🔒 Front Door Re-lock after Unlock
- 🔔 Doorbell Human
- 🔔 Doorbell Motion or Ring
- 🔔 Doorbell Ring
- 🖥️ [Ardena] Power Actions
- 🖥️ [Ardena] Power on Activity
- 🖥️ [Ardena] Sleep When Harmony Off
- 🖥️ [Quest] Charge Complete
- 🖥️ [Quest] Charge Soon
- 🖥️ [Quest] Interactive
- 🖨️ Low Toner
- 🖨️ Out of Paper
- 🗺️ Arriving Home
- 🗺️ Leaving Zone
- 🚦 Front Door Light Switch Status
- 🚦 Garage Light Switch Status
- 🚦 Office Light Switch Status
- 🧺 Dryer Running
- 🧺 Washer Running

---

</details>

## Things to Consider Buying

- [433Mhz Transmitter and receiver](https://www.amazon.com/dp/B00M2CUALS) - For 433Mhz based devices
- LED RGB [Wifi Controller](https://www.amazon.com/dp/B01JZ2SI6Q) flux_led compatible with [LED Strip kits](https://www.amazon.com/dp/B01CUILC3I) - ~100 Feet
- [Withings](https://www.amazon.com/dp/B01F3LJ2RW) - Smart Weight scale
- [First Alert 2-in-1 Z-Wave Wireless Smoke Detector & Carbon Monoxide Alarm](https://www.amazon.com/gp/product/B00KMHXFAI)
- Aqara Zigbee devices: [Wireless Mini Switch](https://www.amazon.com/gp/product/B07D19YXND/), [Motion Sensor](https://www.amazon.com/gp/product/B07D1CRRVF/), [Temperature and Humidity Sensor](https://www.amazon.com/gp/product/B07D37FKGY/), [Door and Window Sensor](https://www.amazon.com/gp/product/B07D37VDM3/), [Water Leak Sensor](https://www.amazon.com/gp/product/B07D39MSZS/), [Vibration Sensor](https://www.amazon.com/gp/product/B07PJT939B/)

## Todo List

See the [issue queue](https://github.com/zanix/home-assistant-config/issues).

---

**All files are edited with [Visual Studio Code](https://code.visualstudio.com).**

**Configuration files are tested against the stable and beta versions of Home Assistant using [Github Actions](https://github.com/zanix/home-assistant-config/actions).**

[home-assistant]: https://home-assistant.io

[ha-version]: https://www.home-assistant.io/blog/categories/release-notes/
[ha-version-shield]: https://img.shields.io/badge/2023.4.6-555555?style=flat-square&logo=home-assistant

[github-build-status-shield]: https://img.shields.io/github/actions/workflow/status/zanix/home-assistant-config/build.yaml?branch=master&style=flat-square&logo=github-actions&logoColor=838B95
[github-build-status]: https://github.com/zanix/home-assistant-config/actions/workflows/build.yaml
[github-linter-status-shield]: https://img.shields.io/github/actions/workflow/status/zanix/home-assistant-config/linters.yaml?branch=master&style=flat-square&label=linters&logo=github-actions&logoColor=838B95
[github-linter-status]: https://github.com/zanix/home-assistant-config/actions/workflows/linters.yaml

[github-last-commit]: https://img.shields.io/github/last-commit/zanix/home-assistant-config/master?style=flat-square&logo=github&logoColor=838B95
[github-master]: https://github.com/zanix/home-assistant-config/commits/master

[commits-shield]: https://img.shields.io/github/commit-activity/m/zanix/home-assistant-config/master?style=flat-square&logo=github&logoColor=838B95
[commits]: https://github.com/zanix/home-assistant-config/commits/master

[code-lines-shield]: https://img.shields.io/tokei/lines/github/zanix/home-assistant-config?style=flat-square
[code-link]: https://github.com/zanix/home-assistant-config/pulse

[forum-shield]: https://img.shields.io/discourse/topics?style=flat-square&label=community&logo=discourse&color=46B4ED&logoColor=46B4ED&server=https%3A%2F%2Fcommunity.home-assistant.io
[forum]: https://community.home-assistant.io

[discord-shield]: https://img.shields.io/discord/330944238910963714?style=flat-square&color=7289da&label=discord&logo=discord
[discord]: https://discord.gg/c5DvZ4e

[automations]: https://github.com/zanix/home-assistant-config/blob/master/automations.yaml
[integrations]: https://github.com/zanix/home-assistant-config/tree/master/integrations