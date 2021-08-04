// 5. Arithmetic Integer
// Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

let rlSync = require("readline-sync");

let firstInteger = Number(
  rlSync.question("What is your first positive integer? ")
);

let secondInteger = Number(
  rlSync.question("What is your second positive integer? ")
);

console.log(
  `${firstInteger} + ${secondInteger} = ${firstInteger + secondInteger}`
);
console.log(
  `${firstInteger} - ${secondInteger} = ${firstInteger - secondInteger}`
);
console.log(
  `${firstInteger} * ${secondInteger} = ${firstInteger * secondInteger}`
);
console.log(
  `${firstInteger} / ${secondInteger} = ${Math.floor(
    firstInteger / secondInteger
  )}`
);

console.log(
  `${firstInteger} % ${secondInteger} = ${firstInteger % secondInteger}`
);
console.log(
  `${firstInteger} ** ${secondInteger} = ${firstInteger ** secondInteger}`
);
