// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

//fib -> num > that many nums in the fib sequence
//return last num in seq

function fib(numGenerated) {
  let sequence = [0, 1];

  for (let i = 2; i <= numGenerated; i++) {
    let a = sequence[i - 1];
    let b = sequence[i - 2];
    sequence.push(a + b);
  }
  return sequence[numGenerated];
}

console.log(fib(3), '2');
console.log(fib(4), '3');
console.log(fib(7), '13');

//0,1,1,2,3,5,8,13
//F(3) -> 2
//F(4) -> 3
