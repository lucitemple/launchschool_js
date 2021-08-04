// 3. The following code causes an infinite loop (a loop that never stops iterating). Why?

let counter = 0;

while ((counter = 1)) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// the while conditional statement uses the assignment operator to assign the value of the counter variable to 1 - which will always be true. (it should use the equality operator to check the value rather than assign it)