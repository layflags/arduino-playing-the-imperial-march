/**
 * Playing The Imperial March on an Arduino UNO with a piezo connected to PIN ~3
 *
 * data stolen from:
 * http://processors.wiki.ti.com/index.php/Playing_The_Imperial_March
 */

import {Board, Piezo} from 'johnny-five'

// define frequencies
const [f, gS, a, aS, b, cH, cSH, dH, dSH, eH, fH, fSH, gH, gSH, aH] =
  [349, 415, 440, 455, 466, 523, 554, 587, 622, 659, 698, 740, 784, 830, 880]

// define song
const song = [
  [a, 500], [a, 500], [a, 500], [f, 350], [cH, 150], [a, 500],
  [f, 350], [cH, 150], [a, 650], [null, 150], [eH, 500], [eH, 500],
  [eH, 500], [fH, 350], [cH, 150], [gS, 500], [f, 350], [cH, 150],
  [a, 650], [null, 150], [aH, 500], [a, 300], [a, 150], [aH, 400],
  [gSH, 200], [gH, 200], [fSH, 125], [fH, 125], [fSH, 250], [null, 150],
  [aS, 250], [dSH, 400], [dH, 200], [cSH, 200], [cH, 125], [b, 125],
  [cH, 250], [null, 150], [f, 125], [gS, 500], [f, 375], [a, 125],
  [cH, 500], [a, 375], [cH, 125], [eH, 650], [aH, 500], [a, 300],
  [a, 150], [aH, 400], [gSH, 200], [gH, 200], [fSH, 125], [fH, 125],
  [fSH, 250], [null, 150], [aS, 250], [dSH, 400], [dH, 200], [cSH, 200],
  [cH, 125], [b, 125], [cH, 250], [null, 150], [f, 250], [gS, 500],
  [f, 375], [cH, 125], [a, 500], [f, 375], [cH, 125], [a, 650]
]
/* add a short break after each note */
.reduce((list, note) => list.concat([note, [null, 20]]), [])

new Board({repl: false}).on('ready', () => {
  new Piezo(3).play({song, tempo: 100000}, process.exit)
})

