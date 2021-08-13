const MESSAGES = require("./calculator_messages.json");
const readline = require("readline-sync");

let lang;
let num1;
let num2;
let operation;
let result;

function prompt(message) {
  console.log(`=> ${message}`);
}

function checkValidity(inputValue) {
  /*   if (!(`${lang}` === inputValue && ["en", "de", "zh"].includes(inputValue))) {
    lang = readline.question(prompt(MESSAGES.int.invalidLang));
  } */
}

function calculate(num1, num2, operation) {
  const actions = {
    "+": num1 + num2,
    "-": num1 - num2,
    "*": num1 * num2,
    "/": num1 / num2,
  };
  result = actions[operation];
  prompt(`${num1} ${operation} ${num2} = ${result}`);
  //return actions[operation]?.(num1, num2) ?? "Calculation is not recognised";
}

// Start
lang = readline.question(prompt(MESSAGES.int.getLang));

num1 = Number(readline.question(prompt(`${MESSAGES.en.getNum1}`)));
num2 = Number(readline.question(prompt(`${MESSAGES.en.getNum2}`)));
operation = readline.question(prompt(`${MESSAGES.en.getOperation}`));

calculate(num1, num2, operation);
