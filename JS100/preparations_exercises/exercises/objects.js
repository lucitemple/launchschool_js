// Write the code necessary to retrieve the value of the courses property of our student object.

/* let student = {
  name: "Carmen",
  age: 14,
  grade: 10,
  courses: ["biology", "algebra", "composition", "ceramics"],
  gpa: 3.75,
};

console.log(student.courses); */

// Given the below object jane, write code that retrieves the country in which Jane is located.

/* let jane = {
  firstName: "Jane",
  lastName: "Harrelson",
  age: 32,
  location: {
    country: "Denmark",
    city: "Aarhus",
  },
  occupation: "engineer",
};

jane.location.country; */
/* 
let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido['age'] = 2;
fido['favourite food'] = 'dogfood'; */
// Add property 'age'.
// Add property 'favorite food'.

//console.log(fido);

//Add a property to the below object, jane, so that the code on line 13 logs 'Hej, Bobby!' to the console.
/* let jane = {
  firstName: "Jane",
  lastName: "Harrelson",
  age: 32,
  location: {
    country: "Denmark",
    city: "Aarhus",
  },
  occupation: "engineer",
  // add code here
  greet: function (name) {
    console.log(`Hej, ${name}!`);
  },
};

jane.greet("Bobby"); // Hej, Bobby!
 */

// Write code that stores all of the vehicle property names in an array called keys.
/* 
let vehicle = {
  manufacturer: "Tesla",
  model: "Model X",
  year: 2015,
  range: 295,
  seats: 7,
};

let keys = Object.keys(vehicle);

console.log(keys); */

// Convert the person object into a nested array nestedPerson, containing the same key-value pairs.

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

// Write code that does the reverse, starting from a nested array of pairs and building an object.

/* let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

console.log(Object.fromEntries(nestedArray)); */

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

// Write a function clone that takes an object as argument and returns a shallow copy of that argument. Shallow copy means that it returns a new object that has the same key/value pairs, but that you don't need to worry about cloning the values as well. The code below demonstrates the expected behaviour.

function clone(obj) {
  // TODO
  let newobj = {};
  Object.assign(newobj, obj);
  return newobj;
}

// alternative
/* function clone(obj) {
  return Object.assign({}, obj);
} */

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33