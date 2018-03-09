class DnaTranscriber {
    toRna(input) {
        let translations = {
            'G': 'C',
            'C': 'G',
            'T': 'A',
            'A': 'U'
        };

        let str = '';
        let letters = input.split('');
        for (let i = 0; i < letters.length; i++) {
            if (translations.hasOwnProperty(letters[i])) {
            str += translations[letters[i]];
            } else {
                throw new Error('Invalid input');
            }
        }        

        return str;
    }
}

module.exports = DnaTranscriber;