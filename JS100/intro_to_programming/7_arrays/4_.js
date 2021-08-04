// // use map to log even and  odd numbers
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

//myArray.map((num) => console.log((num % 2) ? "odd" : "even"));

console.log(myArray.map((num) => (num % 2 ? "odd" : "even")));
// => ['odd','odd','even','odd','even','even','even','odd','odd','even','even']