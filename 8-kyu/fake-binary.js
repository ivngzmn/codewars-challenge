/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝ ░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
Kata title: Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/
function fakeBin(x) {
  return x
    .split("")
    .map((num) => (num < 5 ? 0 : 1))
    .join("");
}
console.log(fakeBin("45385593107843568")); // expected result should be 01011110001100111
console.log(fakeBin("509321967506747")); // expected result should be 101000111101101
console.log(fakeBin("366058562030849490134388085")); // expected result should be 011011110000101010000011011

// alternative solution
// function fakeBin(x){
//   let result = '';
//   for(let i = 0; i < x.length; i++){
//     x[i] < 5 ? result += 0 : result += 1;
//   }
//   return result;
// }
