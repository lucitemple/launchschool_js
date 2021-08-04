// 7. Use reduce to compute the sum of the squares of all of the numbers in an array:

let array = [3, 5, 7];

let sumOfSquares = (arr) => arr.reduce((acc, ele) => acc + (ele * ele), 0);
console.log(sumOfSquares(array)); // => 83
