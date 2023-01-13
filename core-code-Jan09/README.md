# core-code-Jan09

JavaScript practice

#Week 07

##Exercise 01: String: substr()
[Descripcion](https://www.jshero.net/en/koans/stringsubstr.html)

```javascript
function firstWord(input) {
  let pos = input.indexOf(' ');
  return input.substr(0, pos);
}
```

##Exercise 02: String: replace()
[Descripcion](https://www.jshero.net/en/koans/replace.html)

```javascript
function normalize(input) {
  //return input.replace('-', '/').replace('-', '/');
  return input.replace(/-/g, '/');
}
```

##Exercise 03: Increment
[Descripcion](https://www.jshero.net/en/koans/increment.html)

```javascript
x has the value 7.
```

##Exercise 04: Fahrenheit
[Descripcion](https://www.jshero.net/en/koans/fahrenheit.html)

```javascript
function toFahrenheit(input) {
  return input * 1.8 + 32;
}
```

##Exercise 05: Boolean
[Descripcion](https://www.jshero.net/en/koans/bool.html)

```javascript
function nand(input1, input2) {
  if (input1 === true && input2 === true) {
    return false;
  } else {
    return true;
  }
}
```
