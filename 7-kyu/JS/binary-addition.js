/*
Description:

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

Decimal: 	0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10 	11 	12 	13 	14 	15
Binary: 	0 	1 	10 	11 	100 	101 	110 	111 	1000 	1001 	1010 	1011 	1100 	1101 	1110 	1111

*/

function addBinary(a, b) {
  return (a + b).toString(2);
}

console.log(addBinary(1, 1), '10');
console.log(addBinary(5, 9), '1110');
