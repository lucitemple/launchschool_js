// 1. What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// => 1
// No, foo function doeesn't affect the output. 
// bar in the outer scope is logged to the console, unchanged. bar in the function's block scope doesn't impact outer scope.
