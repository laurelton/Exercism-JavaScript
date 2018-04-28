'use strict';

class Bob {
    hey(statement) {
        statement = statement.trim();
        if (statement.length === 0) {
            return 'Fine. Be that way!';
        }

        let i = statement.length - 1;
        if (this.isYelling(statement) && statement[i] === '?') {
            return 'Calm down, I know what I\'m doing!';
        }

        if (this.isQuestion(statement)) {
            return 'Sure.';
        }

        if (this.isYelling(statement)) {
            return 'Whoa, chill out!';
        }


        return 'Whatever.';
    }

    isYelling(statement) {
        let characters = statement.split('');
        let containsLowerCase = characters.some(char => char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123);
        let containsUpperCase = characters.some(char => char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91);
        
        return containsUpperCase && !containsLowerCase;
    }

    isQuestion(statement) {
        return statement[statement.length - 1] === '?';
    }
}

module.exports = Bob;