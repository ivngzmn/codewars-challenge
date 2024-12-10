/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
Example

n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

P strings? N, ints? Y, floats? N
R return shape that is as long and wide as provided int
E --> see below
P 
*/

function generateShape(integer) {
  // store the width of the shape
  // loop through each width until we reach int height
  let width = '';
  let height = '';
  for (let i = 1; i <= integer; i++) {
    width += '+';
  }
  for (let j = 1; j <= integer; j++) {
    if (j === 1) {
      height += width;
    } else {
      height += '\n' + width;
    }
  }

  return height;
}

console.log(generateShape(8));
console.log(generateShape(3));
console.log(generateShape(2));
