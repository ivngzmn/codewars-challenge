/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
Kata title: Sum of differences in array

Description:
Your task is to sum the differences between consecutive pairs in the array in descending order.
Example

[2, 1, 10]  -->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

*/
//PREP
// array? y, nums? y, strings? n, floats? n
// return arr that is subtracts the first num from middle then sub middle num from last num then adds the sum of both equations 

function sumOfDifferences(arr) {
    let sortedArr = arr.sort((a,b) => b - a)

    if(sortedArr.length < 1 ) {
        return 0
    } else { 
       return Math.max(...sortedArr) - Math.min(...sortedArr)
    }
}

console.log(sumOfDifferences([1, 2, 10]), 9)

console.log(sumOfDifferences([]), 0)

console.log(sumOfDifferences([-3, -2, -1]), 2)
console.log(sumOfDifferences([1,6,6,8,14,9,0,3,-7,-4,7,-5,-6,15,4,-5,8]))