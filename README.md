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
- [Zigbee2MQTT](https://zwave-js.github.io/zwavejs2mqtt) - Zigbee to MQTT bridge, get rid of your proprietary Zigbee bridges
- [Zwavejs2Mqtt](https://zwave-js.github.io/zwavejs2mqtt) - Fully configurable Z-Wave to MQTT Gateway and Control Panel.

## Technical Details

This Home Assistant install has approximately **1309 total entities**,
including **548 sensors**.

<details><summary>29 Stock Integrations</summary>

Since some integrations can only be enabled from within the UI, here is a list of integrations that are enabled via the Integrations UI on my Home Assistant.

### [Android TV](https://www.home-assistant.io/integrations/androidtv)

The androidtv platform allows you to control an Android TV device or Amazon Fire TV device

### [EcoBee](https://www.home-assistant.io/integrations/ecobee)

The ecobee integration lets you control and view sensor data from ecobee thermostats

### [ESPHome](https://www.home-assistant.io/integrations/esphome)

Connect ESPHome devices directly to Home Assistant with the native ESPHome API

### [Forecast.Solar](https://www.home-assistant.io/integrations/forecast_solar)

The Forecast.Solar service provides solar production forecasting for your solar panel system, based on historic averages combined with weather forecasting

### [Google Cast](https://www.home-assistant.io/integrations/cast)

Google Cast integration

### [InfluxDB](https://www.home-assistant.io/integrations/influxdb)

The influxdb integration makes it possible to transfer all state changes to an external InfluxDB database

### [Internet Printing Protocol](https://www.home-assistant.io/integrations/ipp)

Read current data from your networked printer that supports the Internet Printing Protocol.

### [IQVIA](https://www.home-assistant.io/integrations/iqvia)

The iqvia sensor platform collects and displays allergy, asthma and disease information

### [Joaoapps Join](https://www.home-assistant.io/integrations/joaoapps_join)

The joaoapps_join integration exposes services from [Join](https://joaoapps.com/join)

### [Logitech Harmony](https://www.home-assistant.io/integrations/harmony)

The harmony remote platform allows you to control the state of your Harmony Hub Device

### [Mobile App](https://www.home-assistant.io/integrations/mobile_app)

The Mobile App integration allows Home Assistant mobile apps to easily integrate with Home Assistant.

### [MQTT](https://www.home-assistant.io/integrations/mqtt)

Allows extremely lightweight publish/subscribe messaging transport

### [Onkyo](https://www.home-assistant.io/integrations/onkyo)

The onkyo platform allows you to control a Onkyo, Integra and some recent Pioneer receivers

### [OpenGarage](https://www.home-assistant.io/integrations/opengarage)

The OpenGarage integration lets you control the open-source OpenGarage.io device

### [OpenWeatherMap](https://www.home-assistant.io/integrations/openweathermap)

The OpenWeatherMap weather integrations uses OpenWeatherMap as a source for current meteorological data for your location.

### [Plex](https://www.home-assistant.io/integrations/plex)

The plex integration allows you to connect to a Plex Media Server

### [Rachio](https://www.home-assistant.io/integrations/rachio)

The rachio platform allows you to control your Rachio irrigation system

### [Ring](https://www.home-assistant.io/integrations/ring)

The ring implementation allows you to integrate your Ring.com devices in Home Assistant

### [Roku](https://www.home-assistant.io/integrations/roku)

The Roku integration allows you to control a Roku device

### [Sony Playstation 4](https://www.home-assistant.io/integrations/ps4)

The PS4 integration allows you to control a Sony PlayStation 4 console

### [Spotify](https://www.home-assistant.io/integrations/spotify)

The Spotify media player integration allows you to control Spotify playback

### [Steam](https://www.home-assistant.io/integrations/steam_online)

The Steam integration will allow you to track the online status of public Steam accounts

### [Tasmota](https://www.home-assistant.io/integrations/tasmota)

This integration allows to control of Tasmota devices over MQTT

### [Ubiquiti UniFi](https://www.home-assistant.io/integrations/unifi)

The unifi integration allows you to connects to a UniFi controller and gather device tracking data

### [UPnP/IGD](https://www.home-assistant.io/integrations/upnp)

The upnp integration enables you to collect network statistics from your router such as bytes in/out and packets in/out, uptime, WAN IP address, and WAN connectivity status

### [Vizio SmartCast](https://www.home-assistant.io/integrations/vizio)

The vizio integration allows you to control SmartCast-compatible TVs and sound bars.

### [WLED](https://www.home-assistant.io/integrations/wled)

WLED is a fast and feature-rich implementation of an ESP8266/ESP32 webserver to control NeoPixel (WS2812B, WS2811, SK6812, APA102, and similar) LED's

### [Yamaha](https://www.home-assistant.io/integrations/yamaha)

The yamaha platform allows you to control Yamaha Network Receivers

### [Z-Wave JS](https://www.home-assistant.io/integrations/zwave_js)

The Z-Wave integration allows you to control a Z-Wave network via the [Z-Wave](https://zwave-js.github.io/zwavejs2mqtt) JS driver. This is the recommended Z-Wave integration for Home Assistant.

</details>

<details><summary>16 Custom Integrations</summary>

### [Browser Mod](https://github.com/thomasloven/hass-browser_mod) [v1.5.3]

🔹 A Home Assistant integration to turn your browser into a controllable entity - and also an audio player

### [Dreamscreen Service](https://github.com/J3n50m4t/Home-Assistant-DreamScreen-Service)

Home Assistant Service for sending commands to a Wifi enabled DreamScreenAuthors:[https://github.com/GregoryDosh](https://github.com/https://github.com/GregoryDosh).

### [Emporia Vue](https://github.com/magico13/ha-emporia-vue) [v0.7.3]

Home Assistant Integration for Emporia Vue Energy MonitorAuthors:[@magico13](https://github.com/magico13).

### [Fontawesome](https://github.com/thomasloven/hass-fontawesome) [v2.1.5]

🔹 Use icons from fontawesome in home-assistant

### [Generate Readme](https://github.com/custom-components/readme) [v0.4.0]

Use Jinja and data from Home Assistant to generate your README.md fileAuthors:[@ludeeus](https://github.com/ludeeus).

### [Govee](https://github.com/LaggAt/hacs-govee) [v0.2.2]

A HACS repository for Govee light integrationAuthors:[@LaggAt](https://github.com/LaggAt).

### [Home Assistant Community Store (HACS)](https://github.com/hacs/integration) [v1.25.1]

HACS gives you a powerful UI to handle downloads of all your custom needs.Authors:[@ludeeus](https://github.com/ludeeus).

### [Helium Blockchain](https://github.com/rsnodgrass/hass-helium) [v0.3.8]

Helium blockchain sensors for Home AssistantAuthors:[@rsnodgrass](https://github.com/rsnodgrass).

### [Keymaster](https://github.com/FutureTense/keymaster) [v0.0.79]

Home Assistant integration for managing Z-Wave enabled locksAuthors:[@FutureTense](https://github.com/FutureTense), [@firstof9](https://github.com/firstof9), [@raman325](https://github.com/raman325).

### [Mail And Packages](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) [v0.3.4-2]

Home Assistant integration providing day of package counts and USPS informed delivery images.Authors:[@moralmunky](https://github.com/moralmunky), [@firstof9](https://github.com/firstof9).

### [Openei](https://github.com/firstof9/ha-openei) [v0.1.7]

OpenEI integration for Home AssistantAuthors:[@firstof9](https://github.com/firstof9).

### [Sensor.Unifigateway](https://github.com/custom-components/sensor.unifigateway) [v0.3.3]

High level health status of UniFi Security Gateway devices via UniFi ControllerAuthors:[@jchasey](https://github.com/jchasey).

### [Subaru (Hacs)](https://github.com/G-Two/homeassistant-subaru) [v0.6.2]

Subaru STARLINK custom component for Home Assistant.Authors:[@G-Two](https://github.com/G-Two).

### [Ui Lovelace Minimalist](https://github.com/UI-Lovelace-Minimalist/UI) [v0.0.8]

UI-Lovelace-Minimalist is a "theme" for HomeAssistantAuthors:[@stokkie90](https://github.com/stokkie90).

### [Watchman](https://github.com/dummylabs/thewatchman) [v0.5.3]

Home Assistant custom integration to keep track of missing entities and services in your config filesAuthors:[@dummylabs](https://github.com/dummylabs).

### [Webrtc Camera](https://github.com/AlexxIT/WebRTC) [v2.3.0]

Home Assistant custom component for viewing IP cameras RTSP stream in real time using WebRTC and MSE technologyAuthors:[@AlexxIT](https://github.com/AlexxIT).
</details>

<details><summary>27 Lovelace Plugins</summary>

### [Apexcharts Card](https://github.com/RomRider/apexcharts-card) [v2.0.1]

📈 A Lovelace card to display advanced graphs and charts based on ApexChartsJS for Home Assistant

### [Auto Entities](https://github.com/thomasloven/lovelace-auto-entities) [v1.11.0]

🔹Automatically populate the entities-list of lovelace cards

### [Bar Card](https://github.com/custom-cards/bar-card) [v3.2.0]

Customizable Animated Bar card for Home Assistant Lovelace

### [Battery State Card / Entity Row](https://github.com/maxwroc/battery-state-card) [v2.1.1]

Battery state card for Home Assistant

### [Button Card](https://github.com/custom-cards/button-card) [v3.4.2]

❇️ Lovelace button-card for home assistant

### [Card Mod](https://github.com/thomasloven/lovelace-card-mod) [v3.1.4]

🔹 Add CSS styles to (almost) any lovelace card

### [Card Tools](https://github.com/thomasloven/lovelace-card-tools) [v11]

🔹A collection of tools for other lovelace plugins to use

### [Entity Attributes Card](https://github.com/custom-cards/entity-attributes-card) [v0.1.2]

Entity Attributes

### [Fold Entity Row](https://github.com/thomasloven/lovelace-fold-entity-row) [v2.2.0]

🔹 A foldable row for entities card, containing other rows

### [Ha Floorplan](https://github.com/ExperienceLovelace/ha-floorplan) [v1.0.30]

Bring new life to Home Assistant. By mapping entities to a SVG-object, you're able to control devices, show states, calling services - and much more. Add custom styling on top, to visualize whatever you can think of. Your imagination just become the new limit.

### [Kiosk Mode](https://github.com/maykar/kiosk-mode) [v1.7.2]

🙈 Hides the Home Assistant header and/or sidebar

### [Layout Card](https://github.com/thomasloven/lovelace-layout-card) [v2.4.2]

🔹 Get more control over the placement of lovelace cards.

### [Mini Graph Card](https://github.com/kalkih/mini-graph-card) [v0.11.0]

Minimalistic graph card for Home Assistant Lovelace UI

### [Mini Media Player](https://github.com/kalkih/mini-media-player) [v1.16.4]

Minimalistic media card for Home Assistant Lovelace UI

### [Multiple Entity Row](https://github.com/benct/lovelace-multiple-entity-row) [v4.4.1]

Show multiple entity states and attributes on entity rows in Home Assistant's Lovelace UI

### [Mushroom](https://github.com/piitaya/lovelace-mushroom) [v1.8.8]

Mushroom Cards - Build a beautiful dashboard easily 🍄

### [Number Box](https://github.com/htmltiger/numberbox-card) [v3.10]

Replace input_number sliders with plus and minus buttons

### [Rgb Light Card](https://github.com/bokub/rgb-light-card) [v1.11.0]

💡 A Lovelace custom card for RGB lights

### [Simple Thermostat](https://github.com/nervetattoo/simple-thermostat) [v2.4.3]

A different take on the thermostat card for Home Assistant ♨️

### [Slider Button Card](https://github.com/mattieha/slider-button-card) [v1.10.3]

A button card with integrated slider

### [Slider Entity Row](https://github.com/thomasloven/lovelace-slider-entity-row) [v17.2.1]

🔹 Add sliders to entity cards

### [Stack In Card](https://github.com/custom-cards/stack-in-card) [v0.2.0]

🛠 group multiple cards into one card without the borders

### [Sun Card](https://github.com/AitorDB/home-assistant-sun-card) [v0.1.4]

Home assistant sun card based on Google weather design

### [Template Entity Row](https://github.com/thomasloven/lovelace-template-entity-row) [v1.3.0]

🔹 Display whatever you want in an entities card row.

### [Time Picker Card](https://github.com/GeorgeSG/lovelace-time-picker-card) [v1.2.1]

🕰️ Time Picker Card for Home Assistant's Lovelace UI

### [Uptime Card](https://github.com/dylandoamaral/uptime-card) [v0.10.0]

Minimalistic uptime card for Home Assistant Lovelace UI

### [Weather Card](https://github.com/bramkragten/weather-card) [v1.5.0]

Weather Card with animated icons for Home Assistant Lovelace
</details><details><summary>5 Themes</summary>

### [Midnight Theme](https://github.com/home-assistant-community-themes/midnight)

Midnight theme for Home Assistant

### [Mushroom Themes](https://github.com/piitaya/lovelace-mushroom-themes) [v0.0.2]

Additional themes for Lovelace Mushroom Cards 🍄

### [Noctis](https://github.com/aFFekopp/noctis) [v2.7]

🐵 Dark Blue Theme for Home Assistant

### [Noctis Grey](https://github.com/chaptergy/noctis-grey) [v1.3.3]

Dark Grey Theme for Home Assistant

### [Noctis Solarized](https://github.com/williamahartman/noctis-solarized)

Noctis theme made Solarized
</details>

<details><summary>Unused Integrations</summary>

This is a list of integrations that are currently disabled, but have not been removed because I think I still might use them someday.

### Python Zwave Fade

Fade Zwave lights over time. It's super buggy for short fades (< 60 seconds), more stable for longer fades.

[Forum Post](https://community.home-assistant.io/t/light-fade-in/35509/19) | [My Current Code](https://github.com/zanix/home-assistant-config/blob/master/python_scripts/zwave_fade.py)

</details>

---

## Devices

> **Note:** NONE of the links are affiliate links. I don't care about getting a commission from Amazon.

### Climate

- [EcoBee3 Thermostat](https://www.amazon.com/dp/B00ZIRV39M) - Smart Thermostat with [extra sensors](https://www.amazon.com/dp/B00NXRYOIQ/)

### Lighting

I started out with the GE Z-Wave switches but I'm slowly replacing them with Inovelli.

- GE/Jasco Z-Wave Light Switch (12722)
- [GE/Jasco Z-Wave Plus Light Switch (14291)](https://www.amazon.com/dp/B01M1AHC3R)
- GE/Jasco Z-Wave Dimmer (12724)
- [GE/Jasco Z-Wave Plus Dimmer (14294)](https://www.amazon.com/dp/B006LQFHN2)
- [Inovelli LZW30 Black Series On/Off Switch](https://inovelli.com/black-series-on-off-switch-z-wave/)
- [Inovelli LZW30 Red Series On/Off Switch](https://inovelli.com/red-series-on-off-switch-z-wave/)
- [Honeywell 39348 / ZW4005 Switch](https://www.amazon.com/Honeywell-Interchangeable-Repeater-Extender-Required/dp/B07B3LY1SJ)
- [Aeotec Z-Wave Micro Dimmer](https://www.amazon.com/dp/B00IRI1CEK) - Hard-wired into lamps with local control using a switch on the metal frame of a lamp
- [Govee Smart LED Floor Lamp](https://www.amazon.com/gp/product/B097T5YFZ3) - Nice white light (2200K-6500K) adjustable lamp
- [Philips Hue White Ambiance](https://www.amazon.com/gp/product/B0753H5GKN)
- [DreamScreen](https://www.dreamscreentv.com/) (4K DIY) - Responsive LED Backlighting for Video, Music & Games
- [WLED](https://github.com/Aircoookie/WLED) - DIY light strip

### Sensor / Switch

- [Dome Water Leak Sensor](https://www.amazon.com/gp/product/B01LXR0B8Q/) - Detect water leaks
- [ESPHome](https://esphome.io) - DIY devices
- [OpenGarage](https://opengarage.io) - Opens, closes, and reads the status of my garage door as well detecting the presence of my car
- [Rachio Sprinkler Controller](https://www.amazon.com/dp/B01D1NMLJU) - Smart Sprinkler controller
- [System Resources](https://www.home-assistant.io/integrations/systemmonitor)
- [Tasmota](https://tasmota.github.io/docs/) - Flashed devices
- [Zooz Titan Water Valve Actuator](https://www.thesmartesthouse.com/products/zooz-z-wave-plus-700-series-titan-water-valve-actuator-zac36) - Control the water main
- Various Z-Wave Door/Window sensors

### Camera

- [Ring Pro Doorbell](https://www.amazon.com/gp/product/B01DM6BDA4)
- [Wyze Cam v2](https://www.amazon.com/dp/B09XJ36RP2)

### Media

- [Google Home Mini](https://store.google.com/us/product/google_nest_mini)
- [Vizio P-Series Quantum X](https://www.vizio.com/en/tv/p-series-quantum-x)
- [Vizio P-Series Quantum](https://www.vizio.com/en/tv/p-series-quantum)
- [nVidia Shield](https://www.nvidia.com/en-us/shield/) (2015, 2017, and 2019 versions)
- [ChromeCast](https://www.google.com/chromecast/)
- [Harmony Hub](https://www.logitech.com/en-us/products/harmony/harmony-hub.html)
- [Plex](https://plex.tv)
  - [Plex for Android](https://play.google.com/store/apps/details?id=com.plexapp.android)
  - [Plex for Roku TV](https://channelstore.roku.com/details/13535/plex)
- [MagicMirror](https://magicmirror.builders)
- PlayStation 4 Pro

### Network

- [Ubiquiti Unifi Security Gateway](https://store.ui.com/products/unifi-security-gateway)
- [Ubiquiti Switch 24 PoE (250W)](https://store.ui.com/collections/unifi-network-switching/products/unifiswitch-24-250w)
- [Ubiquiti Switch 8](https://store.ui.com/collections/unifi-network-switching/products/unifi-switch-8)
- [Ubiquiti Switch Flex Mini](https://store.ui.com/collections/unifi-network-switching/products/usw-flex-mini)
- [Ubiquiti Access Point WiFi 6 Pro](https://store.ui.com/collections/unifi-network-wireless/products/unifi-ap6-professional)
- [Aeon Labs Z Wave Stick (GEN 5)](https://www.amazon.com/dp/B00X0AWA6E)
- [SONOFF Zigbee 3.0 USB Dongle Plus Gateway](https://sonoff.tech/product/diy-smart-switch/sonoff-dongle-plus/)

### Security

- [Schlage Connect Lock](https://www.amazon.com/gp/product/B00OV49YXU) - Z-Wave controllable lock. Nice to give temp codes for guests or when you forget the keys

## Automations

This Home Assistant install has approximately **124 automations**.

For more details, see the automation folder and automation blocks within integrations.

## Things to Consider Buying

- More [Inovelli Switches](https://inovelli.com/products/switches/) because they are much nicer than the GE I currently have
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
[ha-version-shield]: https://img.shields.io/badge/2022.5.5-333333?logo=home%20assistant

[github-last-commit]: https://img.shields.io/github/last-commit/zanix/home-assistant-config.svg?logo=github&logoColor=838B95
[github-master]: https://github.com/zanix/home-assistant-config/commits/master

[commits-shield]: https://img.shields.io/github/commit-activity/m/zanix/home-assistant-config.svg?logo=github&logoColor=838B95
[commits]: https://github.com/zanix/home-assistant-config/commits/master

[github-build-status-shield]: https://github.com/zanix/home-assistant-config/actions/workflows/build.yaml/badge.svg
[github-build-status]: https://github.com/zanix/home-assistant-config/actions/workflows/build.yaml
[github-linter-status-shield]: https://github.com/zanix/home-assistant-config/actions/workflows/linters.yaml/badge.svg
[github-linter-status]: https://github.com/zanix/home-assistant-config/actions/workflows/linters.yaml

[code-lines-shield]: https://img.shields.io/badge/lines%20of%20code-unknown-informational
[code-link]: https://github.com/zanix/home-assistant-config/pulse

[forum-shield]: https://img.shields.io/discourse/topics?color=46B4ED&label=community&logo=discourse&logoColor=46B4ED&server=https%3A%2F%2Fcommunity.home-assistant.io
[forum]: https://community.home-assistant.io

[discord-shield]: https://img.shields.io/discord/330944238910963714.svg?logo=discord&color=7289da
[discord]: https://discord.gg/c5DvZ4e

[stars-shield]: https://img.shields.io/github/stars/zanix/home-assistant-config.svg?style=social&label=Stars
[forks-shield]: https://img.shields.io/github/forks/zanix/home-assistant-config.svg?style=social&label=Forks
[watchers-shield]: https://img.shields.io/github/watchers/zanix/home-assistant-config.svg?style=social&label=Watchers