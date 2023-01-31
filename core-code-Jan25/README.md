# core-code-Jan25

JavaScript practice

#Week 09

##Exercise 01: Easy mathematical callback
[Descripcion](https://www.codewars.com/kata/54b7c8d2cd7f51a839000ebf/train/javascript)

```javascript

```

##Exercise 02: Moving Zeros To The End
[Descripcion](https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript)

```javascript
function moveZeros(arr) {
  let notZerros = [];
  let zerrosArr = [];
  for (let x of arr) {
    if (x === 0) zerrosArr.push(x);
    else notZerros.push(x);
  }
  return [...notZerros, ...zerrosArr];
}
```

##Exercise 03: Valid Parentheses
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
