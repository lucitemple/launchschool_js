// 1. In the following code, what are the final length values for each array?

let array1 = [1, 2, undefined, 4]; // length 4

let array2 = [1];
array2.length = 5; // length 5

let array3 = [];
array3[-1] = [1]; // length 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // length 3

let array5 = [];
array5[100] = 3;  // length 101

console.log(array1.length);
console.log(array2.length);
console.log(array3.length);
console.log(array4.length);
console.log(array5.length);