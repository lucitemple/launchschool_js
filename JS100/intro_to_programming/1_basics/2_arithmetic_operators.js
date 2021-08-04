// 2. Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

const number = 4936;

let ones = number % 10;
let tens = ((number - ones) / 10) % 10;
let hundreds = ((number - ones - `${tens * 10}`) / 100) % 10;
let thousands = (number - ones - `${tens * 10}` - `${hundreds * 100}`) / 1000;

console.log(
  `1. thousands place is ${thousands}, 2. hundreds place is ${hundreds}, 3. tens place is ${tens}, 4. ones place is ${ones}`
);
