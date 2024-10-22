/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

function noOdds(values) {
  //P array: y, ints in array: y, strings in arr: n
  //R return only the even ints in the array
  //P filter out the odd ints in the array
  //return the array with the only even ints

  return values.filter((num) => num % 2 === 0);
}

console.log(noOdds([0, 1]), [0]); // E -> return [0]
console.log(noOdds([0, 1, 2, 3]), [0, 2]); // -> return [0, 2]
console.log(noOdds([0, 1, 2, 3, 4, 5, 6]), [0, 2, 4, 6]);
