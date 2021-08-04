// 5. What does this program log to the console? Why?

let foo = "bar";

{
  let foo = "qux";
}

console.log(foo);

// => bar
// foo is initialised to the value of 'bar' in outer scope, and called from outer scope. when foo is initialised in inner scope to the value of 'qux', this cannot be read in outer scope.
