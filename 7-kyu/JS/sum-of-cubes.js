/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

P floats? N, ints? Y, strings? N
R return sum of cubes
E --> see below
P 
*/

function sumCubes(n) {
  // hold sum
  let sum = 0;
  // loop until we get to the num and add the cubes to sum
  for (let i = 1; i <= n; i++) {
    sum += i ** 3;
  }
  // return sum
  return sum;
}

console.log(sumCubes(2), 9); // return 9
console.log(sumCubes(3), 36); // 36
