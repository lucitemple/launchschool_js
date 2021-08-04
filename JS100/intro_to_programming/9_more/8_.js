// 8. Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false otherwise. You can also use Object.is(value, NaN) to make the same determination.

// Without using either of those methods, write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, false if it is not.

/* let isNotANumber = (value) => {
   console.log(typeof value === 'number' && !/[0-9]/.test(value));
}; */

// Alternative
function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(NaN)); // => true
console.log(isNotANumber(1)); // => false
console.log(isNotANumber('hello')); // => false
console.log(isNotANumber(-1)); // => false
console.log(isNotANumber(null)); // => false
console.log(isNotANumber(undefined)); // => false