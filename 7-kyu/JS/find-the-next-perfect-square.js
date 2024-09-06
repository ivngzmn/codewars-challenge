/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
Examples ( Input --> Output )

121 --> 144
625 --> 676
114 --> -1  #  because 114 is not a perfect square

*/

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  // check if perfect square
  const isSquare = Number.isInteger(Math.sqrt(sq));
  if (isSquare) {
    return (sq ** 0.5 + 1) ** 2;
  }
  return -1;
}

console.log(findNextSquare(121), 144, 'Wrong output for 121');
console.log(findNextSquare(625), 676, 'Wrong output for 625');
console.log(findNextSquare(319225), 320356, 'Wrong output for 319225');
console.log(
  findNextSquare(15241383936),
  15241630849,
  'Wrong output for 15241383936'
);

console.log(findNextSquare(155), -1, 'Wrong output for 155');
console.log(findNextSquare(342786627), -1, 'Wrong output for 342786627');
