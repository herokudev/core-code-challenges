# core-code-Jan11

JavaScript practice

#Week 07

##Exercise 01: Count strings in objects
[Descripcion](https://www.codewars.com/kata/565b3542af398bfb50000003/train/javascript)

```javascript
function strCount(obj) {
  let count = 0;
  for (key in obj) {
    if (typeof obj[key] == 'string') count++;
    if (typeof obj[key] == 'object') count += strCount(obj[key]);
  }

  return count;
}
```

##Exercise 02: Extending JavaScipt Objects with first & fast
[Descripcion](https://www.codewars.com/kata/581351c40d8f13bc450008b8/train/javascript)

```javascript
Array.prototype.first = function () {
  let size = this.length;

  if (size == 0) return undefined;
  else return this[0];
};

Array.prototype.last = function () {
  let size = this.length;

  if (size == 0) return undefined;
  else return this[this.length - 1];
};
```

##Exercise 03: ObjectOriented Piracy
[Descripcion](https://www.codewars.com/kata/54fe05c4762e2e3047000add/train/javascript)

```javascript
function Ship(draft, crew) {
  let worth = 0;
  this.draft = draft;
  this.crew = crew;
  this.worth = draft - crew * 1.5;
  this.isWorthIt = function () {
    if (this.worth > 20) return true;
    else return false;
  };
}
```
