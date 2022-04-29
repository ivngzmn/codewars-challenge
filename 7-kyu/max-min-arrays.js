/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝ ░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/5a090c4e697598d0b9000004
Kata title: Max-min arrays

Instructions
In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]

The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

More examples in the test cases.

Good luck!

*/

function solve(arr) {
    arr = arr.sort((a, b) => b - a);
    const length = arr.slice().length;
    const arr1 = [];
    for (let i = 0; i < length; i++) {
        arr1.push(arr.shift());
        arr1.push(arr.pop());
    }
    return arr1.filter((v) => v != undefined);
}

console.log(solve([15, 11, 10, 7, 12]), [15, 7, 12, 10, 11]);
console.log(solve([91, 75, 86, 14, 82]), [91, 14, 86, 75, 82]);
console.log(solve([84, 79, 76, 61, 78]), [84, 61, 79, 76, 78]);
console.log(solve([52, 77, 72, 44, 74, 76, 40]), [77, 40, 76, 44, 74, 52, 72]);
console.log(solve([1, 6, 9, 4, 3, 7, 8, 2]), [9, 1, 8, 2, 7, 3, 6, 4]);
console.log(
    solve([78, 79, 52, 87, 16, 74, 31, 63, 80]),
    [87, 16, 80, 31, 79, 52, 78, 63, 74]
);
