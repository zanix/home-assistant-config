# [Zanix's][zanix] [Home Assistant][home-assistant] Configuration

[![Home Assistant CI][githubci-shield]][githubci]
[![GitHub Activity][commits-shield]][commits]
[![GitHub Last Commit][last-commit-shield]][commits]

[![Home Assistant Community Forum][forum-shield]][forum]

This is my Home Assistant Configuration created for use with the [docker container](https://www.home-assistant.io/docs/installation/docker/)
version of [Home Assistant][home-assistant] running on an Intel NUC5i5MYHE.

If you want to back up your own Home Assistant configuration to GitHub, follow [this guide](https://home-assistant.io/docs/ecosystem/backup/backup_github/).

## Software

- [Home Assistant][home-assistant]
- [MQTT](https://mosquitto.org) - MQTT Broker docker container

## Integrations

Since some integrations can only be enabled from within the UI, here is a list of integrations that are enabled via the Integrations UI on my Home Assistant.

- [Android TV](https://www.home-assistant.io/integrations/androidtv) - The androidtv platform allows you to control an Android TV device or Amazon Fire TV device
- [EcoBee](https://www.home-assistant.io/integrations/ecobee) - The ecobee integration lets you control and view sensor data from ecobee thermostats
- [ESPHome](https://www.home-assistant.io/integrations/esphome) - Connect ESPHome devices directly to Home Assistant with the native ESPHome API
- [Forecast.Solar](https://www.home-assistant.io/integrations/forecast_solar) - The Forecast.Solar service provides solar production forecasting for your solar panel system, based on historic averages combined with weather forecasting
- [Google Cast](https://www.home-assistant.io/integrations/cast) - Google Cast integration
- [InfluxDB](https://www.home-assistant.io/integrations/influxdb) - The influxdb integration makes it possible to transfer all state changes to an external InfluxDB database
- [Internet Printing Protocol](https://www.home-assistant.io/integrations/ipp) - Read current data from your networked printer that supports the Internet Printing Protocol.
- [IQVIA](https://www.home-assistant.io/integrations/iqvia) - The iqvia sensor platform collects and displays allergy, asthma and disease information
- [Joaoapps Join](https://www.home-assistant.io/integrations/joaoapps_join) - The joaoapps_join integration exposes services from [Join](https://joaoapps.com/join)
- [Logitech Harmony](https://www.home-assistant.io/integrations/harmony) - The harmony remote platform allows you to control the state of your Harmony Hub Device
- [Mobile App](https://www.home-assistant.io/integrations/mobile_app) - The Mobile App integration allows Home Assistant mobile apps to easily integrate with Home Assistant.
- [MQTT](https://www.home-assistant.io/integrations/mqtt) - Allows extremely lightweight publish/subscribe messaging transport
- [Onkyo](https://www.home-assistant.io/integrations/onkyo) - The onkyo platform allows you to control a Onkyo, Integra and some recent Pioneer receivers
- [OpenGarage](https://www.home-assistant.io/integrations/opengarage) - The OpenGarage integration lets you control the open-source OpenGarage.io device
- [OpenWeatherMap](https://www.home-assistant.io/integrations/openweathermap) - The OpenWeatherMap weather integrations uses OpenWeatherMap as a source for current meteorological data for your location.
- [Plex](https://www.home-assistant.io/integrations/plex) - The plex integration allows you to connect to a Plex Media Server
- [Rachio](https://www.home-assistant.io/integrations/rachio) - The rachio platform allows you to control your Rachio irrigation system
- [Ring](https://www.home-assistant.io/integrations/ring) - The ring implementation allows you to integrate your Ring.com devices in Home Assistant
- [Roku](https://www.home-assistant.io/integrations/roku) - The Roku integration allows you to control a Roku device
- [Sony Playstation 4](https://www.home-assistant.io/integrations/ps4) - The PS4 integration allows you to control a Sony PlayStation 4 console
- [Spotify](https://www.home-assistant.io/integrations/spotify) - The Spotify media player integration allows you to control Spotify playback
- [Tasmota](https://www.home-assistant.io/integrations/tasmota) - This integration allows to control of Tasmota devices over MQTT
- [Ubiquiti UniFi](https://www.home-assistant.io/integrations/unifi) - The unifi integration allows you to connects to a UniFi controller and gather device tracking data
- [UPnP/IGD](https://www.home-assistant.io/integrations/upnp) - The upnp integration enables you to collect network statistics from your router such as bytes in/out and packets in/out, uptime, WAN IP address, and WAN connectivity status
- [Vizio SmartCast](https://www.home-assistant.io/integrations/vizio) - The vizio integration allows you to control SmartCast-compatible TVs and sound bars.
- [WLED](https://www.home-assistant.io/integrations/wled) - WLED is a fast and feature-rich implementation of an ESP8266/ESP32 webserver to control NeoPixel (WS2812B, WS2811, SK6812, APA102, and similar) LED's
- [Yamaha](https://www.home-assistant.io/integrations/yamaha) - The yamaha platform allows you to control Yamaha Network Receivers
- [Z-Wave JS](https://www.home-assistant.io/integrations/zwave_js) - The Z-Wave integration allows you to control a Z-Wave network via the [Z-Wave](https://zwave-js.github.io/zwavejs2mqtt) JS driver. This is the recommended Z-Wave integration for Home Assistant.
- [ZigBee](https://www.home-assistant.io/integrations/zigbee) - Zigbee integration for Home Assistant allows you to utilize modules such as the XBee as wireless General Purpose Input/Output (GPIO) devices

## HACS

- [HACS](https://custom-components.github.io/hacs) - Home Assistant Community Store. Makes installing custom components and lovelace cards easy.

### HACS Integrations

- [Browser Mod](https://github.com/thomasloven/hass-browser_mod) - Turn a browser into a controllable entity and an audio player
- [DreamScreen](https://github.com/J3n50m4t/Home-Assistant-DreamScreen-Service) - Controls Wifi enabled [DreamScreens](https://www.dreamscreentv.com) (HD & 4k)
- [Emporia Vue](https://github.com/magico13/ha-emporia-vue) - Reads data from the Emporia Vue energy monitor. Creates a sensor for each device channel showing average usage over each minute.
- [FontAwesome](https://github.com/thomasloven/hass-fontawesome) - Use free icons from the fontawesome set in Home-assistant
- [Govee](https://github.com/LaggAt/hacs-govee) - Govee integration allows you to control and monitor lights using the Govee API
- [Helium Blockchain](https://github.com/rsnodgrass/hass-helium) - Sensors for monitoring individual Helium hotspots, Helium blockchain wallets, and the Helium HNT/USD Oracle price
- [Keymaster](https://github.com/FutureTense/keymaster) - This integration allows you to control one (or more) Z-Wave enabled locks that have been added to your Z-Wave network
- [Mail and Packages](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) - This provides a Custom Component for getting UPS, USPS, and FedEx delivery information in Home Assistant
- [OpenEI](https://github.com/firstof9/ha-openei) - Component to integrate with [OpenEI.org](https://openei.org/)
- [Subaru](https://github.com/G-Two/homeassistant-subaru) - Retrieves information provided by Subaru connected vehicle services
- [Unifi Gateway](https://github.com/custom-components/sensor.unifigateway) - High level health status of UniFi Security Gateway devices via UniFi Controller

### HACS Frontend

- [ApexCharts Card](https://github.com/RomRider/apexcharts-card) - A higly customizable graph card based on ApexCharts.js
- [Auto Entities](https://github.com/thomasloven/lovelace-auto-entities) - Automatically populate lovelace cards with entities matching certain criteria
- [Banner Card](https://github.com/nervetattoo/banner-card) - A fluffy linkable banner with interactive glances to spice up your home dashboards
- [Bar Card](https://github.com/custom-cards/bar-card) - Customizable Animated Bar card
- [Battery State Card](https://github.com/maxwroc/battery-state-card) - Display battery levels for battery entities
- [Button Card](https://github.com/kuuji/button-card) ([Forum](https://community.home-assistant.io/t/lovelace-button-card/65981)) - Simple button card for entities
- [Card Mod](https://github.com/thomasloven/lovelace-card-mod) - Add CSS styles to (almost) any lovelace card
- [Card Tools](https://github.com/thomasloven/lovelace-card-tools) - Collection of tools to simplify creating custom cards
- [Config Template Card Card](https://github.com/iantrich/config-template-card) - This card is for Lovelace on Home Assistant that allows you to use pretty much any valid Javascript on the hass object in your configuration
- [Entity Attributes Card](https://github.com/custom-cards/entity-attributes-card) - Show basic attributes from multiple entities
- [Fold Entity Row](https://github.com/thomasloven/lovelace-fold-entity-row) - Fold away and hide rows in lovelace entities cards
- [HA Floorplan](https://github.com/ExperienceLovelace/ha-floorplan) - Floorplan for Home Assistant
- [Layout Card](https://github.com/thomasloven/lovelace-layout-card) - Get more control over the placement of lovelace cards
- [Lovelace Swipe Navigation](https://github.com/maykar/lovelace-swipe-navigation) - Swipe through Lovelace views on mobile
- [Mini Graph Card](https://github.com/kalkih/mini-graph-card) - Minimalistic graph card
- [Mini Media Player](https://github.com/kalkih/mini-media-player) ([Forum](https://community.home-assistant.io/t/lovelace-mini-media-player/68459)) - A minified version of the default lovelace media player card
- [Multiple Entity Row](https://github.com/benct/lovelace-multiple-entity-row) ([Forum](https://community.home-assistant.io/t/lovelace-multiple-entity-row/109109)) - Show multiple entity states on entity rows
- [Mushroom](https://github.com/piitaya/lovelace-mushroom) - Mushroom is a collection of cards for Home Assistant Lovelace UI
- [Number Box](https://github.com/htmltiger/numberbox-card) - NumberBox for input sliders and number entities
- [Paper Buttons Row](https://github.com/jcwillox/lovelace-paper-buttons-row) - Adds highly configurable buttons that use actions and per-state styling
- [RGB Light Card](https://github.com/bokub/rgb-light-card) - A Lovelace custom card for RGB lights
- [Simple Thermostat](https://github.com/nervetattoo/simple-thermostat) ([Forum](https://community.home-assistant.io/t/lovelace-simple-thermostat-card/82659)) - A simpler thermostat card in terms of interactions and usability
- [Slider Button Card](https://github.com/mattieha/slider-button-card) - A button card with integrated slider for light, switch, fan, cover, input_boolean, media_player, climate, lock entities
- [Slider Entity Row](https://github.com/thomasloven/lovelace-slider-entity-row) - Add sliders to entity cards
- [Stack In Card](https://github.com/custom-cards/stack-in-card) - Similar to vertical-stack and horizontal-stack but removes card borders
- [Template Entity Row](https://github.com/thomasloven/lovelace-template-entity-row) - Display whatever you want in an entities card row
- [Time Picker Card](https://github.com/GeorgeSG/lovelace-time-picker-card) - Time Picker Card.
- [Uptime Card](https://github.com/dylandoamaral/uptime-card) - A minimalist card inspired by the reddit status UI to display binary sensors in a nice way
- [Weather Card](https://github.com/bramkragten/weather-card) - Custom animated weather card

## Unused Integrations

This is a list of integrations that are currently disabled, but have not been removed because I think I still might use them someday.

- [Attributes](https://github.com/pilotak/homeassistant-attributes) - Allows the creation of a sensor that breaks out attribute of defined entities. Was used this to separate `battery_level` attributes into their own sensors, but now is inactive since Home Assistant does this natively.
- Python Zwave Fade : [Forum Post](https://community.home-assistant.io/t/light-fade-in/35509/19) : [My Current Code](https://github.com/zanix/home-assistant-config/blob/master/python_scripts/zwave_fade.py) - Fade Zwave lights over time. It's super buggy for short fades (< 60 seconds), more stable for longer fades.

## Devices

### Climate

- [EcoBee3 Thermostat](https://www.amazon.com/dp/B00ZIRV39M) - Smart Thermostat with [extra sensors](https://www.amazon.com/dp/B00NXRYOIQ/)

### Lighting

- GE/Jasco Z-Wave Light Switch (12722)
- [GE/Jasco Z-Wave Plus Light Switch (14291)](https://www.amazon.com/dp/B01M1AHC3R)
- GE/Jasco Z-Wave Dimmer (12724)
- [GE/Jasco Z-Wave Plus Dimmer (14294)](https://www.amazon.com/dp/B006LQFHN2)
- [Govee Smart LED Floor Lamp](https://www.amazon.com/gp/product/B097T5YFZ3/)
- [Inovelli LZW30 Black Series On/Off Switch](https://inovelli.com/black-series-on-off-switch-z-wave/)
- [Inovelli LZW30 Red Series On/Off Switch](https://inovelli.com/red-series-on-off-switch-z-wave/)
- [Honeywell 39348 / ZW4005 Switch](https://www.amazon.com/Honeywell-Interchangeable-Repeater-Extender-Required/dp/B07B3LY1SJ)
- [Aeotec Z-Wave Micro Dimmer](https://www.amazon.com/dp/B00IRI1CEK)
  - Hard-wired into lamps with local control using a switch on the metal frame of a lamp
- [Philips Hue White Ambiance](https://www.amazon.com/gp/product/B0753H5GKN/)
- [DreamScreen](https://www.dreamscreentv.com/) 4K DIY
  - Responsive LED Backlighting for Video, Music & Games
- [WLED](https://github.com/Aircoookie/WLED) Custom light strip

### Sensor / Switch

- [ESPHome](https://esphome.io) - DIY devices
- [OpenGarage](https://opengarage.io)
  - Opens, closes, and reads the status of my garage door as well detecting the presence of my car
- Various Z-Wave Door/Window sensors
- [Rachio Sprinkler Controller](https://www.amazon.com/dp/B01D1NMLJU)
  - Smart Sprinkler controller
- [System Resources](https://www.home-assistant.io/integrations/systemmonitor)
- [Tasmota](https://tasmota.github.io/docs/) - DIY devices

### Camera

- [Ring Pro Doorbell](https://www.amazon.com/gp/product/B01DM6BDA4)

### Media

- [Google Home Mini](https://store.google.com/us/product/google_nest_mini)
- [Vizio P-Series Quantum X](https://www.vizio.com/en/tv/p-series-quantum-x)
- [Vizio P-Series Quantum](https://www.vizio.com/en/tv/p-series-quantum)
- [nVidia Shield](https://www.nvidia.com/en-us/shield/)
- [Roku Streaming Stick](https://www.amazon.com/gp/product/B075XN5L53/)
- [ChromeCast](https://www.google.com/chromecast/)
- [Harmony Hub](https://www.logitech.com/en-us/products/harmony/harmony-hub.html)
- [Plex](https://plex.tv)
  - [Plex for Android](https://play.google.com/store/apps/details?id=com.plexapp.android)
  - [Plex for Roku TV](https://channelstore.roku.com/details/13535/plex)
- [MagicMirror](https://magicmirror.builders)
- PlayStation 4 Pro

### Network

- [Ubiquiti Unifi Security Gateway](https://www.amazon.com/dp/B00LV8YZLK)
- [Ubiquiti Unifi 802.11ac Pro](https://www.amazon.com/dp/B015PRO512)
- [Aeon Labs Z Wave Stick (GEN 5)](https://www.amazon.com/dp/B00X0AWA6E)
- [Elelabs ZigBee USB adapter](https://www.tindie.com/products/Elelabs/elelabs-zigbee-usb-adapter/)

### Security

- [Schlage Connect Lock](https://www.amazon.com/gp/product/B00OV49YXU) - Z-Wave controllable lock. Nice to give temp codes for guests or when you forget the keys

## Automations

Below is a short list of automations I have set up. For more details, see the automation folder and automation blocks within integrations.

### Areas

- Office day mode - Turn on computer and lights to full and daylight temp
- Office night mode - Dim lights and set to soft temp

### Computer Control

- Power on when Harmony activity is on "Computer"
- Set and update volume
- Sleep on when Harmony activity is "Power Off"

### Delivery

- Send notification when mail will be delivered today
- Send notification when packages are out for delivery
- Send notification when packages have been delivered

### Doors and Windows

- Send notification when a door was left open
- Send notification when a door was left open and leaving
- Send notification when a door opened and away
- Send notification when the garage door was left open
- Send notification when the garage door was left open and leaving
- Send notification when the garage door opened and away

### Harmony

- Set Harmony activity when selected in the UI

### Lights

- Change Dreamscreen mode when Family Room Harmony changes activities
- Front lights on at sunset
- Front lights dim at night
- Front lights off at sunrise
- Turn off all lights when away
- Turn on entry lights when arriving

### Lock

- Lock front door at night
- Lock front door when away
- Re-lock front door after unlock
- Revoke one time use code when used
- Set and revoke pass code when keypad is switched on and off
- Set and revoke temporary pass code on set date start and end
- Send notification when the lock is jammed

### Media Control

- Living room, Family room, and Master bedroom switch Harmony to "Power off" when Shield TV reports that it's off
- Various routines to handle devices powering on and off
- (Disabled) Shield TV paused at night
- (Disabled) Shield TV playing at night

### Ring

- Notify when front door motion is detected
- Notify when front door rings
- Front lights full on ring or motion
- Front lights dim after 10 minutes of ring or motion

### System

- Notify when devices have low battery
- Clear tts cache
- Notify when disk space is low
- Notify on failed login
- Notify when RAM usage is high
- Notify when update is available
- Z-wave heal at night

## Things to Consider Buying

- More [Inovelli Switches](https://inovelli.com/products/switches/) because they are much nicer than the GE I currently have
- [433Mhz Transmitter and receiver](https://www.amazon.com/dp/B00M2CUALS) - For 433Mhz based devices
- LED RGB [Wifi Controller](https://www.amazon.com/dp/B01JZ2SI6Q) flux_led compatible with [LED Strip kits](https://www.amazon.com/dp/B01CUILC3I) - ~100 Feet
- [Withings](https://www.amazon.com/dp/B01F3LJ2RW) - Smart Weight scale

## Todo List

See the [issue queue](https://github.com/zanix/home-assistant-config/issues).

**All files are edited with [Visual Studio Code](https://code.visualstudio.com).**

**Configuration files are tested against the stable and beta versions of Home Assistant using GitHub Action Workflows.**

[githubci-shield]: https://github.com/zanix/home-assistant-config/workflows/Home%20Assistant%20CI/badge.svg?branch=master
[githubci]: https://github.com/zanix/home-assistant-config/actions
[commits-shield]: https://img.shields.io/github/commit-activity/y/zanix/home-assistant-config.svg
[commits]: https://github.com/zanix/home-assistant-config/commits/master
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg
[forum]: https://community.home-assistant.io
[zanix]: https://github.com/zanix
[home-assistant]: https://home-assistant.io
[last-commit-shield]: https://img.shields.io/github/last-commit/zanix/home-assistant-config.svg
[stars-shield]: https://img.shields.io/github/stars/zanix/home-assistant-config.svg?style=social&label=Stars
[forks-shield]: https://img.shields.io/github/forks/zanix/home-assistant-config.svg?style=social&label=Forks
[watchers-shield]: https://img.shields.io/github/watchers/zanix/home-assistant-config.svg?style=social&label=Watchers
