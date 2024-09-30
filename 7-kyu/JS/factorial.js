/*
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

More details about factorial can be found here.
*/

function factorial(n) {
  // if input is less than 0 or greater than 12 return RangeError
  let total = 1;
  if (n < 0 || n > 12) {
    throw RangeError();
  }
  for (let i = 1; i < n; i++) {
    total += total * i;
  }
  return total;
}

console.log(factorial(0), 1, 'factorial for 0 is 1');
console.log(factorial(1), 1, 'factorial for 1 is 1');
console.log(factorial(2), 2, 'factorial for 2 is 2');
console.log(factorial(3), 6, 'factorial for 3 is 6');
console.log(factorial(4), 24, 'factorial for 4 is 24');
console.log(factorial(5), 120, 'factorial for 5 is 120');
console.log(factorial(12), 479001600);
console.log(factorial(15), 'Range Error', 'Not in Range');
console.log(factorial(-13), 'Range Error', 'Not in Range');
