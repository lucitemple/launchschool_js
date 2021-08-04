// 3. Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.


let evenOrOdd = (num) => {
  if (Number.isInteger(num)) {
    console.log(!!(num % 2) ? "odd" : "even");
  } else {
    console.log("Error");
  }
};

evenOrOdd(6);
evenOrOdd(1);
evenOrOdd(0);
evenOrOdd("str");

