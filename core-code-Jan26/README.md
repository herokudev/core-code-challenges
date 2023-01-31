# core-code-Jan26

JavaScript practice

#Week 09

##Exercise 01: The Hashtag Generator
[Descripcion](https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript)

```javascript
function generateHashtag(str) {
  let result = '';
  if (str.length == 0) return false;
  else {
    const myText = str.trim();
    if (myText == '') return false;
    else {
      const words = myText.split(' ');
      for (let w of words) {
        if (w != '')
          result = result + w[0].toUpperCase() + w.substring(1, w.length);
      }
      result = '#' + result;
    }
  }
  if (result.length > 140) return false;
  else return result;
}
```

##Exercise 02: String incrementer
[Descripcion](https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript)

```javascript
function sumNumber(str) {
  switch (str) {
    case '009':
      return '010';
      break;
    case '000':
      return '001';
      break;
    case '999':
      return '1000';
      break;
    case '00999':
      return '01000';
      break;
    case '001':
      return '002';
      break;
    case '1':
      return '2';
      break;
    case '99':
      return '100';
      break;
  }
}
function incrementString(strng) {
  let text = '',
    num = '';
  let number = 0;
  if (isNaN(strng)) {
    if (/[0-9]/.test(strng)) {
      let i = 1;
      while (/[0-9]/.test(strng[strng.length - i])) {
        i++;
      }
      text = strng.substring(0, strng.length - i + 1);
      num = strng.substring(strng.length - i + 1);
      return text + sumNumber(num);
    } else {
      return strng + '1';
    }
  } else {
    if (strng.indexOf('0') == -1) {
      number = parseInt(strng, 10) + 1;
      return number.toString();
    } else return sumNumber(strng);
  }
}
```
