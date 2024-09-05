/*
Description:

Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.
Examples

1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3
*/

function getRealFloor(n) {
  if (n <= 13 && n > 0) {
    return Math.floor(n - 1);
  } else if (n >= 13) {
    return Math.floor(n - 2);
  }
  return n;
}

console.log(getRealFloor(1), 0);
console.log(getRealFloor(0), 0);
console.log(getRealFloor(5), 4);
console.log(getRealFloor(15), 13);
console.log(getRealFloor(-2), -2);
console.log(getRealFloor(-1), -1);
console.log(getRealFloor(16), 14);
console.log(getRealFloor(12), 11);
