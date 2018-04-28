'use strict';

class ArmstrongNumber {
    static validate(number) {
        let sum = number
            .toString()
            .split('')
            .map(elem => parseInt(elem))
            .reduce((total, elem, indx, arry) => total += Math.pow(elem, arry.length), 0);

        return sum === number;
    }
}

module.exports = ArmstrongNumber;


// console.log(ArmstrongNumber.validate(5));
// console.log(ArmstrongNumber.validate(10));
// console.log(ArmstrongNumber.validate(9926315));
// console.log(ArmstrongNumber.validate(9474));
// console.log(ArmstrongNumber.validate(153));
// console.log(ArmstrongNumber.validate(154));