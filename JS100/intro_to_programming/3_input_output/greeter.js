// 1. Write a dynamic greeter program named greeter.js. The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:

//Using prompt for browser
/*     let name = prompt("What's your name?");
    console.log(`Hello ${name}!`); */

//Using readline-sync for node
let rlSync = require("readline-sync");
let name = rlSync.question("What's your name?\n");
console.log(`Hello ${name}!`);
