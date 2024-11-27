/*
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

    Take a list of ages when each of your great-grandparent died.
    Multiply each number by itself.
    Add them all together.
    Take the square root of the result.
    Divide by two.

Example

predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
P ints? Y, floats? N, strings? N
R return the predicted age
E --> see below
P
*/

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  // multiply each age by 2
  //   console.log(...arguments);
  let args = arguments;
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i] * args[i];
  }

  // sum all the ages
  // then get the square root of the sum
  // divide that by 2
  // return the predicted age

  return Math.floor(Math.sqrt(sum) / 2);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86);
