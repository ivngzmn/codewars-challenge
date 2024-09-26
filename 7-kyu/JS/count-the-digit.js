/*
You are given a number "n" (n >= 0) and a digit "d" (0 <= d <= 9).

Write a function nbDig(n, d) that finds the square of each integer from 0 to n, and returns the number of times that the digit d appears across all the squares. Note that d might appear multiple times in a single square.

Example:

n=12, d=1
Squares from 0 to n=12: 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144
The function returns 7 because the digit d=1 appears 7 times: in 1, 16, 81, 100, 121 (note: 1 appears twice in 121), and 144.

n=10, d=0
Squares from 0 to n=10: 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
The function returns 3 because the digit d=0 appears 3 times: in 0 and 100 (note: 0 appears twice in 100).
*/

function nbDig(n, d) {
  // ints? y, strings? n, negative ints? n
  // get all of the ints from 0 to n and each n is squared
  // next loop through all of the results arr and find the d in each squared int
  let digitStr = d.toString();
  let count = 0;
  for (let i = 0; i <= n; i++) {
    let squared = (i * i).toString();
    count += squared.split(digitStr).length - 1;
  }

  return count;
}

console.log(nbDig(12, 1), 7, 'n = 12, d = 1');
console.log(nbDig(10, 0), 3, 'n = 10, d = 0');
console.log(nbDig(5750, 0), 4700, 'n = 5750, d = 0');
console.log(nbDig(11011, 2), 9481, 'n = 11011, d = 2');
console.log(nbDig(12224, 8), 7733, 'n = 12224, d = 8');
console.log(nbDig(11549, 1), 11905, 'n = 11549, d = 1');
