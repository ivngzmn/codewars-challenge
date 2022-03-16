/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝ ░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
Kata title: Simple multiplication
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/
function simpleMultiplication(number) {
  // your code........
  return number % 2 === 0 ? number * 8 : number * 9;
}

console.log(simpleMultiplication(2)); // result should return 16
console.log(simpleMultiplication(1)); // result should return 9
console.log(simpleMultiplication(8)); // result should return 64
console.log(simpleMultiplication(4)); // result should return 32
console.log(simpleMultiplication(5)); // result should return 45
