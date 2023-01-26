# core-code-Jan18

JavaScript practice

#Week 07

##Exercise 01: Who likes it?
[Descripcion](https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript)

```javascript
let msg = '';
function likes(names) {
  if (names.length === 0) {
    msg = 'no one likes this';
  } else if (names.length === 1) {
    msg = `${names[0]} likes this`;
  } else if (names.length === 2) {
    msg = `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    msg = `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length >= 4) {
    msg = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
  return msg;
}
```

##Exercise 02: Bit counting
[Descripcion](https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript)

```javascript
var countBits = function (n) {
  let bits = 0;
  const strN = n.toString(2);
  const arr = strN.split('');
  arr.forEach(myFunction);

  function myFunction(value) {
    if (value == '1') bits++;
  }

  return bits;
};
```

##Exercise 03: Your order, please
[Descripcion](https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript)

```javascript
function order(words) {
  let arr = words.split(' ');
  let sortedArray = [];
  for (i = 1; i <= arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[j].indexOf(i) >= 0) {
        sortedArray.push(arr[j]);
      }
    }
  }
  return sortedArray.join(' ');
}
```
