# [![Build Status](https://travis-ci.org/zanix/home-assistant-config.svg?branch=master)](https://travis-ci.org/zanix/home-assistant-config) Home-Assistant Config by [@zanixmechanix](https://twitter.com/zanixmechanix)

[Home Assistant](https://home-assistant.io) configuration files (YAMLs)

This is my Home Assistant Configuration created for use with [Hassbian](https://home-assistant.io/docs/installation/hassbian/).
Home Assistant runs on my [Raspberry Pi 3](http://amzn.to/2e3DOBY) with [Aeon Labs Z Wave Stick (GEN 5)](https://www.amazon.com/dp/B00X0AWA6E). The main SD Card is 32GB. I should order another and use one for backup.

If you want to back up your own Home Assistant configuration to GitHub, follow [this guide](https://home-assistant.io/docs/ecosystem/backup/backup_github/).

Software on the Pi : [Home Assistant](https://home-assistant.io),
SSL via [Let's Encrypt](https://letsencrypt.org/) - Free SSL!

## Devices
* GE Z-Wave [light switches](https://www.amazon.com/dp/B0035YRCR2) and [dimmer switches](https://www.amazon.com/dp/B006LQFHN2)
* [Aeotec Z-Wave Micro Dimmer](https://www.amazon.com/dp/B00IRI1CEK) - Hard-wired into lamps with local control using a [touch sensor](https://www.adafruit.com/product/1374) on the metal frame of the lamp
* Z-Wave Door/Window sensors
* [EcoBee3 Thermostat](https://www.amazon.com/dp/B00ZIRV39M) - Smart Thermostat
* [Amazon Echo Dot](https://www.amazon.com/dp/B01DFKC2SO)
* [Amazon Dash Buttons](https://www.amazon.com/dp/B01F6ETRNA)
* [Rachio Sprinkler Controller](https://www.amazon.com/dp/B01D1NMLJU) - Smart Sprinkler controller
* [Plex](https://plex.tv): [OpenPHT](https://github.com/RasPlex/OpenPHT/releases) for PC, [RasPlex](http://www.rasplex.com) for Raspberry Pi, and [Plex for Android TV](https://www.plex.tv/apps/streaming-devices/android-tv/)
* [ChromeCast](https://www.google.com/chromecast/)
* Emulated Hue exposes all Switch, Group, input_boolean, script, and scene information to Alexa for voice control
* [Aeon Labs AEDSB09104ZWUS Aeotec Z-Wave Smart Energy Monitor Meter](https://www.amazon.com/dp/B00DIBSKFU) to measure energy usage in the home. (You should use the [Gen5](https://www.amazon.com/dp/B00XD8WZX6) version if you can afford it)
* Track Solar power generation from [PVOutput](https://pvoutput.org) (needs work)

## Automations
* Auto Heal ZWave at 2:30am
* Turn on some lights and switches when we get home
* Turn off all lights when we leave home
* Turn on front outdoor Lights at Sunset, turn off at 10:35pm
* Dim living room lights when watching TV or a Movie after sunset
* Turn off bedroom TV after 5 minutes of inactivity (not working)
* Watch and alert on low battery for some devices
* Watch and alert on Home Assistant's Disk usage. Get alerts before Pi runs out of disk space.

## Things to Buy
* [433Mhz Transmitter and receiver](https://www.amazon.com/dp/B00M2CUALS) - For 433Mhz based devices
* [Amplifiers](https://www.amazon.com/dp/B006AMF2R8) - Power speakers for Dots, Chromecasts or other devices.
* [Garadget](https://www.amazon.com/dp/B01KUZ2JPS) - Garage Door opener/sensor
* LED RGB [Wifi Controller](https://www.amazon.com/dp/B01JZ2SI6Q) flux_led compatible with [LED Strip kits](https://www.amazon.com/dp/B01CUILC3I) - ~100 Feet
* [SkyBell HD](https://www.amazon.com/dp/B01IAB9ZME) or [Ring Pro](https://www.amazon.com/dp/B01DM6BDA4)
* [Withings](https://www.amazon.com/dp/B01F3LJ2RW) - Smart Weight scale

## Todo List
See the [issue queue](https://github.com/zanix/home-assistant-config/issues).


**All files are edited with [Sublime Text](https://www.sublimetext.com).**
