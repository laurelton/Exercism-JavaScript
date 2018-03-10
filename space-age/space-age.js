'use strict';

class SpaceAge {
    constructor(seconds) {
        this._seconds = seconds;
    }

    get seconds() {
        return this._seconds;
    }

    onEarth() {
        return Math.round((this._seconds / 31557600) * 100) / 100;
    }

    onMercury() {}

    onVenus() {}

    onMars() {}

    onJupiter() {}

    onSaturn() {}

    onUranus() {}

    onNeptune() {}
}

module.exports = SpaceAge;