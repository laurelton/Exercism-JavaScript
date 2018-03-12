'use strict';

class PrimeFactors {
    static for(number) {
        let factors = [];

        for (let i = 2; i <= number; ){
            if ( number % i == 0) {
                number = number / i;
                factors.push(i);
            } else {
                do {
                i += i > 2 ? 2 : 1;
                } while ( factors.some(elem => i % elem == 0) );
            }
        }

        return factors;
    }
}

module.exports = PrimeFactors;