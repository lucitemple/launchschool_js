// 2. log even numbers

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
//console.log(myArray.filter(num => !(num % 2)));

myArray.forEach(num => {if (!(num % 2)) console.log(num) });