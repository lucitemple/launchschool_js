//Write a function that returns the first element of an input array. For example:

/* let first = (arr) => console.log(arr[0]);

first(['Earth', 'Moon', 'Mars']); // 'Earth'
first([]);  */

/* let last = (arr) => console.log(arr[arr.length -1]);

last(['Earth', 'Moon', 'Mars']); // 'Mars' */

//Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

/* let energy = ["fossil", "solar", "wind", "tidal", "fusion"];
energy.shift()
energy.push('geothermal');
console.log(energy); */

/* let alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabet.split('')); */

/* let scores = [96, 47, 113, 89, 100, 102];
console.log(scores.filter(num => num >= 100).length); */

// We've been given an array of vocabulary words grouped into sub-arrays by meaning. This is a two-dimensional array or a nested array. Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.

/* let vocabulary = [
  ["happy", "cheerful", "merry", "glad"],
  ["tired", "sleepy", "fatigued", "drained"],
  ["excited", "eager", "enthused", "animated"],
];

vocabulary.forEach(subArr => {
    for (index in subArr) {
        console.log(subArr[index]);
    }
}) */

// alternative
// vocabulary.flat().forEach((word) => console.log(word));

/* function filter(input) {
  return Array.isArray(input);
}

console.log(filter([1,2]));
console.log(filter([]));
console.log(filter('hello')); */

// Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method Array.prototype.includes().

/* let destinations = [
  "Prague",
  "London",
  "Sydney",
  "Belfast",
  "Rome",
  "Aruba",
  "Paris",
  "Bora Bora",
  "Barcelona",
  "Rio de Janeiro",
  "Marrakesh",
  "New York City",
];

let contains = (destination, destinationList) => {
  let toggle = false;
  destinationList.forEach((destination2) => {
    if (destination2 === destination) {
        toggle = true;
        return;
    }
  });
  console.log(toggle);
};

contains("Barcelona", destinations); // true
contains("Nashville", destinations); // false

// alternative

function contains(element, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === element) {
      return true;
    }
  }

  return false;
}

// alternative

function contains(element, list) {
  return list.indexOf(element) >= 0;
} */

// We generated parts of a passcode and now want to combine them into a string. Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).

/* let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
console.log(passcode.join('-')); */

// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

// Write code that removes the items from 'groceryList' one by one, until it is empty.

let groceryList = [
  "paprika",
  "tofu",
  "garlic",
  "quinoa",
  "carrots",
  "broccoli",
  "hummus",
];

// Your code.
do {
  console.log(groceryList.shift());
} while (groceryList.length > 0);

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log(groceryList); // []
