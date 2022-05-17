/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝ ░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
Kata title: Convert a String to a Number!

Note: This kata is inspired by Convert a Number to a String!. Try that one too.
Description

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
Examples

"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/

const stringToNumber = function (str) {
  // put your code here
  return Number(str); //
};

console.log(stringToNumber("1234")); // Expected result 1234
console.log(stringToNumber("605")); // Expected result 605
console.log(stringToNumber("1405")); // Expected result 1405
console.log(stringToNumber("-7")); // Expected result -7

// Alt solution
// return +str;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
