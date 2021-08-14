// Calculator Bonus Features
// 1. Ask the user for another calculation
// 2. Extract messages in the program to a configuration file.


const MESSAGES = require("./calculator_messages.json");

const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

let operands = [];
let output = null;

prompt(MESSAGES.welcome);

askQuestions();

function invalidInput(operand) {
  return operand.trimStart() === "" || Number.isNaN(Number(operand));
}

function askQuestions() {
  for (let idx = 0; idx < MESSAGES.getOperands.length; idx++) {
    prompt(MESSAGES.getOperands[idx]);
    operands[idx] = readline.question();
    while (invalidInput(operands[idx])) {
      prompt(MESSAGES.invalidInput[0]);
      operands[idx] = readline.question();
    }
  }
  while (!["1", "2", "3", "4"].includes(operands[2])) {
    prompt(MESSAGES.invalidInput[1]);
    operands[2] = readline.question();
  }
  calculator();
}

function calculator() {
  switch (operands[2]) {
    case "1":
      output = Number(operands[0]) + Number(operands[1]);
      break;
    case "2":
      output = Number(operands[0]) - Number(operands[1]);
      break;
    case "3":
      output = Number(operands[0]) * Number(operands[1]);
      break;
    case "4":
      output = Number(operands[0]) / Number(operands[1]);
  }
  prompt(`The result is: ${output}`);
}

while (output) {
  prompt(MESSAGES.runAgain);
  let rerun = readline.question().toUpperCase();
  while (!["Y", "N"].includes(rerun)) {
    prompt(MESSAGES.invalidInput[2]);
    rerun = readline.question().toUpperCase();
  }
  output = undefined;
  if (rerun === "Y") {
    operands = [];
    askQuestions();
  }
}
