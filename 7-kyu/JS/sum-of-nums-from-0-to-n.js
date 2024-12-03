/*
Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.
Example:

Input:

> 6

Output:

    0+1+2+3+4+5+6 = 21

Input:

> -15

Output:

    -15<0

Input:

> 0

Output:

    0=0

P
R
E
P
*/

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    // Handle negative numbers
    if (count < 0) return `${count}<0`;

    // Handle zero
    if (count === 0) return '0=0';

    // Generate sequence and calculate sum
    let sequence = [];
    let sum = 0;

    for (let i = 0; i <= count; i++) {
      sequence.push(i);
      sum += i;
    }

    return sequence.join('+') + ' = ' + sum;
  };

  return SequenceSum;
})();

console.log(SequenceSum.showSequence(6), '0+1+2+3+4+5+6 = 21');
console.log(SequenceSum.showSequence(-15), '-15<0');
console.log(SequenceSum.showSequence(0), '0=0');

// one of the worst descriptions I have come across
