// Sum or Product of Consecutive Numbers

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
