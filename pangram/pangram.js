'use strict';

class Pangram {
    constructor(sentence) {
        this._sentence = sentence.toLowerCase();
        this._letters = Array.from(Array(26).keys()).map((elem, indx) => { return String.fromCharCode(97 + indx); });
    }

    get letters() {        
        return this._letters;
    }

    isPangram() {
        return this._letters.every(lttr => this._sentence.match(lttr) !== null);
    }
}

module.exports = Pangram;