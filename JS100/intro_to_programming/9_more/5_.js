// 5. What does the following function do?

function doSomething(string) {
  return string
    .split(" ")
    .reverse()
    .map((value) => value.length);
}

// When this function is called and passed a string as an argument, the string will be: split at any spaces(e.g. by word), these will be put into reverse order, and then the length of each word is mapped, to return an array of word length in reverse order to the original string. 