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
    let decTable = {};
    let number = '';
    let j=0;
    for (var key in MORSE_TABLE) {
        // этот код будет вызван для каждого свойства объекта
        // key - имя свойства (локальная переменная объявленная посредством var)
      for (let i = 0; i < key.length; i++){
          if (key[i] === "."){
            number += 10;
          } else {
            number += 11;
          }
        }
       number = number.padStart(10, '0');
        decTable[number] = MORSE_TABLE[key];


        number = '';

    } 
decTable['**********'] = ' ';
// выше вывели объект со свойствами = коду и значениями = символу

    
    
    //let numberOfLetters = expr.length/10;
    //return numberOfLetters;
    
    let text ='';
    let letterCode='';
    for (let i = 9; i< expr.length; i = i + 10) {
        letterCode = expr.substr(i - 9 , 10);
        text += decTable[letterCode];
    }
return text;
}


module.exports = {
    decode
}