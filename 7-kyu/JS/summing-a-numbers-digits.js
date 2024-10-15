/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5

Let's assume that all numbers in the input will be integer values.
*/

function sumDigits(number) {
  //ints only
  // split up the individual int and convert back to ints
  // ignore any values that are NAN
  // return sum the total of the ints
  let intsArr = number
    .toString()
    .split('')
    .map(Number)
    .filter((num) => !isNaN(num)); // alt can have the initial number converted to it's absolute value
  return intsArr.reduce((acc, curr) => acc + curr);
}

console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);
