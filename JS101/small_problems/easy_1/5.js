// Tip Calculator
//Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

/* What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00 */

let calculator = () => {
  let rlSync = require("readline-sync");
  let initialBill = parseFloat(rlSync.question("What is the bill? "));
  let tipPercent = parseFloat(rlSync.question("What is the tip percentage? "));
  let tip = (initialBill / 100) * tipPercent;
  let totalBill = (initialBill + tip).toFixed(2);
  console.log(`The tip is $${tip.toFixed(2)}\nThe total is $${totalBill}`);
};

calculator();