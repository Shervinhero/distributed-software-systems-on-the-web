function concatenateStrings(strings, delimiter) {
    if (typeof delimiter === 'undefined') {
        delimiter = ', ';
    }

    var result = '';

    for (var i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < strings.length - 1) {
            result += delimiter;
        }
    }

    return result;
}

var words = ['Hello', 'world', 'of', 'JavaScript'];
var sentence = concatenateStrings(words);

console.log(sentence);
---------------------------------------------------------------------
    ES6 Version:
    const concatenateStrings = (strings, delimiter = ', ') => {
    let result = '';

    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < strings.length - 1) {
            result += delimiter;
        }
    }

    return result;
};

const words = ['Hello', 'world', 'of', 'JavaScript'];
const sentence = concatenateStrings(words);

console.log(sentence);
