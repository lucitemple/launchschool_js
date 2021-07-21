let a = 5;

switch (a) {
  case 5:
    console.log("a is 5");
    break;
  case 6:
    console.log("a is 6");
    break;
  default:
    console.log("a is neither 5, nor 6");
    break;
} // => a is 5

// As an if/else statement
let a = 5;

/* if (a === 5) {
  console.log('a is 5');
} else if (a === 6) {
  console.log('a is 6');
} else {
  console.log('a is neither 5, nor 6');
} */ // => a is 5

// Using fallthrough on purpose
let b = 5;

switch (b) {
  case 5:
  case 6:
  case 7:
    // executed if b is 5, 6, or 7
    console.log("b is either 5, 6, or 7");
    break;
  case 8:
  case 9:
    // executed if b is 8 or 9
    console.log("b is 8 or 9");
    break;
  default:
    // executed if b is anything else
    console.log("b is not 5, 6, 7, 8, or 9");
    break;
}