/* eslint-disable max-lines-per-function */
const MESSAGES = require("./calculator_messages.json");
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

function reset() {
  result = null;
  dataset.forNum1.value = null;
  dataset.forNum2.value = null;
  dataset.forOperation.value = null;
  dataset.forRerun.value = null;
  console.clear();
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function getInputAndValidate(object) {
  dataset[object].value = readline.question(
    prompt(MESSAGES[dataset.forLang.value][dataset[object].inputMessage])
  );
  while (isInvalid(dataset[object].value, dataset[object].testType)) {
    dataset[object].value = readline.question(
      prompt(MESSAGES[dataset.forLang.value][dataset[object].invalidMessage])
    );
  }
  while (dataset.forOperation.value === "/" && dataset.forNum2.value === "0") {
    dataset.forOperation.value = readline.question(
      prompt(
        MESSAGES[dataset.forLang.value][dataset.forCalculation.invalidMessage]
      )
    );
    getInputAndValidate(object);
  }
}

function getOperands() {
  getInputAndValidate("forNum1");
  getInputAndValidate("forNum2");
  getInputAndValidate("forOperation");
}

function isInvalid(inputValue, testType, operation, num2) {
  const tests = {
    language: !["en", "de", "zh"].includes(inputValue),
    number: Number.isNaN(Number(inputValue)),
    operation: !["+", "-", "*", "/"].includes(inputValue),
    rerun: !["Y", "N"].includes(inputValue.toUpperCase()),
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
  prompt(`${num1} ${operation} ${num2} = ${result}`);
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

function rerun() {
  getInputAndValidate("forRerun");
  if (dataset.forRerun.value.toUpperCase() === "Y") {
    reset();
    runCalculator();
  }
}

getInputAndValidate("forLang");
runCalculator();
