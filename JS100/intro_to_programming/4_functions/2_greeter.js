// 2. In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this program that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name.

// Using function and prompt - works in browser but not node
/* let getName = (name) => prompt(name);

let firstName = getName("Enter you first name: ");
let lastName = getName("Enter your last name: ");
console.log(`Hello ${firstName} ${lastName}`); */

// use function and readline
let getName = (inputPrompt) => {
  return require("readline-sync").question(inputPrompt);
};

let firstName = getName("Enter you first name: ");
let lastName = getName("Enter your last name: ");
console.log(`Hello ${firstName} ${lastName}`);
