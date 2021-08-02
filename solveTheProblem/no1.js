function multiply(number) {
  let i = number;
  let currentValue = 1;

  while (i >= 1) {
    currentValue *= i;
    i--;
  }

  return currentValue;
}

console.log(multiply(4));
console.log(multiply(5));
console.log(multiply(6));
