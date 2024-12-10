/*
Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.
P strings? N, ints? Y, floats? N
R return num of red beads
E --> see below
P 
*/

function countRedBeads(n) {
  // if less than two blue beads return 0
  // for every two blue beads there will be two red beads between them
  let redBeads = 0;

  if (n < 2) {
    return redBeads;
  }

  for (let i = 1; i < n; i++) {
    redBeads += 2;
  }

  return redBeads;
}

console.log(countRedBeads(0), 0);
console.log(countRedBeads(1), 0);
console.log(countRedBeads(3), 4);
console.log(countRedBeads(5), 8);
console.log(countRedBeads(6), 10);
