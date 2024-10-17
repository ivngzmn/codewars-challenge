/*
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.

Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/

function roundToNext5(n) {
  //Params => ints: y, strings: n, floats: n
  // get int check if int mod 5 if so return int
  // else increase by 1 until mod 5 no remainder
  // return new int
  let next5 = n;

  if (next5 % 5 === 0) {
    return next5;
  }

  //o(n) linear
  for (let i = next5; i % 5 !== 0; i++) {
    next5 += 1;
  }

  return next5;
}

console.log(roundToNext5(0), 0); // stay
console.log(roundToNext5(2), 5); // round up
console.log(roundToNext5(3), 5); // round up
console.log(roundToNext5(12), 15); // round up
console.log(roundToNext5(21), 25);
console.log(roundToNext5(30), 30);
console.log(roundToNext5(-2), 0);
console.log(roundToNext5(-5), -5);
