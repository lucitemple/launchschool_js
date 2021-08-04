// 6. Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

let oddLengths = (array) => {
  return array.map((str) => str.length).filter((num) => num % 2);
};

let arr = ["a", "abcd", "abcde", "abc", "ab"];
console.log(oddLengths(arr)); // => [1, 5, 3]