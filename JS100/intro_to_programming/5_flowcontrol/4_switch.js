// 4. What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case "123":
      console.log("Product1");
    case "113":
      console.log("Product2");
    case "142":
      console.log("Product3");
    default:
      console.log("Product not found!");
  }
}

barCodeScanner("113");

// => Product2
// => Product3
// => Product not found!
// There is no break or return used in the case "113" clause, so the program will continue to run until completion. Fall through behaviour.