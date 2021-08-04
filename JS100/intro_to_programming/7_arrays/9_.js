// 9. Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays: Return true or false depending on each result.

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

/* let includeThree = arr => console.log(arr.includes(3));
includeThree(numbers1); // => true
includeThree(numbers2); // => false
includeThree(numbers3); // => false */

// quicker!!!
console.log(numbers1.includes(3)); // => true
console.log(numbers2.includes(3)); // => false
console.log(numbers3.includes(3)); // => false
