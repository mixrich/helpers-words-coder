;(function() {
    const dic = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

        function getCodedString(str) {
            const phrases = str.split('\n');
            return phrases.map((phrase) => {
                return phrase.split(' ').map((word) => {
                    return word.split('').map((char, index) => dic.indexOf(char.toLowerCase()) + 1).join(' ');
                }).join('&nbsp;&mdash;&nbsp;');
            }).join('<br>');
        }

        source.addEventListener('input', function () {
            const code = getCodedString(this.value);
            result.innerHTML = code;
        });
})();