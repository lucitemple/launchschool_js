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
