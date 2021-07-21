let rlSync = require('readline-sync');

function futureAge() {
    let age = Number(rlSync.question("How old are you?\n"));
    console.log(`You are ${age} years old.`);
    for (let years = 10; years < 50; years +=10) {
        age += 10;
    console.log (`In ${years} years, you will be ${age} years old.`)
    };

};

futureAge();