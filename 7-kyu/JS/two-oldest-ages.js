/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]

P ints: y, mixed: n
R two oldest ages in an array
E 
P

*/

function twoOldestAges(ages) {
  // oldestAges in a var
  // from there we are going to sort the array
  // then we will get the 1st oldest age then the second oldest age and push to oldestAges array
  // return oldest ages
  let oldestAges = [];
  let sortedAges = ages.sort((a, b) => a - b);

  oldestAges.push(sortedAges[sortedAges.length - 2]);
  oldestAges.push(sortedAges[sortedAges.length - 1]);

  return oldestAges;

  // simpler solution would be return ages.sort((a,b) => a - b).slice(-2);
}

console.log(twoOldestAges([1, 2, 10, 8]), [8, 10]); // return 8 and 10 in arr
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]), [45, 87]); // return  45 and 87 in array
console.log(twoOldestAges([1, 3, 10, 0]), [3, 10]); // return 3 and 10 in an array
