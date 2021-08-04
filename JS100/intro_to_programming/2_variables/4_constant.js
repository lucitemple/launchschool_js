// 4. What happens when you run the following code? Why?

const NAME = "Victor";
console.log("Good Morning, " + NAME);
console.log("Good Afternoon, " + NAME);
console.log("Good Evening, " + NAME);

NAME = "Joe";
console.log("Good Morning, " + NAME);
console.log("Good Afternoon, " + NAME);
console.log("Good Evening, " + NAME);

// => Good Morning, Victor
// => Good Afternoon, Victor
// => Good Evening, Victor
// Error. Constants are immutable, cannot reassign the value from "Victor" to "Joe."