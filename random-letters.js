;(function() {
    let strictLetters = '';
    for (let i = 'а'.charCodeAt(); i <= 'я'.charCodeAt(); i++) {
        strictLetters += String.fromCharCode(i);
    }

    const shift = 5;

    let codedLetters = strictLetters.substr(shift) + strictLetters.substr(0, shift);

    const text = document.getElementById('source-letters');
    const result = document.getElementById('result-letters');
    const outputStrict = document.getElementById('random-letters-strict');
    const outputShifted = document.getElementById('random-letters-shifted');

    outputStrict.innerText = strictLetters.split('').join(' ');
    outputShifted.innerText = codedLetters.split('').join(' ');

    function getCodedString(str) {
        const phrases = str.split('\n');
        return phrases.map((phrase) => {
            return phrase.split(' ').map((word) => {
                return word.split('').map((char) => {
                    const index = codedLetters.indexOf(char.toLowerCase());
                    return index >= 0 ? strictLetters[index] : '?';
                }).join('');
            }).join(' ');
        }).join('<br>');
    }



    text.addEventListener('input', function () {
        const code = getCodedString(this.value);
        result.innerHTML = code;
    });
})();