# [![Build Status](https://travis-ci.org/zanix/home-assistant-config.svg?branch=master)](https://travis-ci.org/zanix/home-assistant-config) Home-Assistant Config by [@zanixmechanix](https://twitter.com/zanixmechanix)

[Home Assistant](https://home-assistant.io) configuration files (YAMLs)

This is my Home Assistant Configuration created for use with [Hassbian](https://home-assistant.io/docs/installation/hassbian/).
Home Assistant runs on my [Raspberry Pi 3](http://amzn.to/2e3DOBY) with [Aeon Labs Z Wave Stick (GEN 5)](https://www.amazon.com/dp/B00X0AWA6E). The main SD Card is 32GB. I should order another and use one for backup.

Software on the Pi : [Home Assistant](https://home-assistant.io),
SSL via [Let's Encrypt](https://letsencrypt.org/) - Free SSL!

## Devices
* GE [light switches](https://www.amazon.com/dp/B0035YRCR2) and [dimmer switches](https://www.amazon.com/dp/B006LQFHN2)
* [Aeotec Z-Wave Micro Dimmer](https://www.amazon.com/dp/B00IRI1CEK) - Hard-wired into lamps with local control using a [touch sensor](https://www.adafruit.com/product/1374) on the metal frame of the lamp
* [EcoBee3 Thermostat](https://www.amazon.com/dp/B00ZIRV39M) - Smart Thermostat
* [Amazon Echo Dot](https://www.amazon.com/dp/B01DFKC2SO)
* [Amazon Dash Buttons](https://www.amazon.com/dp/B01F6ETRNA)
* [Rachio Sprinkler Controller](https://www.amazon.com/dp/B01D1NMLJU) - Smart Sprinkler controller
* [ChromeCast](https://www.google.com/chromecast/)
* Emulated Hue pushes all Switch, Group, input_boolean, script, and scene information to Alexa for First Class Control!
* [Aeon Labs AEDSB09104ZWUS Aeotec Z-Wave Smart Energy Monitor Meter](https://www.amazon.com/dp/B00DIBSKFU) to measure energy usage in the home. (You should use the [Gen5](https://www.amazon.com/dp/B00XD8WZX6) version if you can afford it)

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
* [Amplifiers](https://www.amazon.com/dp/B006AMF2R8) - These are cheap but effective for Dots, Chromecasts or other speakers.
* [Garadget](https://www.amazon.com/dp/B01KUZ2JPS) - Garage Door opener/sensor
* [SkyBell HD](https://www.amazon.com/dp/B01IAB9ZME) or [Ring Pro](https://www.amazon.com/dp/B01DM6BDA4)
* [Withings](https://www.amazon.com/dp/B01F3LJ2RW) - Smart Weight scale

## Todo List
See the [issue queue](https://github.com/zanix/home-assistant-config/issues).


**All files are edited with [Sublime Text](https://www.sublimetext.com).**
