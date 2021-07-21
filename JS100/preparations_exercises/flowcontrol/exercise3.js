/* if (foo()) {
  return "bar";
} else {
  return qux();
} */

/* Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'. */

/* let toCaps = str => str.length > 10 ? str.toUpperCase() : str;

console.log(`
${toCaps('hi')},
${toCaps('')},
${toCaps('hello world')}`); */

/* Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0. */

let numberRange = num => {
    if (num < 0) {
        console.log(num + " is less than 0");
    } else if (num <= 50) {
        console.log(num + " is between 0 and 50");
    } else if (num <= 100) {
        console.log(num +" is between 51 and 100");
    } else { 
        console.log(num + " is greater than 100");
    }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
numberRange(101);