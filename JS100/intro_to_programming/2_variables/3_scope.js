// 3. What happens when you run the following program? Why do we get that result?

{
  let foo = "bar";
}

console.log(foo);

// => Error... foo is not defined.
// Because foo was defined with internal scope to the code block, but was called from external scope.
