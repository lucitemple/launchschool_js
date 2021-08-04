// 10. Consider this code:

// first code snippet
// > let x = "5"
// > x = x + 1
// = "51"

// second code snippet
// > let y = "5"
// > y++

//What gets returned by y++ in the second snippet, and why?
// => 6 (if run in terminal)
// return 5 (if run in node RPL)
// type coercion. 
// in the first snippet, a string and a number are added together, which coerces the number into a string and concotenates the two.
// in the second snippet ++ coerces the string into a number type before performing the addition - HOWEVER the return value is y prior to the operation, not the incremented value
// x+1 is not the same as x++
