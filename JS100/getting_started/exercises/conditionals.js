// The code provided below will randomly initialize randomNumber to either 0 or 1 each time it is executed.

//Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0.

/* let randomNumber = Math.round(Math.random());

console.log(randomNumber === 1 ? "Yes!" : "No."); */

///
/* Initialize a variable weather with a string value being "sunny", "rainy", or anything else.

Write an if statement that logs:

"It's a beautiful day!" if weather is assigned to the string "sunny",
"Grab your umbrella." if weather is assigned to the string "rainy", and
"Let's stay inside." otherwise.
Test your code with different values for weather. */

let weather = "rainy";

let response = {
  sunny: "It's a beautiful day!",
  rainy: "Grab your umbrella.",
  otherwise: "Let's stay inside",
};
/* if (weather === "sunny") {
    console.log(response['sunny']);
} else if (weather === "rainy") {
    console.log(response['rainy']);
} else {
    console.log(response['otherwise']);
}; */

switch (weather) {
  case "sunny":
    console.log(response["sunny"]);
    break;
  case "rainy":
    console.log(response["rainy"]);
    break;
  default:
    console.log(response["otherwise"]);
}
