# core-code-Jan05

JavaScript practice

#Week 06

##Exercise 01: Strings
[Descripcion](https://www.jshero.net/en/koans/string.html)

```javascript
function greet(name) {
  return 'Hello ' + name + '!';
}
```

##Exercise 02: String: length
[Descripcion](https://www.jshero.net/en/koans/stringlength.html)

```javascript
function length(input) {
  return input.length;
}
```

##Exercise 03: String: toUpperCase()
[Descripcion](https://www.jshero.net/en/koans/stringupper.html)

```javascript
function toCase(input) {
  return input.toLowerCase() + '-' + input.toUpperCase();
}
```

##Exercise 04: String: charAt()
[Descripcion](https://www.jshero.net/en/koans/stringcharat.html)

```javascript
function shortcut(input1, input2) {
  return input1.charAt(0) + input2.charAt(0);
}
```

##Exercise 05: String: indexOf()
[Descripcion](https://www.jshero.net/en/koans/stringindexof.html)

```javascript
function indexOfIgnoreCase(input1, input2) {
  return input1.toUpperCase().indexOf(input2.toUpperCase());
}
```
