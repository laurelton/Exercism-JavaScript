class DnaTranscriber {
    toRna(dna) {
        let translations = {
            'G': 'C',
            'C': 'G',
            'T': 'A',
            'A': 'U'
        };

        let rna = dna.split('').reduce((str, letter) => str += translations[letter] ? translations[letter] : '', '');
        
        if (rna.length !== dna.length) {
            throw new Error('Invalid input');
        }

        return rna;
    }
}

module.exports = DnaTranscriber;