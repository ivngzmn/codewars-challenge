/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

getAverage([2,2,2,2]),2)
getAverage([1,2,3,4,5,]),3);
getAverage([1,1,1,1,1,1,1,2]),1)

past constant time / past linear time
inputs and operations
bigO: plain lang to describe time and space


Params: arrs? y, ints: y
Return: int that is ave -> rounded down (Math.floor)
Example:
Pseudo code: 
*/

function getAverage(arr) {
  // get the ave by looping through and add to sum
  // sum / length of arr -> round down
  // return ave rounded down
  // time complexity for reduce is o(n)
  return Math.floor(arr.reduce((a, c) => a + c) / arr.length);
}

// examples
console.log(getAverage([2, 2, 2, 2]), 2); // return 2
console.log(getAverage([1, 2, 3, 4, 5]), 3); // return 3 (could use gauss's trick for this)
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1); // return 1
