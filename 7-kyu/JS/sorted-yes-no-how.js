/*
Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.
P ints? Yes, floats? No, negative? Yes, strings? No
R return if sorted in asc/desc or not sorted
E --> see below
P
*/

function isSortedAndHow(array) {
  // check if array is in asc order and return 'yes, ascending'
  // check if arr is in desc order and return 'yes, descending'
  // else return 'no'
  const ascending =
    array
      .slice()
      .sort((a, b) => a - b)
      .join('') === array.join('');
  const descending =
    array
      .slice()
      .sort((a, b) => a - b)
      .reverse()
      .join('') === array.join('');

  if (ascending) {
    return 'yes, ascending';
  } else if (descending) {
    return 'yes, descending';
  } else {
    return 'no';
  }
}

console.log(isSortedAndHow([1, 2]), 'yes, ascending');
console.log(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
console.log(isSortedAndHow([4, 2, 30]), 'no');
