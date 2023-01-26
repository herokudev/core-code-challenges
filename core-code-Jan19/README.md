# core-code-Jan19

JavaScript practice

#Week 07

##Exercise 01: Counting duplicates
[Descripcion](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript)

```javascript
function duplicateCount(text) {
  let duplicates = 0;
  text = text.toLowerCase(); // todo minuscula
  for (let i = 0; i < text.length; i++) {
    if (text.indexOf(text[i]) !== text.lastIndexOf(text[i])) {
      duplicates++;
      text = text.replace(new RegExp(text[i], 'g'), '');
      i = i - 1;
    }
  }
  return duplicates;
}
```

##Exercise 02: Encrypt this!
[Descripcion](https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript)

```javascript
const encryptWord = function (str) {
  let result = '';
  if (str.length == 1) return str.charCodeAt(str[0]).toString();
  else if (str.length == 2) {
    return str.charCodeAt(str[0]) + str[1];
  } else {
    const firstChar = str.charCodeAt(str[0]);
    const secondChar = str[str.length - 1];
    const lastChar = str[1];
    result =
      firstChar + secondChar + str.substring(2, str.length - 1) + lastChar;
  }
  return result;
};

var encryptThis = function (text) {
  const words = text.split(' ');
  encrypted = '';
  for (const w of words) {
    if (encrypted == '') {
      encrypted = encryptWord(w);
    } else {
      encrypted = encrypted + ' ' + encryptWord(w);
    }
  }
  return encrypted;
};
```

##Exercise 03: Valid parentheses
[Descripcion](https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript)

```javascript
function validParentheses(parens) {
  if (parens.length == 0) return true;
  else {
    let open = 0;
    let close = 0;
    const test = parens.split('');
    console.log(test);
    let i = 0;
    while (close <= open && i < test.length) {
      if (test[i] == '(') open++;
      else if (test[i] == ')') close++;
      console.log(`${open} --> ${close}`);
      i++;
      console.log(i);
    }
    return open == close;
  }
}
```

##Exercise 04: Convert string to camel case
[Descripcion](https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript)

```javascript
function toCamelCase(str) {
  result = '';
  if (str == '') return str;
  else {
    const myText = str.replaceAll('-', ' ').replaceAll('_', ' ');
    console.log(myText);
    const words = myText.split(' ');
    console.log(words);
    let i = 0;
    for (let w of words) {
      let first = '';
      if (i == 0) {
        result = result + w;
      } else {
        result = result + w[0].toUpperCase() + w.substring(1, w.length);
      }
      i++;
    }
    return result;
  }
}
```
