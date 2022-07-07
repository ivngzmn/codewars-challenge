/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝ ░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/56582133c932d8239900002e/train/javascript
Kata title: Find Count of Most Frequent Item in an Array

Instructions
Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
Example

input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 

The most frequent number in the array is -1 and it occurs 5 times.
*/
// PREP
// a place to store the num occurrences
// iterate over the collection
// if the item has been seen before
// increment the stored count
// else
// add this item to the num of occurrences variable
// set the count to 1
// if the count of this item is larger than the current highest count num, replace that item
// return the highest count
function mostFrequentItemCount(collection) {
  const counts = {};
  let currentHighest = 0;
  for (let i = 0; i < collection.length; i += 1) {
    const item = collection[i];
    if (counts[item]) {
      counts[item] += 1;
    } else {
      counts[item] = 1;
    }
  }
  if (!currentHighest || currentHighest.counts < counts[item]) {
    currentHighest = counts[item];
  }
  return currentHighest;
}

console.log(mostFrequentItemCount([3, -1, -1]), 2);
console.log(
  mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]),
  5
);
