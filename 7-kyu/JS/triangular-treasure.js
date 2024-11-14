/*
triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6) 4th (10)
*          **        ***     ****
           *         **      ***
                     *       **
                             *

You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0

P strings? N, Floats? N, Ints? Y, negative ints? Y
R return the triangular num, if out of range return 0
E --> see below
P
 */

function triangular(n) {
    if (n < 0) {
        return 0;
    }
    return (n * (n + 1)) / 2;
}

console.log(triangular(2), 3) // return 3
console.log(triangular(1), 1) // return 1
console.log(triangular(4), 10) // return 10
console.log(triangular(-454), 0)
console.log(triangular(3), 6) // return 6
console.log(triangular(56782037))

// O(1) solution with the use of the formula.
// The brute force solution using a for loop or using recursion is not recommended for the large numbers in the test