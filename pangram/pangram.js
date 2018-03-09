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
        // return this._letters.every(elem => {this._sentence.match(new RegExp(elem))});
        for (let lttr in this._letters) {
            let regEx = new RegExp(this._letters[lttr]);
            let match = this._sentence.match(regEx);

            if (match == null) {
                return false;
            }
        }

        return true;
    }
}

module.exports = Pangram;