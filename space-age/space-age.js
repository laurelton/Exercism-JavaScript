'use strict';

class SpaceAge {
    constructor(seconds) {
        this._seconds = seconds;
    }

    get seconds() {
        return this._seconds;
    }

    get earthYear() {
        return 31557600;
    }

    onEarth() {
        return Math.round((this._seconds / 31557600) * 100) / 100;
    }

    onMercury() {
        return Math.round((this.onEarth() / 0.2408467) * 100) / 100;
    }

    onVenus() {
        return Math.round((this.onEarth() / 0.61519726) * 100) / 100;
        // return this.onEarth() / 0.61519726;
    }

    onMars() {
        return Math.round((this.onEarth() / 1.8808158) * 100) / 100;}

    onJupiter() {
        return Math.round((this.onEarth() / 11.862615) * 100) / 100;}

    onSaturn() {
        return Math.round((this.onEarth() / 29.447498) * 100) / 100;}

    onUranus() {
        return Math.round((this.onEarth() / 84.016846) * 100) / 100;}

    onNeptune() {
        return Math.round((this.onEarth() / 164.79132) * 100) / 100;}
}

module.exports = SpaceAge;