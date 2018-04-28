'use strict';

class RotationalCipher {
    constructor() {}

    rotate(letter, shift) {
        // console.log(letter, '=', letter.charCodeAt(0));
        // let shifted = String.fromCharCode(letter.charCodeAt(0) + shift);
        // console.log('Raw Shifted', shifted);
        let modShift = ((letter.charCodeAt(0) + shift) % 97) % 26 + 97;
        // console.log('Modified Shift', modShift);
        // console.log('Mod letter', String.fromCharCode(modShift));
        return String.fromCharCode(modShift);
    }
}

module.exports = RotationalCipher;