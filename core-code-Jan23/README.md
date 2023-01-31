# core-code-Jan23

JavaScript practice

#Week 09

##Exercise 01: "this" is a problem
[Descripcion](https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript)

```javascript
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  return {
    firstName: this.firstName,
    lastName: this.lastName,
    name: this.firstName + ' ' + this.lastName,
  };
}
```

##Exercise 02: "Thinkful - List and Loop Drills: Lists of lists"
[Descripcion](https://www.codewars.com/kata/586e1d458cb711f0a800033b/train/javascript)

```javascript
function processData(data) {
  let numbers = [];
  for (let sl of data) {
    numbers.push(sl[0] - sl[1]);
  }
  const multValues = numbers.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );

  return multValues;
}
```

##Exercise 03: Stop gninnipS My sdroW!
[Descripcion](https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript)

```javascript
function testWord(str) {
  if (str.length >= 5) {
    return str.split('').reverse().join('');
  } else {
    return str;
  }
}

function spinWords(string) {
  let result = '';
  const words = string.split(' ');
  console.log(words);
  for (let w of words) {
    if (result == '') {
      result = testWord(w);
    } else {
      result = result + ' ' + testWord(w);
    }
  }
  return result;
}
```
