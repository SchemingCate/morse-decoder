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
    let oneChar = '';
    let decodedCharsArr = [];

    for (let i = 0; i < expr.length; i++) {
        oneChar += expr[i];
        if (oneChar.length === 10) {
            if (oneChar === '**********') {
                decodedCharsArr.push(' ');
            } else {
                let encodedChar = 
                    oneChar
                        .replaceAll('11', '-')
                        .replaceAll('10', '.')
                        .replaceAll('0', ' ')
                        .trimStart();
                decodedCharsArr.push(MORSE_TABLE[encodedChar]);
            }
            oneChar = '';
        }
    }

    return decodedCharsArr.join('');
}

module.exports = {
    decode
}