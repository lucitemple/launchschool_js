/*  7. Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'. */

let toCaps = (str) => (str.length > 10 ? str.toUpperCase() : str);

console.log(`${toCaps("hi")}`);
console.log(`${toCaps("")}`);
console.log(`${toCaps("hello world")}`);
