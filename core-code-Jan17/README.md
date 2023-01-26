# core-code-Jan17

JavaScript practice

#Week 07

##Exercise 01: Even or odd
[Descripcion](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript)

```javascript
function evenOrOdd(number) {
  return number % 2 ? 'Odd' : 'Even';
}
```

##Exercise 02: A wolf in sheep's clothing
[Descripcion](https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript)

```javascript
function warnTheSheep(queue) {
  let fisrtIndex = 0;
  word = 'wolf';
  fisrtIndex = queue.indexOf(word);
  if (fisrtIndex == queue.length - 1)
    return (msg = 'Pls go away and stop eating my sheep');
  else
    return (msg = `Oi! Sheep number ${
      queue.length - 1 - fisrtIndex
    }! You are about to be eaten by a wolf!`);
}
```

##Exercise 03: Decode the morse code
[Descripcion](https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript)

```javascript
function decode_mo_char(str) {
  switch (str) {
    case '.-':
      return 'A';
      break;
    case '-...':
      return 'B';
      break;
    case '-.-.':
      return 'C';
      break;
    case '-..':
      return 'D';
      break;
    case '.':
      return 'E';
      break;
    case '..-.':
      return 'F';
      break;
    case '--.':
      return 'G';
      break;
    case '....':
      return 'H';
      break;
    case '..':
      return 'I';
      break;
    case '.---':
      return 'J';
      break;
    case '-.-':
      return 'K';
      break;
    case '.-..':
      return 'L';
      break;
    case '--':
      return 'M';
      break;
    case '-.':
      return 'N';
      break;
    case '---':
      return 'O';
      break;
    case '.--.':
      return 'P';
      break;
    case '--.-':
      return 'Q';
      break;
    case '.-.':
      return 'R';
      break;
    case '...':
      return 'S';
      break;
    case '-':
      return 'T';
      break;
    case '..-':
      return 'U';
      break;
    case '...-':
      return 'V';
      break;
    case '.--':
      return 'W';
      break;
    case '-..-':
      return 'X';
      break;
    case '-.--':
      return 'Y';
      break;
    case '--..':
      return 'Z';
      break;
    case '...---...':
      return 'SOS';
      break;
    case '-.-.--':
      return '!';
      break;
  }
}

function decode_mo_word(strWord) {
  decode = '';
  letters = strWord.split(' ');
  letters.forEach((c) => {
    decode = decode + decode_mo_char(c);
  });
  return decode;
}

function decodeMorse(morseCode) {
  msg = '';
  words = morseCode.trim().split('   ');
  words.forEach((w) => {
    if (msg === '') {
      msg = msg + decode_mo_word(w);
    } else {
      msg = msg + ' ' + decode_mo_word(w);
    }
  });
  return msg;
}
```
