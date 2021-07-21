// Write a for loop that iterates over all numbers from 1 to 100, and outputs the result of multiplying each element by 2.

/* for (let i = 1; i <=100; i++) {
    console.log( i * 2);
} */

//Using the code below as a starting point, write a while loop that logs the elements of array at each index, and terminates after logging the last element of the array.
/* let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
    console.log(array[index]);
    index++;
} */

// Take a moment to read the MDN documentation on the continue statement.

//Then write a for loop that loops over the elements of the array cities and logs the length of each string to the console. If the element is null, skip forward to the next iteration without logging anything to the console.

/* let cities = [
  "Istanbul",
  "Los Angeles",
  "Tokyo",
  null,
  "Vienna",
  null,
  "London",
  "Beijing",
  null,
];

for (let index = 0; index < cities.length; index+=1) {
  if (cities[index] === null) {
    continue;
  }
  console.log(cities[index].length);
} */


/* for (let i = 0; i < 1 ; i += 1) {
  console.log("and on");
} */

// Write a while loop that logs all odd natural numbers between 1 and 40.

/* let index = 1;
while (index <= 40) {
    if (index % 2) {
        console.log(index);
    }
    index++;
} */

// Loop over the elements of the array fish, logging each one. Terminate the loop immediately after logging the string 'Nemo'

let fish = ["Dory", "Marlin", "Gill", "Nemo", "Bruce"];
index = 0;

while (fish[index] !== "Nemo") {
    console.log(fish[index]);
    index++;
}