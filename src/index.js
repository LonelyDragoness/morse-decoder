const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let characterSet = {};
    let strippedLetters = [];
    let result= '';

    let oneLetter = expr.match(/.{1,10}/g);
    for (let i = 0; i< oneLetter.length; i++) {
        strippedLetters.push(parseInt(oneLetter[i], 10));
    }
    for (let i = 0; i < strippedLetters.length; i++) {
        for (let z = 0; z < strippedLetters[i].toString().match(/.{2}/g).length; z++) {
            if (oneLetter[i] === '**********') {
                characterSet[i] += ' ';
            }
            if (strippedLetters[i].toString().match(/.{2}/g)[z] === '10') {
                characterSet[i] += '.';
            } else if (strippedLetters[i].toString().match(/.{2}/g)[z] === '11') {
                characterSet[i] += '-';
            }
        }
    }
    for (let x = 0; x < Object.keys(characterSet).length; x++) {
        if (characterSet[x].replace(/undefined/, '') === ' ') {
            result += ' ';
        } else {
            result += MORSE_TABLE[characterSet[x].replace(/undefined/, '')];
        }
    }
    return result;
}

module.exports = {
    decode
};
