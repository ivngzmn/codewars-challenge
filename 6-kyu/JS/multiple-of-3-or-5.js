/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
P int? Y, negative ints? Y, floats? N, Strings? N
R return sum of all multiples
E -> see below
P
*/

function solution(number) {
  // create a new set
  // set sum to 0
  // loop to get the natural nums that are below the param
  // sum all of the ints in the set
  // return the sum
  //   let nums = new Set();
  //   let sum = 0;
  //   // if int is negative the loop will not run and we get the 0 sum
  //   for (let i = 1; i < number; i++) {
  //     if (i % 5 === 0) {
  //       nums.add(i);
  //     } else if (i % 3 === 0) {
  //       nums.add(i);
  //     }
  //   }
  //   for (const num of nums) {
  //     sum += num;
  //   }
  //   return sum;
  if (number < 0) {
    return 0;
  }
  function sumOfMultiples(x) {
    const k = Math.floor((number - 1) / x);
    return (x * k * (k + 1)) / 2;
  }
  return sumOfMultiples(3) + sumOfMultiples(5) - sumOfMultiples(15);
}

console.log(solution(10), 23); // sum of nums 3, 5, 6, 9
console.log(solution(-10), 0);
console.log(solution(-20), 0);
console.log(solution(15), 45);
// runtime is o(n) with the two loops
// runtime of optimized solution is o(1)
