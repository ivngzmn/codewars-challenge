/*
Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array.
Examples of returns in different languages:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
or
 a = {"az", "toto", "picaro", "zone", "kiwi"} -->
{{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or 
a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
"(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"
P ints? N, floats? N, array? Y
R return a sequence of concat strings in array separated by ','
E -> See below
P
*/

function partlist(arr) {
  // hold the result
  // loop from 1 to length of list
  // get left part
  // get right part
  // add pair
  // return the result
  const result = [];
  for (let i = 1; i < arr.length; i++) {
    const leftPart = arr.slice(0, i).join(' ');
    const rightPart = arr.slice(i).join(' ');
    result.push([leftPart, rightPart]);
  }
  return result;
}

console.log(partlist(['I', 'wish', 'I', "hadn't", 'come']), [
  ['I', "wish I hadn't come"],
  ['I wish', "I hadn't come"],
  ['I wish I', "hadn't come"],
  ["I wish I hadn't", 'come'],
]);
console.log(partlist(['cdIw', 'tzIy', 'xDu', 'rThG']), [
  ['cdIw', 'tzIy xDu rThG'],
  ['cdIw tzIy', 'xDu rThG'],
  ['cdIw tzIy xDu', 'rThG'],
]);
console.log(partlist(['vJQ', 'anj', 'mQDq', 'sOZ']), [
  ['vJQ', 'anj mQDq sOZ'],
  ['vJQ anj', 'mQDq sOZ'],
  ['vJQ anj mQDq', 'sOZ'],
]);
