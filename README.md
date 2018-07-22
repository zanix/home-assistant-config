# [![Build Status](https://travis-ci.org/zanix/home-assistant-config.svg?branch=master)](https://travis-ci.org/zanix/home-assistant-config) Home-Assistant Config by [@zanixmechanix](https://twitter.com/zanixmechanix)

[Home Assistant](https://home-assistant.io) configuration files (YAMLs)

This is my Home Assistant Configuration created for use with [Hass.io](https://home-assistant.io/hassio/).
Home Assistant runs on a [Raspberry Pi 3](http://amzn.to/2e3DOBY). The main SD Card is 32GB.

If you want to back up your own Home Assistant configuration to GitHub, follow [this guide](https://home-assistant.io/docs/ecosystem/backup/backup_github/).

## Software

- [Hass.io](https://home-assistant.io/hassio/) by [Home Assistant](https://home-assistant.io)

### Add-Ons

- [Mosquitto broker](https://www.home-assistant.io/addons/mosquitto/) - MQTT Broker

### Custom UI Elements

- [Custom UI elements](https://github.com/andrey-git/home-assistant-custom-ui), updates via `update_custom_ui.sh`
- [Horizontal line state card](https://github.com/covrig/homeassistant-hline), updates via `update_hline_ui.sh`
- [Tiles custom state card](https://github.com/c727/home-assistant-tiles), updates via `update_tiles_ui.sh`
- [Floorplan](https://community.home-assistant.io/c/third-party/floorplan), interactive floorplan

### Custom Components

- [Attributes as Sensors](https://github.com/pilotak/HomeAssistant-CustomComponents) - Allows the creation of a sensor that breaks out attribute of defined entities. I use this to separate `battery_level` attributes into their own sensors
- JSONRest : [Forum Post on SolarEdge](https://community.home-assistant.io/t/solaredge-solar-panels-support/14340) : [Forum Post on JSONRest](https://community.home-assistant.io/t/solved-parsing-a-json-value-from-an-existing-entity-in-a-template-sensor/20490/17) - Used to gather solar production from SolarEdge

## Devices

### Climate

- [EcoBee3 Thermostat](https://www.amazon.com/dp/B00ZIRV39M) - Smart Thermostat with [extra sensors](https://www.amazon.com/dp/B00NXRYOIQ/)

### Lighting

- GE Z-Wave Light Switch (12722) x5
- [GE Z-Wave Plus Light Switch (14291)](https://www.amazon.com/dp/B01M1AHC3R) x4
- GE Z-Wave Dimmer (12724) x2
- [GE Z-Wave Plus Dimmer (14294)](https://www.amazon.com/dp/B006LQFHN2) x2
- [Aeotec Z-Wave Micro Dimmer](https://www.amazon.com/dp/B00IRI1CEK) x2
  - Hard-wired into lamps with local control using a [touch sensor](https://www.adafruit.com/product/1374) on the metal frame of a lamp
- [Philips Hue White Ambiance](https://www.amazon.com/gp/product/B0753H5GKN/) x4

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

- [Amazon Echo Dot](https://www.amazon.com/dp/B01DFKC2SO)
- [Sony Bravia TV](https://www.amazon.com/dp/B01MZF81NS/)
- [TCL Roku TV](https://www.bestbuy.com/site/tcl-55-class-54-6-diag--led-2160p-smart-4k-ultra-hd-tv-with-high-dynamic-range-roku-tv/5878705.p?skuId=5878705)
- [nVidia Shield](https://www.amazon.com/dp/B01N1NT9Y6/) x2
- [ChromeCast](https://www.google.com/chromecast/)
- [Harmony Hub](https://www.amazon.com/gp/product/B00BQ5RYI4/) x3
- [Plex](https://plex.tv)
  - [Plex for Android TV](https://www.plex.tv/apps/streaming-devices/android-tv/)
  - [Plex for Roku TV](https://www.plex.tv/blog/roku-live-tv/)
  - [Plex for Windows](https://www.plex.tv/apps/computer/windows/)

### Network

- [Ubiquiti Unifi Security Gateway](https://www.amazon.com/dp/B00LV8YZLK)
- [Ubiquiti Unifi 802.11ac Pro](https://www.amazon.com/dp/B015PRO512)
- [Aeon Labs Z Wave Stick (GEN 5)](https://www.amazon.com/dp/B00X0AWA6E)
- [Elelabs ZigBee USB adapter](https://www.tindie.com/products/Elelabs/elelabs-zigbee-usb-adapter/)

### Security

- [Schlage Connect Lock](https://www.amazon.com/gp/product/B00OV49YXU) - Z-Wave controllable lock. Nice to give temp codes for guests or when you forget the keys

## Automations

- See automation folder and automation blocks within packages

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
