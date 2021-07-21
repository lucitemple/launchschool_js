/* let arr = [0, 1, 2, 3, 4, 5, 'bob',];
arr[10] = 'ten';
arr['cat'] = 'Fluffy';
arr[-3] = 9;

//arr.length = 3;
//arr.length = 7;

for (let i = 0; i < arr.length ; i++) {
    console.log(`Key ${i}: value ${arr[i]}`) 
};

console.log(arr); */

// log even numbers

/* let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
//console.log(myArray.filter(num => !(num % 2)));
myArray.forEach(num => {if (!(num % 2)) console.log(num) }); */

// log even numbers in nested array

/* let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach((arr) => {
  arr.forEach((num) => {
    if (!(num % 2)) console.log(num);
  });
}); */

// use map to log even and  odd numbers
/* let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

myArray.map((num) => console.log((num % 2) ? "odd" : "even")); */

// Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function.

/* let findIntegers = (arr) => {
    return arr.filter((item) => Number.isInteger(item));
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4] */

//Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

/* let oddLengths = (array) => {
  return array.map((str) => str.length).filter((num) => num % 2);
};

let arr = ["a", "abcd", "abcde", "abc", "ab"];
console.log(oddLengths(arr)); // => [1, 5, 3] */

// Use reduce to compute the sum of the squares of all of the numbers in an array:
/* let array = [3, 5, 7];

let sumOfSquares = (arr) => arr.reduce((acc, ele) => acc + (ele * ele), 0);
console.log(sumOfSquares(array)); // => 83 */

//Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.
/* let arr = ["a", "abcd", "abcde", "abc", "ab"];

let oddLengths = (arr) => arr.reduce(function (accArr, ele) {
  if (ele.length % 2) {
    accArr.push(ele.length);
  }
  return accArr;
}, []);

console.log(oddLengths(arr)); // => [1, 5, 3] */

// Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays: Return true or false depending on each result.

/* let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8]; */

/* let includeThree = arr => console.log(arr.includes(3));
includeThree(numbers1);
includeThree(numbers2);
includeThree(numbers3);

// quicker!!!
numbers1.includes(3);
numbers2.includes(3);
numbers3.includes(3); */

// Write some code to replace the value 6 in the following array with 606: You don't have to search the array. Just write an assignment that replaces the 6.
let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12],
];

arr[1][3] = 606;
console.log(arr);