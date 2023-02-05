# core-code-Jan24

JavaScript practice

#Week 09

##Exercise 01: "this" is an other problem
[Descripcion](https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript)

```javascript
function NamedOne(first, last) {
  // -- SHOULD be changed --
  this._firstName = first;
  this._lastName = last;

  Object.defineProperties(this, {
    firstName: {
      get: function () {
        return this._firstName;
      },
      set: function (newFirstName) {
        this._firstName = newFirstName;
      },
    },
    lastName: {
      get: function () {
        return this._lastName;
      },
      set: function (newLastName) {
        this._lastName = newLastName;
      },
    },
    fullName: {
      get: function () {
        return `${this._firstName} ${this._lastName}`;
      },
      set: function (newFullName) {
        const newFullNameArray = newFullName.trim().split(' ');
        if (newFullNameArray.length == 2) {
          this._firstName = newFullNameArray[0];
          this._lastName = newFullNameArray[1];
        }
      },
    },
  });
}
```

##Exercise 02: "Who likes it?"
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

##Exercise 03: Convert string to camel case
[Descripcion](https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript)

```javascript
function toCamelCase(str) {
  let result = '';
  if (str == '') return str;
  else {
    const myText = str.replaceAll('-', ' ').replaceAll('_', ' ');
    const words = myText.split(' ');
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
