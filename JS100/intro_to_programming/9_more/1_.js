// 1. What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// => [1, 4, 3]
// array1 and array2 reference the same array. array1 changed an element in the array.