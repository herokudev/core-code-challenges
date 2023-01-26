# core-code-Jan16

JavaScript practice

#Week 07

##Exercise 01: Training JS #7: if..else and ternary operator
[Descripcion](https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript)

```javascript
function saleHotdogs(n) {
  let total = 0;
  if (n < 5) total = n * 100;
  else if (n >= 5 && n < 10) total = n * 95;
  else total = n * 90;
  return total;
}
```

##Exercise 02: Training JS #8: conditional statement--switch
[Descripcion](https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript)

```javascript
function howManydays(month) {
  var days = 0;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
      break;
    case 2:
      return 28;
      break;
    default: //not a valid input
      return -1;
  }
}
```

##Exercise 03: Basic calculator
[Descripcion](https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/train/javascript)

```javascript
function calculate(num1, operation, num2) {
  switch (operation) {
    case '+':
      return num1 + num2;
      break;
    case '-':
      return num1 - num2;
      break;
    case '*':
      return num1 * num2;
      break;
    case '/':
      if (num2 == 0) return null;
      else return num1 / num2;
      break;
    default: //not a valid input
      return null;
  }
}
```
