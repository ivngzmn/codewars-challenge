/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
Kata title: Testing 1-2-3

Instructions
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
*/
//PREP
// Numbers? Nah, Strings? Yeah, Symbols? Nah.
// We are getting back key and pair values. Each letter in the array will return it's key value. array index +1
// see example bellow

const number = function (array) {
    // loop maybe map through and get the key of each index and add one
    return array.map((el, i, num) => `${i + 1}: ${el}`);
    // get each number we get back
    // then add ':' and
    // then add the letter
};

console.log(number([])); // --> []
console.log(number(['a', 'b', 'c'])); // --> ['1: a', '2: b', '3: c']
