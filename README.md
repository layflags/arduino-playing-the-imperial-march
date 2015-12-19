# Arduino playing The Imperial March

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

While playing around with a piezo on my Arduino UNO I wanted it to play a nice song for me. So I googled the notes for [The Imperial March](https://en.wikipedia.org/wiki/The_Imperial_March) and finally found some useful data [here](http://processors.wiki.ti.com/index.php/Playing_The_Imperial_March). Afer quickly hacking some JavaScript using the awesome [Johnny-Five](http://johnny-five.io/) library I got it working :-)

## What do you need?

* [Arduino UNO](https://www.arduino.cc/en/Main/ArduinoBoardUno) with [Firmata firmware](https://github.com/firmata/arduino) installed and connected to your computer via USB
* A piezo connected to GND and PIN ~3 on your Arduino board
* [Node.js](https://nodejs.org/en/) installed on your computer

## How to let it run?

* clone this repository: `git clone git@github.com:layflags/arduino-playing-the-imperial-march.git`
* go to project folder: `cd arduino-playing-the-imperial-march`
* install required software: `npm install`
* start it: `npm start`

## License

[MIT](LICENSE)

