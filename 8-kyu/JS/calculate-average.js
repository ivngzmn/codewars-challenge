/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝ ░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
Kata title: Calculate Average

Description:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

function find_average(arr) {
    return arr.length > 0
        ? arr.reduce((acc, curr) => acc + curr, 0) / arr.length
        : 0;
}

console.log(find_average([1, 1, 1]), 1);
console.log(find_average([]), 0);
console.log(find_average([1, 2, 3]), 2);
console.log(find_average([1, 2, 3, 4]), 2.5);
console.log(
    find_average([67, 12, 58, 61, 19, 71, 100, 25, 20, 80, 64, 76, 46]),
    53.76923076923077
);
