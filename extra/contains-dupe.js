/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
P array? Y, ints? Y, mixed with strings? N
R return true if dupe found else false
E
P
*/

function containsDupe(arr) {
  // set hash map
  const numsMap = {};
  // loop through provided int array to set
  for (num of arr) {
    if (numsMap[num]) {
      return true;
    } else {
      numsMap[num] = true;
    }
  }
  return false;
  // return new Set(arr).size !== arr.length;
}

console.log(containsDupe([1, 2, 3, 1]), true); // true 1 is dupe
console.log(containsDupe([1, 2, 3, 4]), false); // false no dupes
console.log(containsDupe([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true); // true 1, 3, 4, 2 are dupes

// time complexity is linear time o(n)
