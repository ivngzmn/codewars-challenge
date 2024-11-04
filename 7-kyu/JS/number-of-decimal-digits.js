/*
Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.
P strings? N, ints? Y, floats? N, negative ints? N
R num of digits
E -> see below
P
*/

function digits(n) {
  // get the in and use string method to split the digit into arr of sub strings
  // get the length of the arr
  // return length
  return n.toString().split('').length;
}

console.log(digits(0), 1); // 1 digit
console.log(digits(66), 2); // 2 digits
console.log(digits(12345), 5); // 5 digits
console.log(digits(12345678), 8); // 8 digits
