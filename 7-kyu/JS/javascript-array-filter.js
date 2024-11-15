/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:
getEvenNumbers([2,4,5,6]) // should == [2,4,6]
P strings? N, ints? Y, floats? N
R return only even ints in the array
E --> see below
P -->
 */

function getEvenNumbers(numbersArray) {
    // get arr and use the filter method
    // use the mod to check if int is even
    // return only the even ints in arr
    return numbersArray.filter(num => num % 2 === 0)
}

console.log(getEvenNumbers([1,2,3,4,5,6])); // return 2, 4, 6