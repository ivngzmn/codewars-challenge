/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝ ░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
Kata title: Even or Odd

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function even_or_odd(number) {
  // your code
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(even_or_odd(2)); // expected result "Even"
console.log(even_or_odd(7)); // expected result "Odd"
console.log(even_or_odd(-42)); // expected result "Even"
console.log(even_or_odd(-7)); // expected result "Odd"
console.log(even_or_odd(0)); // expected result "Even"
