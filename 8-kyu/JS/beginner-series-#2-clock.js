/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝ ░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
Kata title: Beginner Series #2 Clock

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
Example:

h = 0
m = 1
s = 1

result = 61000

Input constraints:

    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59

*/

function past(h, m, s) {
  //#Happy Coding! ^_^
  const hickory = h <= 23 ? h * 3600 : 0;
  const dickory = m <= 59 ? m * 60 : 0;
  const dock = s <= 59 ? s * 1 : 0;
  return (hickory + dickory + dock) * 1000;
}

console.log(past(0, 1, 1)); // Expected result 61000
console.log(past(1, 1, 1)); // Expected result 3661000
console.log(past(0, 0, 0)); // Expected result 0
console.log(past(1, 0, 1)); // Expected result 3601000
console.log(past(1, 0, 0)); // Expected result 3600000
console.log(past(-23, 58, 45)); // Expected result 3600000
