// 4. Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

let obj = {
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

toCaps(obj); // => ['B', 'A', 'C']
console.log(obj); // => { b: 2, a: 1, c: 3 }
