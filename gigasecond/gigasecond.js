'use strict';

class Gigasecond {
    constructor(date) {
        this._start = new Date(date);
        date.setSeconds(date.getSeconds() + 1000000000);
        this._date = date;
    }

    date() {
        return this._date;
    }
}

module.exports = Gigasecond;

console.log(1e9);