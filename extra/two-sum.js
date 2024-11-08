// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

// arr? Y, ints? Y -> nothing fishy?
// return sum
// all pairs two numbers -> arr of pair of arrays

function twoSum(arr, sum) {
  // pair arr
  const pairs = [];
  // hash map obj
  const seenNums = {};
  // loop
  for (const currentNum of arr) {
    const diff = sum - currentNum;
    if (seenNums[diff]) {
      pairs.push([currentNum, diff]);
    } else {
      seenNums[currentNum] = true;
    }
  }
  return pairs;
}

console.log(twoSum([1, 2, 2, 3, 4], 4), '[[2,2], [3,1]]');
console.log(twoSum([2, 7, 11, 15], 9), '[[7,2]');
