//console.log("These aren't the droids you're looking for.".length);

//console.log("confetti floating everywhere".toUpperCase());

/* let repeat = (num, str) => {
    let newStr = '';
    for (let i = 0; i < num; i++) {
        newStr+= str;
    }
    console.log(newStr);
};

// alternative
function repeat(n, string) {
  let repetitions = "";

  while (n > 0) {
    repetitions += string;
    n -= 1;
  }

  return repetitions;
}

repeat(3, 'ha'); // 'hahaha' */

//let str = "A pirate I was meant to be! \n Trim the sails and roam the sea!";

/* let compare = (first, second) => console.log(first.toLowerCase() === second.toLowerCase());

let string1 = "Polar Bear";
let string2 = "Polar bear";
let string3 = "Penguin";

compare(string1, string2);
compare(string2, string3); */

/* let byteSequence = "TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu";
console.log(/x/i.test(byteSequence));

// alternative
byteSequence.includes('x'); // true */

/* let isBlank = (str) => console.log(str.trim().length === 0 );

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true */

// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

console.log(
  "launch school tech & talk"
    .split(" ")
    .map((word) => word[0].toUpperCase().concat(word.slice(1)))
    .join(" ")
);
