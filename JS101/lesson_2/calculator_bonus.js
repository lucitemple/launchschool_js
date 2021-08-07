// Calculator Bonus Features
// 1. Ask the user for another calculation

const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

let operands = [];
let output = null;

let questions = [
  "What's the first number?",
  "What's the second number?",
  "What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide",
];

prompt("Welcome to Calculator!");

askQuestions();

function invalidInput(operand) {
  return operand.trimStart() === "" || Number.isNaN(Number(operand));
}

function askQuestions() {
  for (let idx = 0; idx < questions.length; idx++) {
    prompt(questions[idx]);
    operands[idx] = readline.question();
    while (invalidInput(operands[idx])) {
      prompt("Hmm... that doesn't look like a valid number.");
      operands[idx] = readline.question();
    }
  }
  while (!["1", "2", "3", "4"].includes(operands[2])) {
    prompt("Must choose 1, 2, 3, or 4");
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
  prompt("Do another calculation? 1) Yes 2) No");
  let rerun = readline.question();
  while (!["1", "2"].includes(rerun)) {
    prompt("Must choose 1 for Yes or 2 for No");
    rerun = readline.question();
    output = undefined;
  }
  if (rerun === "1") {
    operands = [];
    askQuestions();
  }
}
