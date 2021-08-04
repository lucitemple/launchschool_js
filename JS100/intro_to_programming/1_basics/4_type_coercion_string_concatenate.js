// 4. Explain why this code logs '510' instead of 15.

console.log("5" + 10);
console.log(5 + "10");
console.log("5" - 3);

// When the addition operator is used on a String, it will result in concatenation.

// A non-string will have it's type coerced into String type to allow the concatenation to occur.
