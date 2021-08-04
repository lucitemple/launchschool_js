// 3. Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

let multiply = (a, b) => `${a} * ${b} = ${a * b}`;

let getNumbers = (prompt) => {
  let rlSync = require("readline-sync");
  return Number(rlSync.question(prompt));
};
let num1 = getNumbers("Pick a number ");
let num2 = getNumbers("Pick another number ");
console.log(multiply(num1, num2));
