/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
P strings? N, ints? Y, floats? N
R return the factorial of the int
E --> see below
P 
 */

function factorial(n) {
  // hold the total to be 1
  // loop through the int until reached
  // return the total
  let total = 1;
  for (let i = 0; i < n; i++) {
    total += total * i;
  }
  return total;
}

console.log(factorial(0), 1); // return 1
console.log(factorial(1), 1); // return 1
console.log(factorial(7), 5040); // return 5040 ...
console.log(factorial(18), 6402373705728000);
