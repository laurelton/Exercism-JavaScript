//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (year) {
    this._year = year;
};

Year.prototype.isLeap = function () {
    let divisibleBy4 = this._year % 4 == 0;
    let divisibleBy100 = this._year % 100 == 0;
    let divisibleBy400 = this._year % 400 == 0;

    return (divisibleBy4 && !divisibleBy100) || divisibleBy400;;
};

module.exports = Year;
