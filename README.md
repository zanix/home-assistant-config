# [![Build Status](https://travis-ci.org/zanix/home-assistant-config.svg?branch=master)](https://travis-ci.org/zanix/home-assistant-config) Home-Assistant Config by [@zanixmechanix](https://twitter.com/zanixmechanix)

[Home Assistant](https://home-assistant.io) configuration files (YAMLs)

This is my Home Assistant Configuration created for use with [Hass.io](https://home-assistant.io/hassio/).
Home Assistant runs on my [Raspberry Pi 3](http://amzn.to/2e3DOBY) with [Aeon Labs Z Wave Stick (GEN 5)](https://www.amazon.com/dp/B00X0AWA6E). The main SD Card is 32GB.

If you want to back up your own Home Assistant configuration to GitHub, follow [this guide](https://home-assistant.io/docs/ecosystem/backup/backup_github/).

## Software

* [Hass.io](https://home-assistant.io/hassio/) by [Home Assistant](https://home-assistant.io)

### Hass.io Add-ons

* [Check HomeAssistant config](https://home-assistant.io/addons/check_config/)
* [MariaDB](https://home-assistant.io/addons/mariadb/)

### Custom UI Elements

* [Custom UI elements for Home Assistant](https://github.com/andrey-git/home-assistant-custom-ui), updates via `update.sh`

### Custom Components

* [Attributes as Sensors](https://github.com/pilotak/HomeAssistant-CustomComponents) - Allows the creation of a sensor that breaks out attribute of defined entities.

## Devices

* [Ubiquiti Unifi Security Gateway](https://www.amazon.com/dp/B00LV8YZLK) - Network gateway and router. Used for internet access and as a presence tracker for many devices.
* [Ubiquiti Unifi 802.11ac Pro](https://www.amazon.com/dp/B015PRO512) - Powerful WiFi that manages to cover my entire house with decent signal and speeds.
* GE Z-Wave [light switches](https://www.amazon.com/dp/B0035YRCR2) and [dimmer switches](https://www.amazon.com/dp/B006LQFHN2) - Controls lighting
* [Aeotec Z-Wave Micro Dimmer](https://www.amazon.com/dp/B00IRI1CEK) - Hard-wired into lamps with local control using a [touch sensor](https://www.adafruit.com/product/1374) on the metal frame of the lamp
* Z-Wave Door/Window sensors
* [EcoBee3 Thermostat](https://www.amazon.com/dp/B00ZIRV39M) - Smart Thermostat with [extra sensors](https://www.amazon.com/dp/B00NXRYOIQ/)
* [Google Home Mini](https://store.google.com/us/product/google_home_mini) - Voice assistant
* [Amazon Echo Dot](https://www.amazon.com/dp/B01DFKC2SO) - Voice assistant
* [Rachio Sprinkler Controller](https://www.amazon.com/dp/B01D1NMLJU) - Smart Sprinkler controller
* [Sony Bravia TV](https://www.amazon.com/dp/B01MZF81NS/) - Runs Android TV, poorly
* [TCL Roku TV](https://www.bestbuy.com/site/tcl-55-class-54-6-diag--led-2160p-smart-4k-ultra-hd-tv-with-high-dynamic-range-roku-tv/5878705.p?skuId=5878705) - Runs Roku TV, quite well
* [nVidia Shield](https://www.amazon.com/dp/B01N1NT9Y6/) - Android TV device
* Other, non-smart TVs
* [Plex](https://plex.tv) - Watching media and streams.
  * [Plex for Android TV](https://www.plex.tv/apps/streaming-devices/android-tv/)
  * [Plex for Windows](https://www.plex.tv/apps/computer/windows/)
  * [RasPlex for Raspberry Pi](http://www.rasplex.com)
* [ChromeCast](https://www.google.com/chromecast/)
* [Schlage Connect Lock](https://www.amazon.com/gp/product/B00OV49YXU) - Z-Wave controllable lock. Nice to give temp codes for guests or when you forget the keys.
* [OpenGarage](https://opengarage.io) - Opens, closes, and reads the status of my garage door as well detecting the presense of my car.

## Retired

* __[Does not work with Solar]__ [Aeon Labs AEDSB09104ZWUS Aeotec Z-Wave Smart Energy Monitor Meter](https://www.amazon.com/dp/B00DIBSKFU) to measure energy usage in the home.
* __[Does not read backlog]__ Track Solar power generation from [PVOutput](https://pvoutput.org)

## Sensors

* [Forecast.io (Darksky)](https://darksky.net)
* [Pi System Resources](https://home-assistant.io/components/sensor.systemmonitor/)
* [FedEx Packages](https://home-assistant.io/components/sensor.fedex/)
* [UPS Packages](https://home-assistant.io/components/sensor.ups/)
* [USPS Mail and Packages](https://home-assistant.io/components/sensor.usps/)

## Automations

* Auto Heal ZWave at 2:30am
* Turn on some lights and switches when we get home
* Turn off all lights when we leave home
* Turn on front outdoor Lights at Sunset, turn off at 10:32pm
* Turn off bedroom TV after 10 minutes of inactivity
* Notify when mail is out for delivery
* Notify when packages are out for delivery
* Watch and alert on low battery for some devices
* Watch and alert on Home Assistant's disk usage

## Things to Buy

* [Amazon Dash Buttons](https://www.amazon.com/dp/B01F6ETRNA)
* [433Mhz Transmitter and receiver](https://www.amazon.com/dp/B00M2CUALS) - For 433Mhz based devices
* [Amplifiers](https://www.amazon.com/dp/B006AMF2R8) - Power speakers for Dots, Chromecasts or other devices.
* LED RGB [Wifi Controller](https://www.amazon.com/dp/B01JZ2SI6Q) flux_led compatible with [LED Strip kits](https://www.amazon.com/dp/B01CUILC3I) - ~100 Feet
* [SkyBell HD](https://www.amazon.com/dp/B01IAB9ZME) or [Ring Pro](https://www.amazon.com/dp/B01DM6BDA4)
* [Withings](https://www.amazon.com/dp/B01F3LJ2RW) - Smart Weight scale

## Todo List

See the [issue queue](https://github.com/zanix/home-assistant-config/issues).

**All files are edited with [Visual Studio Code](https://code.visualstudio.com).**

**Configuration files are tested against the most stable version of Home Assistant using [Travis](https://travis-ci.org/zanix/home-assistant-config).**
