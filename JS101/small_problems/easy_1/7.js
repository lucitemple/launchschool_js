// 7. Short Long Short
//Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

let shortLongShort = (string1, string2) => {
  let shortStr;
  let longStr;
  if (string1.length < string2.length) {
    shortStr = string1;
    longStr = string2;
  } else {
    shortStr = string2;
    longStr = string1;
  }
  console.log(shortStr + longStr + shortStr);
};

shortLongShort("abc", "defgh"); // "abcdefghabc"
shortLongShort("abcde", "fgh"); // "fghabcdefgh"
shortLongShort("", "xyz"); // "xyz"


// Alternative
/* function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
} */