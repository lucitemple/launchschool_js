// 8. Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

// The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all of the existing keys from the object.

 let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let copy = (obj, arr = []) => {
    let newArr = {};
  if (arr.length === 0) {
    newArr = Object.assign({}, obj);
  } else {
   for (index in arr) {
       newArr[arr[index]] = objToCopy[arr[index]];
   }
  }
  return newArr;
}; 

// alternative way
function copyObj(sourceObject, keys) {
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
console.log(copy(objToCopy, ["bar"]));
