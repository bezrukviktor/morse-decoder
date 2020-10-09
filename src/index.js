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
  let resultArr = [];
  for (let i = 0; i < expr.length; i += 10) {
    resultArr.push(convertToWords(expr.slice(i, i+10)))
  }
  return resultArr.join('');
}

function convertToWords(val) {
  if (val === '**********') {
    return ' ';
  } else {
    let mosrseCode = '';
    for (let i = 0; i < 10; i += 2) {
      switch(val.slice(i, i+2)) {
        case '11':
        mosrseCode += '-';
        break;
        case '10':
        mosrseCode += '.';
        break;
      }
    }
    return MORSE_TABLE[mosrseCode];
  }
}

module.exports = {
    decode
}