// Change the function greet from the previous exercise, so that it takes two arguments: a greeting with 'Hello' as default value, and a recipient with 'world' as default value.

/* function greet(greeting = "Hello", reciprient = "world") {
  console.log(`${greeting}, ${reciprient}!`);
}

greet(); // logs: Hello, world!
greet("Salutations"); // logs: Salutations, world!
greet("Good morning", "Launch School"); // logs: Good morning, Launch School! */

// Change the function greet from the previous exercise, so that it doesn't take any arguments, and instead calls the functions greeting and recipient defined below.

/* function greet() {
  console.log(`${greeting()}, ${recipient()}!`);
}

function greeting() {
  return "Good morning";
}

function recipient() {
  return "Launch School";
}

greet(); */

// Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's height (in cm) and weight (in kg). The formula for calculating the BMI is as follows:

//bmi = weightInKilograms / heightInMeters ** 2;

/* let calculateBMI = (height, weight) =>  {
    console.log(`${(weight / (height / 100) ** 2).toFixed(2)}`);
}

calculateBMI(180, 80); // "24.69" */

/* Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

The first human year corresponds to 15 cat years.
The second human year corresponds to 9 cat years.
Every subsequent human year corresponds to 4 cat years. */
/* 
let catAge = (years) => {
  let catYears = 0;
  while (years > 0) {
  if (catYears < 15) {
    catYears += 15;
    years -= 1;
  } else if (catYears < 24) {
    catYears += 9;
    years -=  1;
  } else if (catYears >= 24) {
    catYears += 4;
    years -= 1;
  }
}
  console.log(catYears);
};

// alternative
function catAge(humanYears) {
  switch (humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32
 */
// Create a function removeLastChar that takes a string as argument, and returns the string without the last character.

/* let removeLastChar =(str) => console.log(str.substring(0, (str.length-1)));

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'
 */

// refactor below using arrow syntax

/* let sentence = (verb, noun) =>  `I ${verb} ${noun}.`;

console.log(sentence('like', 'birds')); */
// logs: I like birds.

/// refactor with arrow functions
/* let initGame = () => {
    return {level: 1, score: 0};
} */

// alternative
let initGame = () => ({ level: 1, score: 0 });

let game = initGame();

console.log("Level: " + game.level);
console.log("Score: " + game.score);