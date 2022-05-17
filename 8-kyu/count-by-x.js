/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/5513795bd3fafb56c200049e
Kata title: Count by X

Description:
Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

//PREP
//create function that takes in two arguments that will return an array.
// params: whole num? Y, negative num? N, strings? N
// return: array will return first num and the multiples of second num

function numMultCount(num1, num2) {
    //define arr
    let arr = [];
    //loop: get 1st num1 and push to arr the multiples of num1 * num2
    for (let i = 1; i <= num2; i++) {
        arr.push(num1 * i);
    }
    //return our arr
    return arr;
}

console.log(numMultCount(1, 2)); // 1,2
console.log(numMultCount(3, 12)); // 3,6,9,12,15...
console.log(numMultCount(1, 10)); // 1,2,3,4,5,6,7,8,9,10
console.log(numMultCount(2, 5)); // 2,4,6,8,10
