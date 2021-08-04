// 2. Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.

let evenOrOdd = (num) => console.log(!!(num % 2) ? "odd" : "even");

evenOrOdd(6);
evenOrOdd(1);
evenOrOdd(0);
