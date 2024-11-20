/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]

So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.
P ints? Y, Strings? N, floats? N, empty arr? N
R return sum of all the min ints in each array
E --> see below
P 
 */

function sumOfMinimums(arr) {
    // hold the sum
    let sum = 0; 
    // loop through each array and find the Math min and then add to the sum
    arr.forEach((item) => sum += Math.min(...item))
    // return the sum
    return sum;
}

console.log(sumOfMinimums([[1,2,3,4,5], [5, 6, 7, 8, 9], [20, 21, 34, 56, 100]]), 26) // return 26 as we get the smallest int of each array and sum them

