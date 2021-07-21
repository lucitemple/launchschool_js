/* let name1 = "Victor";

    console.log(`Good Morning, ${name1}.`);
    console.log(`Good Afternoon, ${name1}.`);
    console.log(`Good Evening, ${name1}.`); */

//Using prompt for browser
/*     let name = prompt("What's your name?");
    console.log(`Hello ${name}!`); */

//Using readline-sync for node
/*     let rlSync = require('readline-sync');
    let name = rlSync.question("What's your name?\n");
    console.log(`Hello ${name}!`); */

// Using readline-sync for node first & last name
/* let rlSync = require("readline-sync");
        let firstName = rlSync.question("What's your first name?\n");
        let lastName = rlSync.question("What's your last name?\n");
        console.log(`Hello ${firstName} ${lastName}!`); */

// Using function and prompt - works in browser but not node
/* let getName = (name) => prompt(name);

let firstName = getName("Enter you first name: ");
let lastName = getName("Enter your last name: ");
console.log(`Hello ${firstName} ${lastName}`); */

// use function, prompt and readline
let getName = (prompt) => {
    let rlSync = require("readline-sync");
    let name = rlSync.question(prompt);
    return name;
}

let firstName = getName("Enter you first name: ");
let lastName = getName("Enter your last name: ");
console.log(`Hello ${firstName} ${lastName}`);
