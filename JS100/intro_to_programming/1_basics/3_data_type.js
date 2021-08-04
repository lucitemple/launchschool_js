// 3. Identify the data type for each of the following values:

/* 'true'
false
1.5
2
undefined
{ foo: 'bar' } */

let arr = ["true", false, 1.5, 2, undefined, { foo: "bar" }];

for (let i = 0; i < arr.length; i++) {
  console.log(typeof arr[i]);
}
