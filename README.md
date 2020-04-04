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

### Add-Ons

- [HACS](https://custom-components.github.io/hacs) - Home Assistant Community Store. Makes installing custom components and lovelace cars easy.
- [MQTT Docker](https://forums.unraid.net/topic/36810-support-spants-nodered-mqtt-dashing-couchdb/) - MQTT Broker docker container in UnRaid

### Custom Elements

- [Auto Entities](https://github.com/thomasloven/lovelace-auto-entities) - Automatically populate the entities-list of lovelace cards
- [Battery Entity Card](https://github.com/cbulock/lovelace-battery-entity) ([Forum](https://community.home-assistant.io/t/lovelace-battery-entity-card/107500)) - Display battery levels for battery entities
- [Button Card](https://github.com/kuuji/button-card) ([Forum](https://community.home-assistant.io/t/lovelace-button-card/65981)) - Simple button card for entities
- [Card Mod](https://github.com/thomasloven/lovelace-card-mod) - Add CSS styles to (almost) any lovelace card
- [Custom Header](https://github.com/maykar/custom-header) - Adds enhancements and customization options to Home Assistant's Lovelace header
- [Entity Attributes Card](https://github.com/custom-cards/entity-attributes-card) - Show basic attributes from multiple entities
- [Floorplan](https://github.com/pkozul/ha-floorplan) ([Forum](https://community.home-assistant.io/c/third-party/floorplan)) - Interactive floorplan
- [Mini Graph Card](https://github.com/kalkih/mini-graph-card) - Minimalistic graph card for Home Assistant Lovelace UI
- [Mini Media Player](https://github.com/kalkih/mini-media-player) ([Forum](https://community.home-assistant.io/t/lovelace-mini-media-player/68459)) - A minified version of the default lovelace media player card
- [Multiple Entity Row](https://github.com/benct/lovelace-multiple-entity-row) ([Forum](https://community.home-assistant.io/t/lovelace-multiple-entity-row/109109)) - Show multiple entity states on entity rows
- [Simple Thermostat](https://github.com/nervetattoo/simple-thermostat) ([Forum](https://community.home-assistant.io/t/lovelace-simple-thermostat-card/82659)) - A simpler thermostat card in terms of interactions and usability
- [Stack In Card](https://github.com/custom-cards/stack-in-card) - Similar to vertical-stack and horizontal-stack but removes card borders
- [Weather Card](https://github.com/bramkragten/weather-card) - Custom animated weather card
- [Slider Entity Row](https://github.com/thomasloven/lovelace-slider-entity-row) - Add sliders to entity cards

### Custom Components

- [Attributes as Sensors](https://github.com/pilotak/homeassistant-attributes) - (Disabled) Allows the creation of a sensor that breaks out attribute of defined entities. Was used this to separate `battery_level` attributes into their own sensors, but now is inactive since Home Assistant does this natively.
- [DreamScreen](https://github.com/GregoryDosh/Home-Assistant-DreamScreen-Service) - Controls Wifi enabled [DreamScreens](https://www.dreamscreentv.com/) (HD & 4k)
- JSONRest : [Forum Post on SolarEdge](https://community.home-assistant.io/t/solaredge-solar-panels-support/14340) : [Forum Post on JSONRest](https://community.home-assistant.io/t/solved-parsing-a-json-value-from-an-existing-entity-in-a-template-sensor/20490/17) - Was used to gather solar production from SolarEdge, but now is inactive.
- Python Zwave Fade : [Forum Post](https://community.home-assistant.io/t/light-fade-in/35509/19) : [My Current Code](https://github.com/zanix/home-assistant-config/blob/master/python_scripts/zwave_fade.py) - Fade Zwave lights over time. It's super buggy for short fades (< 60 seconds), more stable for longer fades.

## Devices

### Climate

- [EcoBee3 Thermostat](https://www.amazon.com/dp/B00ZIRV39M) - Smart Thermostat with [extra sensors](https://www.amazon.com/dp/B00NXRYOIQ/)

### Lighting

- GE Z-Wave Light Switch (12722)
- [GE Z-Wave Plus Light Switch (14291)](https://www.amazon.com/dp/B01M1AHC3R)
- GE Z-Wave Dimmer (12724)
- [GE Z-Wave Plus Dimmer (14294)](https://www.amazon.com/dp/B006LQFHN2)
- [Aeotec Z-Wave Micro Dimmer](https://www.amazon.com/dp/B00IRI1CEK)
  - Hard-wired into lamps with local control using a switch on the metal frame of a lamp
- [Philips Hue White Ambiance](https://www.amazon.com/gp/product/B0753H5GKN/)
- [DreamScreen](https://www.dreamscreentv.com/) 4K DIY
  - Responsive LED Backlighting for Video, Music & Games

### Sensor / Switch

- [OpenGarage](https://opengarage.io)
  - Opens, closes, and reads the status of my garage door as well detecting the presense of my car
- Various Z-Wave Door/Window sensors
- [Rachio Sprinkler Controller](https://www.amazon.com/dp/B01D1NMLJU)
  - Smart Sprinkler controller
- [System Resources](https://www.home-assistant.io/integrations/systemmonitor)

### Camera

- [Ring Pro Doorbell](https://www.amazon.com/gp/product/B01DM6BDA4)

### Media

- [Google Home Mini](https://store.google.com/us/product/google_home_mini?hl=en-US) x3
- [Sony Bravia TV](https://www.amazon.com/dp/B01MZF81NS/)
- [TCL Roku TV](https://www.bestbuy.com/site/tcl-65-class-led-6-series-2160p-smart-4k-uhd-tv-with-hdr-roku-tv/6367717.p?skuId=6367717)
- [nVidia Shield](https://www.amazon.com/dp/B01N1NT9Y6/)
- [Roku Streaming Stick](https://www.amazon.com/gp/product/B075XN5L53/)
- [ChromeCast](https://www.google.com/chromecast/)
- [Harmony Hub](https://www.amazon.com/gp/product/B00BQ5RYI4/)
- [Plex](https://plex.tv)
  - [Plex for Android](https://play.google.com/store/apps/details?id=com.plexapp.android)
  - [Plex for Roku TV](https://channelstore.roku.com/details/13535/plex)
- PlayStation 4 Pro

### Network

- [Ubiquiti Unifi Security Gateway](https://www.amazon.com/dp/B00LV8YZLK)
- [Ubiquiti Unifi 802.11ac Pro](https://www.amazon.com/dp/B015PRO512)
- [Aeon Labs Z Wave Stick (GEN 5)](https://www.amazon.com/dp/B00X0AWA6E)
- [Elelabs ZigBee USB adapter](https://www.tindie.com/products/Elelabs/elelabs-zigbee-usb-adapter/)

### Security

- [Schlage Connect Lock](https://www.amazon.com/gp/product/B00OV49YXU) - Z-Wave controllable lock. Nice to give temp codes for guests or when you forget the keys

## Automations

- See automation folder and automation blocks within packages

### Areas

- Office day mode - Turn on computer and lights to full and daylight temp
- Office night mode - Dim lights and set to soft temp

### Computer Control

- Power on when Harmony activity is on "Computer"
- Set and update volume
- Sleep on when Harmony activity is "Power Off"

### Harmony

- Set Harmony activity when selected

### Lights

- Front lights on at sunset
- Front lights dim at night
- Front lights off at sunrise
- Turn off all lights when away
- Turn on some lights when arriving

### Lock

- Lock front door at night
- Lock front door when away
- Re-lock front door after unlock
- Revoke one time use code when used
- Set pass code when keypad is switched on
- Revoke pass code when keypad is switched off
- Set temporary pass code on set date start
- Revoke temporary pass code on set date end

### Media Control

- (Disabled) Family room auto off
- (Disabled) Shield master bedroom auto off
- (Disabled) Shield living room paused at night
- (Disabled) Shield living room playing at night

### Notifications

- Door was left open
- Door was left open and leaving
- Door opened and away
- Garage door was left open
- Garage door was left open and leaving
- Garage door opened and away

### Pi-hole

- Disable when time is selected
- Reset disable time after re-enabled

### Ring

- Notify when front door motion is detected
- Notify when front door rings
- Front lights full on ring or motion
- Front lights dim after 10 minutes of ring or motion

### System

- Clear tts cache
- Notify on failed login
- Notify when devices have low battery
- Notify when disk space is low
- Set theme at startup
- Notify when update is available
- Z-wave heal at night

## Things to Buy

- [Amazon Dash Buttons](https://www.amazon.com/dp/B01F6ETRNA)
- [433Mhz Transmitter and receiver](https://www.amazon.com/dp/B00M2CUALS) - For 433Mhz based devices
- [Amplifiers](https://www.amazon.com/dp/B006AMF2R8) - Power speakers for Dots, Chromecasts or other devices.
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
