/*
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
P strings? N, ints? Y, floats? N, negative ints? Y
R return new arr with length number containing the last even nums
E --> see below
P
*/

function evenNumbers(array, number) {
  // hold the even nums
  // get the arr from params and look for all the even nums and push to nums arr
  // use the num param to slice the array to only get the last nums in arr
  // return the even nums arr
  let even = [];
  for (int of array) {
    if (int % 2 === 0) {
      even.push(int);
    }
  }
  return even.slice(-number);
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]); // return arr [4, 6, 8]
console.log(
  evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2),
  [-8, 26]
); // return [-8, 26]
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]); // [6]
