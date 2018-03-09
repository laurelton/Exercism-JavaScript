class Cipher {
    constructor(key='defaultkey') {
        let matches = key.match(/[A-Z0-9]/);
        
        if (key.length == 0 || (matches != null && matches.length > 0)) {
            throw new Error('Bad key');
        }

        if (key == 'defaultkey') {
            key = this.generateKey();
        }

        this._key = key;
    }

    get key() {
        return this._key;
    }

    generateKey() {
        let key = '';
        for (let i = 0; i  < 100; i++) {
            let code = Math.floor(Math.random() * 26) + 97
            key += String.fromCharCode(code);
        }

        return key;
    }

    encode(input) {
        let output = '';
        let letters = input.split('');
        let keyPosition = this._key.split('');

        for (let i = 0; i < letters.length; i++) {
            let offset = (keyPosition[i % keyPosition.length].charCodeAt(0) - 'a'.charCodeAt(0)) % 26 ;
            let asciiCode = letters[i].charCodeAt(0) + offset;
            if (asciiCode > 122) {
                asciiCode -= 26;
            }
            let letter = String.fromCharCode(asciiCode);
            output += letter;
        }

        return output;
    }

    decode(input) {
        let output = '';
        let letters = input.split('');
        let keyPosition = this._key.split('');

        for (let i = 0; i < letters.length; i++) {
            let offset = ('a'.charCodeAt(0) - keyPosition[i % keyPosition.length].charCodeAt(0)) % 26;
            let asciiCode = letters[i].charCodeAt(0) + offset;
            if (asciiCode < 97) {
                asciiCode += 26;
            }
            let letter = String.fromCharCode(asciiCode);
            output += letter;
        }

        return output;
    }
}


module.exports = Cipher;