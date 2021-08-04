// 2. Greeting a user
// Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

let rlSync = require("readline-sync");

let name = rlSync.question("What is your name? ");

if (name.includes("!")) {
  name = name.substr(0, name.length - 1).toUpperCase();
  console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}

// Alternative
/* if (name[name.length - 1] === "!") {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
} */