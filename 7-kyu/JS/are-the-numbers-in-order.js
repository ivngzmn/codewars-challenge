/*
Are the numbers in order?

In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

For example:

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array. 
P ints? Y, strings? N, floats? N
R return true if arr is in ASC order
E --> see below
P
*/

function inAscOrder(arr) {
  // note: ensure not to mutate the original array
  // check arr length arr length <= 1 return true
  if (arr.length <= 1) {
    return true;
  }
  // loop through arr
  for (let i = 0; i < arr.length; i++) {
    // if current val > next val return false
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  // return true
  return true;
  // this solution runs in O(n) as we do not need to do any sorting

  //   return (
  //     Array(...arr)
  //       .sort((a, b) => a - b)
  //       .toString() === arr.toString()
  //   );
}

console.log(inAscOrder([1, 2, 3, 4, 7, 19]), true); // return true
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]), false); // return false
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]), false); // return false

// current solution O(n log n) due to sorting
