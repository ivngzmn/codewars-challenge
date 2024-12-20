/*
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
P strings? N, floats? N, ints? Y, negative ints? N
R return the greatest common divisor of the two param ints
E --> see below
P
*/

function mygcd(x, y) {
    // init gcd to 1
    // loop from 1 to the min of x and y
    // check if i divides both x and y without leaving a remainder
    // if true update gcd to i
    // return the value of the gcd
    // let gcd = 1
    // for (let i = 1; i <= Math.min(x, y); i++) {
    //     if (x % i === 0 && y % i === 0) {
    //         gcd = i
    //     }
    // }
    // return gcd // this code times out as it is not efficient but is a brute force option best to use an alternative. Had to look up a solution that ended up using the euclidean algo with recursion
    if (y === 0) {
        return x
    }
    return mygcd(y, x % y)
}

console.log(mygcd(30, 12), 6)
console.log(mygcd(36, 12), 12)
console.log(mygcd(8, 9), 1)