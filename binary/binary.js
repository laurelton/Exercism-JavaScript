'use strict';

class Binary {
    constructor(binary) {
        this._digits = binary.split('');
    }

    toDecimal() {
        let val = 0;
        let digits = this._digits.map(elem => { return parseInt(elem); });
        if ( !digits.every(elem => this.isValidBinaryDigit(elem)) ) {
            return val;
        }
        let len = digits.length;
        for ( let i = 0; i < len; i++ ) {
            let digit = digits.pop();
            let max = Math.pow(2, i);
            val += digit * max;
        }

        return val;
    }

    isValidBinaryDigit(number) {
        if (!Number.isInteger(number)) {
            return false;
        }

        const value = parseInt(number);
        if ( value == 0 || value == 1 ) {
            return true;
        }

        return false;
    }
}

module.exports = Binary;