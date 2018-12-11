# [![Build Status](https://travis-ci.org/zanix/home-assistant-config.svg?branch=master)](https://travis-ci.org/zanix/home-assistant-config) Home-Assistant Config by [@zanixmechanix](https://twitter.com/zanixmechanix)

[Home Assistant](https://home-assistant.io) configuration files (YAMLs)

This is my Home Assistant Configuration created for use with [Hass.io](https://home-assistant.io/hassio/).
Home Assistant runs on a [Raspberry Pi 3](http://amzn.to/2e3DOBY). The main SD Card is 32GB.

If you want to back up your own Home Assistant configuration to GitHub, follow [this guide](https://home-assistant.io/docs/ecosystem/backup/backup_github/).

## Software

- [Hass.io](https://home-assistant.io/hassio/) by [Home Assistant](https://home-assistant.io)

### Add-Ons

- [Mosquitto broker](https://www.home-assistant.io/addons/mosquitto/) - MQTT Broker

### Custom Elements

- [Floorplan](https://community.home-assistant.io/c/third-party/floorplan), interactive floorplan
- [Custom Updater](https://github.com/custom-components/custom_updater) - A component which allows you to track and update custom cards/components and python_scripts
- [Tracker Card](https://github.com/custom-cards/tracker-card) - Card to track updates for custom cards and custom components
- [Lovelace Custom Cards](https://github.com/ciotlosm/custom-lovelace) ([Forum](https://community.home-assistant.io/t/lovelace-button-card/65981)) - Simple button card for entities
- [Animated Weather Card](https://github.com/arsaboo/homeassistant-config) ([Forum](https://community.home-assistant.io/t/custom-dark-sky-animated-weather-card/59816)) - Custom animated weather card
- [Button Card](https://github.com/kuuji/button-card) ([Forum](https://community.home-assistant.io/t/lovelace-button-card/65981)) - Simple button card for entities
- [Mini Media Player](https://github.com/kalkih/mini-media-player) ([Forum](https://community.home-assistant.io/t/lovelace-mini-media-player/68459)) - A minified version of the default lovelace media player card
- [Mini Graph Card](https://github.com/kalkih/mini-graph-card) - A minimalistic sensor with graph lovelace card
- [Slider Entity Row](https://github.com/thomasloven/lovelace-slider-entity-row) - Add sliders to entity cards
- [Vertical Stack In Card](https://github.com/custom-cards/vertical-stack-in-card) - Similar to vertical-stack but removes card borders

### Custom Components

- [Attributes as Sensors](https://github.com/pilotak/HomeAssistant-CustomComponents) - Allows the creation of a sensor that breaks out attribute of defined entities. I use this to separate `battery_level` attributes into their own sensors
- [DreamScreen](https://github.com/GregoryDosh/Home-Assistant-DreamScreen-Service) - Controls Wifi enabled [DreamScreens](https://www.dreamscreentv.com/) (HD & 4k)
- JSONRest : [Forum Post on SolarEdge](https://community.home-assistant.io/t/solaredge-solar-panels-support/14340) : [Forum Post on JSONRest](https://community.home-assistant.io/t/solved-parsing-a-json-value-from-an-existing-entity-in-a-template-sensor/20490/17) - Used to gather solar production from SolarEdge
- Python Zwave Fade : [Forum Post](https://community.home-assistant.io/t/light-fade-in/35509/19) : [My Current Code](https://github.com/zanix/home-assistant-config/blob/master/python_scripts/zwave_fade.py) - Fade Zwave lights over time. It's super buggy for short fades (< 60 seconds), more stable for longer fades.

## Devices

### Climate

- [EcoBee3 Thermostat](https://www.amazon.com/dp/B00ZIRV39M) - Smart Thermostat with [extra sensors](https://www.amazon.com/dp/B00NXRYOIQ/)

### Lighting

- GE Z-Wave Light Switch (12722) x5
- [GE Z-Wave Plus Light Switch (14291)](https://www.amazon.com/dp/B01M1AHC3R) x4
- GE Z-Wave Dimmer (12724) x2
- [GE Z-Wave Plus Dimmer (14294)](https://www.amazon.com/dp/B006LQFHN2) x3
- [Aeotec Z-Wave Micro Dimmer](https://www.amazon.com/dp/B00IRI1CEK) x2
  - Hard-wired into lamps with local control using a [touch sensor](https://www.adafruit.com/product/1374) on the metal frame of a lamp
- [Philips Hue White Ambiance](https://www.amazon.com/gp/product/B0753H5GKN/) x4
- [DreamScreen](https://www.dreamscreentv.com/) 4K DIY
  - Responsive LED Backlighting for Video, Music & Games

### Sensor / Switch

- [OpenGarage](https://opengarage.io)
  - Opens, closes, and reads the status of my garage door as well detecting the presense of my car
- Various Z-Wave Door/Window sensors
- [Rachio Sprinkler Controller](https://www.amazon.com/dp/B01D1NMLJU)
  - Smart Sprinkler controller
- SolarEdge via [JSONRest](https://community.home-assistant.io/t/solved-parsing-a-json-value-from-an-existing-entity-in-a-template-sensor/20490/17) component
- [Forecast.io (Darksky)](https://darksky.net)
- [Pi System Resources](https://home-assistant.io/components/sensor.systemmonitor/)
- [UPS Packages](https://home-assistant.io/components/sensor.ups/)
- (Broken) [FedEx Packages](https://home-assistant.io/components/sensor.fedex/)
- (Broken) [USPS Mail and Packages](https://home-assistant.io/components/sensor.usps/)

### Camera

- [Ring Pro Doorbell](https://www.amazon.com/gp/product/B01DM6BDA4)

### Media

- [Google Home Mini](https://store.google.com/us/product/google_home_mini?hl=en-US) x3
- [Sony Bravia TV](https://www.amazon.com/dp/B01MZF81NS/)
- [TCL Roku TV](https://www.bestbuy.com/site/tcl-55-class-54-6-diag--led-2160p-smart-4k-ultra-hd-tv-with-high-dynamic-range-roku-tv/5878705.p?skuId=5878705)
- [nVidia Shield](https://www.amazon.com/dp/B01N1NT9Y6/) x2
- [Roku Streaming Stick](https://www.amazon.com/gp/product/B075XN5L53/)
- [ChromeCast](https://www.google.com/chromecast/)
- [Harmony Hub](https://www.amazon.com/gp/product/B00BQ5RYI4/) x3
- [Emby](https://emby.media)
  - [Emby for Android TV](https://emby.media/emby-for-android-tv.html)
  - [Emby for Roku TV](https://emby.media/emby-for-roku.html)

### Network

- [Ubiquiti Unifi Security Gateway](https://www.amazon.com/dp/B00LV8YZLK)
- [Ubiquiti Unifi 802.11ac Pro](https://www.amazon.com/dp/B015PRO512)
- [Aeon Labs Z Wave Stick (GEN 5)](https://www.amazon.com/dp/B00X0AWA6E)
- [Elelabs ZigBee USB adapter](https://www.tindie.com/products/Elelabs/elelabs-zigbee-usb-adapter/)

### Security

- [Schlage Connect Lock](https://www.amazon.com/gp/product/B00OV49YXU) - Z-Wave controllable lock. Nice to give temp codes for guests or when you forget the keys

## Automations

- See automation folder and automation blocks within packages

### Computer Control

- Power on when Harmony activity is on "Computer"
- Power on office computer for work
- Set and update volume
- Sleep on when Harmony activity is "Power Off"

### Delivery

- (Broken) Notify when packages out for delivery
- (Broken) Notify when packages are delivered

### Harmony

- Set Harmony activity when selected

### Lights

- Front lights on at sunset
- Front lights 15% at 10:30pm
- Front lights off at sunrise
- Set brightness on all office lights
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
- (Disabled) Shield bedroom auto off
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
- Front lights 100% on ring or motion
- Front lights 15% after 10 minutes of ring or motion

### System

- Clear tts cache
- Notify on failed login
- Notify on low battery
- Notify when SD card space reaches 90%
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

**Configuration files are tested against the most stable version of Home Assistant using [Travis](https://travis-ci.org/zanix/home-assistant-config).**
