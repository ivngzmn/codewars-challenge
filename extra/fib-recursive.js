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

//fib -> num > that many nums in the fib sequnce
//return last num in seq

// function fib(numsGenerated){
//   let sequence = [0,1]
//   for(let i = 2; i <= numsGenerated; i++){
//     let a = sequence[i - 1]
//     let b = sequence[i - 2]
//     sequence.push(a + b)
//   }
//   return sequence[numsGenerated]
// }

// console.log( fib(3), '2')
// console.log( fib(5), '5')
// console.log( fib(7), '13')

//0,1,1,2,3,5,8,13
//F(3) -> 2
//F(4) -> 3

// function countDown(n) {
//   if (n === 0) {
//     console.log('DONEZO!!');
//   } else {
//     console.log(n);
//     countDown(n - 1);
//   }
// }

// countDown(3);

function fib(n) {
  // base case
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));

/*
                  5
                /   \
             /        \
            4          3
           / \       /   \
        3    2      2    1
       / \   / \   / \
      2  1  1  0  1  0
    / \
   1   0
*/

// divide and conquer
// tree traversal
// maze/trace
// folder structures
// need to add memoization
