/*
Task

Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
Notes:

    Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
    Input >> Output Examples

minValue ({1, 3, 1})  ==> return (13)

Explanation:

(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)

Explanation:

(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)

Explanation:

(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications
 P list: Y, ints: Y, strings: N, floats: N
 R --> return the smallest int that can be formed from the list. Note returned int is sorted
 E --> see below
 P
 */

function minValue(values) {
    // hold vals in a set
    // loop through vals and add to set
    // return the set sorted and joined
    return Number(Array.from(new Set(values.sort())).join(''));
}

console.log(minValue([1, 3, 1]), 13);
console.log(minValue([4, 7, 5, 7]), 457);
console.log(minValue([4, 8, 1, 4]), 148);
console.log(minValue([5, 7, 9, 5, 7]), 579);
console.log(minValue([6, 7, 8, 7, 6, 6]), 678);
console.log(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);