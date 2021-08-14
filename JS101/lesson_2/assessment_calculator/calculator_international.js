// Calculator Bonus Features
// 1. Ask the user for another calculation
// 2. Extract messages in the program to a configuration file.
// 3. Internationalization

const MESSAGES = require("./calculator_int_messages.json");
const readline = require("readline-sync");

let result;
let dataset = {
  forLang: {
    inputMessage: "getLang",
    testType: "language",
    invalidMessage: "invalidLang",
    value: "en",
  },
  forNum1: {
    inputMessage: "getNum1",
    testType: "number",
    invalidMessage: "invalidNum",
    value: null,
  },
  forNum2: {
    inputMessage: "getNum2",
    testType: "number",
    invalidMessage: "invalidNum",
    value: null,
  },
  forOperation: {
    inputMessage: "getOperation",
    testType: "operation",
    invalidMessage: "invalidOperation",
    value: null,
  },
  forCalculation: {
    inputMessage: null,
    testType: "calculation",
    invalidMessage: "invalidCalculation",
    value: null,
  },
  forRerun: {
    inputMessage: "selectRerun",
    testType: "rerun",
    invalidMessage: "invalidSelection",
    value: null,
  },
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function runCalculator() {
  getOperands();
  calculate(
    Number(dataset.forNum1.value),
    Number(dataset.forNum2.value),
    dataset.forOperation.value
  );
  rerun();
}

function getOperands() {
  getInputAndValidate("forNum1");
  getInputAndValidate("forNum2");
  getInputAndValidate("forOperation");
}

function getInputAndValidate(object) {
  //   dataset[object].value
  let response = readline.question(
    prompt(MESSAGES[dataset.forLang.value][dataset[object].inputMessage])
  );

  while (isInvalid(dataset[object].value, dataset[object].testType)) {
    dataset[object].value = readline.question(
      prompt(MESSAGES[dataset.forLang.value][dataset[object].invalidMessage])
    );
  }
  while (dataset.forOperation.value === "/" && dataset.forNum2.value === "0") {
    prompt(
      MESSAGES[dataset.forLang.value][dataset.forCalculation.invalidMessage]
    );
    getInputAndValidate(object);
  }
}

function isInvalid(inputValue, testType, operation, num2) {
  const tests = {
    language: !["en", "de", "zh"].includes(inputValue),
    number: Number.isNaN(Number(inputValue)),
    operation: !["+", "-", "*", "/"].includes(inputValue),
    rerun: !["Y", "N", "J", "是", "否"].includes(inputValue.toUpperCase()),
    calculation: operation === "/" && num2 === "0",
  };
  return inputValue.trimStart() === "" || tests[testType];
}

function calculate(num1, num2, operation) {
  const actions = {
    "+": num1 + num2,
    "-": num1 - num2,
    "*": num1 * num2,
    "/": num1 / num2,
  };
  result = actions[operation];
  result = Number.isInteger(result) ? result : +result.toFixed(2);
  /*   if (!Number.isInteger(result)) {
    result = +result.toFixed(2);
  } */
  prompt(`${num1} ${operation} ${num2} = ${result}`);
}

function rerun() {
  getInputAndValidate("forRerun");
  if (["Y", "J", "是"].includes(dataset.forRerun.value.toUpperCase())) {
    reset();
    runCalculator();
  }
}
function reset() {
  result = null;
  dataset.forNum1.value = null;
  dataset.forNum2.value = null;
  dataset.forOperation.value = null;
  dataset.forRerun.value = null;
  console.clear();
}

getInputAndValidate("forLang");
runCalculator();
