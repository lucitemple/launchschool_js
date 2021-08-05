// 10. Convert a String to a Signed Number!
/* In the previous exercise, you developed a function that converts simple numeric strings to integers. In this exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson. */

let numbers = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

const stringToInteger = (str) => {
  let numArr = str.split("").map((letter) => numbers[letter]);
  let num = 0;
  numArr.forEach((digit) => (num = num * 10 + digit));
  return num;
};

let append = 1;
function stringToSignedInteger(str) {
  if (str[0] == "-" || str[0] == "+") {
    str[0] == "-" ? (append = -1) : (append = 1);
    str = str.slice(1);
  }
  return stringToInteger(str) * append;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
