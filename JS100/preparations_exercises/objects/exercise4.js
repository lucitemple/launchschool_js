// Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. The object should contain at least 3 elements. You should place your code between the braces in the let statement:

/* let myArray = {
    length: 5,
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three'
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
} */

// Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

/* let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let toCaps = () => {
  let arr = [];
  for (let key in obj) {
    arr.push(key.toUpperCase());
  }
  console.log(arr);
};

toCaps(obj);
console.log(obj); */

//Create a new object named myObj that uses myProtoObj as its prototype.
/* let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj['qux'] = 3;

console.log(myObj); */

//Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

//The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all of the existing keys from the object.

/* let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

/* let copy = (obj, arr = []) => {
    let newArr = {};
  if (arr.length === 0) {
    newArr = Object.assign({}, obj);
  } else {
   for (index in arr) {
       newArr[arr[index]] = objToCopy[arr[index]];
   }
  }
  return newArr;
}; */

// alternative way
/* function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function (key) {
      destinationObject[key] = sourceObject[key];
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}

console.log(copy(objToCopy));
console.log(copy(objToCopy, ["foo", "qux"]));
console.log(copy(objToCopy, ["bar"])); */

// Write some code to replace the value 6 in the following object with 606; You don't have to search the object. Just write an assignment that replaces the 6
/* let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12],
};

obj.bar[3].xyz = 606;
console.log(obj); */

//console.log(Math.sqrt(37));
/* console.log(Math.max(1, 6, 3, 2));
console.log(Math.max(-1, -6, -3, -2));
console.log(Math.max(2, 2)); */

//Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.

/* let words = [
  "laboratory",
  "experiment",
  "flab",
  "Pans Labyrinth",
  "elaborate",
  "polar bear",
];

let allMatches = (array, regex) => {
    return array.filter(word => regex.test(word));
}

console.log(allMatches(words, /lab/));  */

//Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false otherwise. You can also use Object.is(value, NaN) to make the same determination.

// Without using either of those methods, write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, false if it is not.

/* let isNotANumber = (value) => {
   console.log(typeof value === 'number' && !/[0-9]/.test(value));
}; */

// Alternative
/* function isNotANumber(value) {
  return value !== value;
}

isNotANumber(NaN);
isNotANumber(1);
isNotANumber('hello');
isNotANumber(-1);
isNotANumber(null);
isNotANumber(undefined); */

// Without using Object.is, write a function that will return true if the argument is -0, and false if it is 0 or any other number.

let isMinusZero = (value) =>  value === 0 && (5 / value) < 0;

console.log(isMinusZero(0));
console.log(isMinusZero(-0));
console.log(isMinusZero(1));
console.log(isMinusZero(-2));
