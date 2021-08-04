// 3. log even numbers in nested array

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach((arr) => {
  arr.forEach((num) => {
    if (!(num % 2)) console.log(num);
  });
});
