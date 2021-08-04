// 6. Will this program produce an error when run? Why or why not?

const FOO = "bar";
{
  const FOO = "qux";
}

console.log(FOO);

// No. The constant foo is defined in outer scope, and called in outer scope. Inner scope is confined to within the code block.
