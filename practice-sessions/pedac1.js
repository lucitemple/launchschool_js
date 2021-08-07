/*
PEDAC TIPS 👍
Alphabet Symmetry

Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would occupy in the alphabet, which are positions 4 and 5. 

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) // [4, 3, 1]


Input will consist of alphabetic characters, both uppercase and lowercase.  No spaces.

Example

solve(["abode","ABc","xyzD"]) // [4,3,1]
solve(["abide","ABc","xyz"])  // [4,3,0]
solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]) // [6,5,7]
solve(["encode","abc","xyzD","ABmD"]) // [1, 3, 1, 3]

Problem
=======
- Given an Array of Strings
- Return an Array of numbers (positive integers)
Criteria:
- Count every letter of each `word` in the array that is in the alphabet position 
- Input can be upper or lower case alpha-characters
- Input is not special characters, digits, spaces

- Be careful and think if `a` in "abode" is in position 0 or in position 1? In programming we start counting index positions at 0. So `a` is actually in position 0.

Example Test Cases
==================
First Example
- strings are different lengths
- letters are out of alphabetical order

Second Example
- We see an example of a string where no letters meet the criteria
    "xyz" => 0

Data Structure
===============
- Input: Array of Strings
- Output: Array of numbers
- Another data structure?
  - store the alphabet as a string ==> 'abcdefghijklmnopqrstuvwxyz'
  - ["abode","ABc","xyzD"] --> [4,3,1] Array transformation 

Algorithm
=========
Edris
- initialize the alphabet string --> 'abcdefghijklmnopqrstuvwxyz'
- return passed array, map()
  - iterate through each string at each element
  - check each index at string and compare to alphabet string
  - initialize count variable to increment 
  - return count
  
Alex
declare function solve that takes an array as an argument 
-declare newArr = []
loop through array of strings  
-for each word, use helper function that iterates through string and increases count by 1 if the character at the index position of the word equals the character at the same index position of a string of the alphabet  
-push what the helper function returns to the newArr
after iterating through the array, return the newArr

-declare a helper function that takes a word as its argument
declare alphabet string
declare count = 0
-iterate through word  
-if word[index] === alphabet[index] 
  -count += 1
return count
*/

// Mark
// Algorithm
// =========
// 1. initialize alphabet as a string
// 2. initialize function that takes in list as parameter
// 3. iterate over list of strings via map
// 4. pass callback function for every string
// 4a.  split string into array of characters
// 4b.  reduce list of characters to number based on index match
// 4c.  if character index matches alphabet index, increment accumulator by 1
// 4d.  else return accumulator as zero when there is no match
// 4. return characters number for map callback
// 5. call function with list of strings

/*

Mandy
- Initialize an String that holds the letters of the alphabet
- Initialize a count variable to store how many letters meet the criteria

- Iterate through the Input Array (helper function)
   - On each individual `word`, count the letters that meet the criteria: the letter's position in the String must occupy their positions in the alphabet
   - Compare the index of the character to the index of the letter in the alphabet string
   - Increment `count` if character meets the criteria
   - Once we are finished checking all the characters, store the count in a final Array (either through map or initializing a new Array)

- Return the final Array

*/


// - initialize the alphabet string --> 'abcdefghijklmnopqrstuvwxyz'
// - return passed array, map()
//   - iterate through each string at each element
//   - check each index at string and compare to alphabet string
//   - initialize count variable to increment 
//   - return count

/// Edris Algo
function solve(arr) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  return arr.map(string => {
    let count = 0;
    for (let index in string) {
      if (string[index] === alphabet[index]) {
        count += 1;
      }
    }
    return count;
  })
}


function solve(array) {
  let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  
  return array.map(string => {
    return string.split("")
      .reduce((acc, char, i)=>{
        if (char === alphabet[i]) {
          acc += 1;
        }
          return acc
       }, 0);
    }
                   
}
                   
                   
                   
                   Mandy
                   
function countMatchingIndices(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let count = 0;

  str.split('').forEach((char, idx) => {
    if (alphabet.indexOf(char.toLowerCase()) === idx) {
      count += 1;
    }
  });

  return count;
}

function solve(arr) {
  return arr.map(str => countMatchingIndices(str));
}  

/* const alphabet = "abcdefghijklmnopqrstuvwxyz";

const solve = (arr) => {
  return arr.map((str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() == alphabet[i]) {
        count += 1;
      }
    }
    return count;
  });
};

console.log(solve(["abode", "ABc", "xyzD"])); // [4,3,1]
solve(["abide", "ABc", "xyz"]); // [4,3,0]
solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]); // [6,5,7]
solve(["encode", "abc", "xyzD", "ABmD"]); // [1, 3, 1, 3]
 */