/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
Example:

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

Bash note:

    input : 2 strings with substrings separated by ,
    output: number as a string
P strings? Y, ints? N, floats? N
R return -1 if either array is empty else return the maximum length difference?
E
P
*/

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }
  let min1 = Infinity,
    max1 = -Infinity;
  let min2 = Infinity,
    max2 = -Infinity;

  for (let s of a1) {
    min1 = Math.min(min1, s.length);
    max1 = Math.max(max1, s.length);
  }
  for (let s of a2) {
    min2 = Math.min(min2, s.length);
    max2 = Math.max(max2, s.length);
  }

  return Math.max(Math.abs(max1 - min2), Math.abs(max2 - min1));
}

console.log(mxdiflg([], []));
console.log(
  mxdiflg(
    [
      'hoqq',
      'bbllkw',
      'oox',
      'ejjuyyy',
      'plmiis',
      'xxxzgpsssa',
      'xxwwkktt',
      'znnnnfqknaz',
      'qqquuhii',
      'dvvvwz',
    ],
    ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww']
  )
);
