// 4. What does the following code log to the console?

function scream(words) {
  words = words + "!!!!";
  return;
  console.log(words);
}

scream("Yipeee");

// Nothing will be logged to the console because the return statement exits the function prior to the console.log