/* 6. Reimplement the factorial function from exercise 2 using recursion. Once again, you may assume that the argument is always a positive integer. */

let factorial = num => {
 if (num < 6) {
    factorial(num);

    }
    /* let total = 1;
    for (let i = 1; i <= num ; i++) {
        total *= i;
        console.log(total);
    }
    return total; */
}

factorial(5);