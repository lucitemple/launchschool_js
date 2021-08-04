// 8. Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

let arr = ["a", "abcd", "abcde", "abc", "ab"];

let oddLengths = (arr) => arr.reduce(function (accArr, ele) {
  if (ele.length % 2) {
    accArr.push(ele.length);
  }
  return accArr;
}, []);

console.log(oddLengths(arr)); // => [1, 5, 3]