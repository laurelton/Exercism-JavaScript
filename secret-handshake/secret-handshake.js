'use strict';

class SecretHandshake {
    constructor(code) {
        if (Number.isNaN(parseInt(code))) {
            throw new Error('Handshake must be a number');
        }

        this._code = code;
    }

    commands() {
        let digits = [];
        for (let pow = 4; pow >= 0; pow--) {
            let n = 2 ** pow;
            if (this._code >= n) {
                this._code -= n;
                digits.push(1);
            } else {
                digits.push(0);
            }
        }

        return this.commandsToText(digits);
    }

    commandsToText(digits) {
        let commands = ['reverse', 'jump', 'close your eyes', 'double blink', 'wink'];

        let translation = digits
            .slice(1)
            .map((number, index) => number === 1 ? commands[index + 1] : '')
            .filter(elem => elem !== '');

        if (digits[0] === 0) {
            translation.reverse();
        }

        return translation;
    }
}

module.exports = SecretHandshake;