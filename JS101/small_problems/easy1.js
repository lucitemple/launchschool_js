//Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

/* let isOdd = (num) => !!(num % 2);

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true */

// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

/* for (let i = 1; i <100; i++) {
    if (i % 2) {
        console.log(i);
    }
} */

//Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

/* for (let i = 1; i <= 100; i++) {
  if (!(i % 2)) {
    console.log(i);
  }
} */

/* Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input. */

/* let area = () => {
    let rlSync = require('readline-sync');
    let length = rlSync.question("Enter the length of the room in meters: ");
    let width = rlSync.question("Enter the width of the room in meters: ");
    let sqm = width * length;
    let sqf = sqm * 10.7639;

    console.log(`The area of the room is ${sqm} square meters (${sqf} square feet).`)
}

area();
 */

//Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

/* What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00 */

/* let calculator = () => {
  let rlSync = require("readline-sync");
  let initialBill = parseFloat(rlSync.question("What is the bill? "));
  let tipPercent = parseFloat(rlSync.question("What is the tip percentage? "));
  let tip = (initialBill / 100) * tipPercent;
  let totalBill = (initialBill + tip).toFixed(2);
  console.log(`The tip is $${tip.toFixed(2)}\nThe total is $${totalBill}`);
};

calculator(); */
// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

let userInput = () => {
  let rlSync = require("readline-sync");
  let integer = parseFloat(
    rlSync.question("Please enter an integer greater than 0: ")
  );
  let method = rlSync.question(
    `Enter "s" to compute the sum, or "p" to compute the product. `
  );
  calculator(integer, method);
};

let calculator = (integer, method) => {
  let total;
  let arr = [];

  for (let i = 1; i < integer + 1; i++) {
    arr.push(i);
  }
    if (method === "s") {
        total = arr.reduce((acc, val) => acc + val, 0 );
    } else if (method === "p") {
      total = arr.reduce((acc, val) => (acc * val), 1 );
    }
  console.log(`The ${method == "s" ? 'sum' : 'product'} of the integers between 1 and ${integer} is ${total}.`);
};

userInput();
