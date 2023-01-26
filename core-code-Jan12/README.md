# core-code-Jan12

JavaScript practice

#Week 07

##Exercise 01: Convert a String to a Number!
[Descripcion](https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript)

```javascript
const stringToNumber = function (str) {
  // put your code here
  return parseInt(str);
};
```

##Exercise 02: Convert number to reversed array of digits
[Descripcion](https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript)

```javascript
function digitize(n) {
  const arr = String(n)
    .split('')
    .map((str) => Number(str));
  return arr.reverse();
}
```

##Exercise 03: Truthy and Falsy
[Descripcion](https://www.codewars.com/kata/595c2988d946a13298000157/train/javascript)

```javascript
const truthy = [true, {}, [], 45, -8];
const falsy = [false, 0, '', null, undefined];
```

##Exercise 04: Basic data types--Array
[Descripcion](https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript)

```javascript
function getLength(arr) {
  //return length of arr
  return arr.length;
}
function getFirst(arr) {
  //return the first element of arr
  return arr[0];
}
function getLast(arr) {
  //return the last element of arr
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  arr.push(el);
  return arr;
}
function popElement(arr) {
  //pop an element from arr
  arr.pop();
  return arr;
}
```
