/* 
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

*/

function rowSumOddNumbers(n) {
  // ints only, positive ints,
  // sum arr
  // go to the row of the triangle index
  // then get the odd ints pushed to the arr
  // return sum of odd ints
  // but it's a triangle so we don't need to get into the weeds with the loops and push to the arr etc...
  return n * n * n;
}

console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(42), 74088);
console.log(rowSumOddNumbers(2), 8);
