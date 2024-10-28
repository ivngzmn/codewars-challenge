/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.

P ints? N, array? N, strings? Y, case sensitive? Y
R returns int of how many jewels are in the stones
E -> see below
P
*/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return
 */

var numJewelsInStones = function (jewels, stones) {
  // hold a map of the jewels
  // loop through the stones to find the jewels
  // return the number of jewels found
  let map = {};
  let count = 0;
  for (const jewel of jewels) {
    map[jewel] = true;
  }
  for (const stone of stones) {
    if (map[stone]) {
      count++;
    }
  }
  return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'), 3); // return 3 jewels in the stones
console.log(numJewelsInStones('z', 'ZZ'), 0); // return 0 jewels in the stones

// complexity is o(m + n)
