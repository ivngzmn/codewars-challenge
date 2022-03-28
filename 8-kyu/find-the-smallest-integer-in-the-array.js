/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝ ░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
Kata title: Find the smallest integer in the array

Given an array of integers your solution should find the smallest integer.

For example:

    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/

function findSmallestInt(args) {
    return Math.min(...args);
}

console.log(findSmallestInt([78, 56, 232, 12, 8])); // 'Should return the smallest int 8'
console.log(findSmallestInt([78, 56, 232, 12, 18])); // 'Should return the smallest int 12'
console.log(findSmallestInt([78, 56, 232, 412, 228])); // 'Should return the smallest int 56'
console.log(findSmallestInt([78, 56, 232, 12, 0])); // 'Should return the smallest int 0'
console.log(findSmallestInt([1, 56, 232, 12, 8])); // 'Should return the smallest int 1'
