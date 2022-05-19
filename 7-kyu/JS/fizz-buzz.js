/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/5300901726d12b80e8000498
Kata title: Fizz Buzz

Instructions
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

    If the value is a multiple of 3: use the value "Fizz" instead
    If the value is a multiple of 5: use the value "Buzz" instead
    If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/
//PREP
// whole nums? Y, non nums? N, floats? N, taking in array, return a console? Y
// return Fizz if num is divisible by 3, return Buzz if divisible by 5, return FizzBuzz is divisible by 3 and 5

function fizzBuzz(n) {
    // set our array
    let arr = [];
    //loop through arr
    for (let i = 1; i <= n; i++) {
        // n % 3 and n % 5 return FizzBuzz
        if (i % 15 === 0) {
            arr.push('FizzBuzz');
            // n % 3 return Fizz
        } else if (i % 3 === 0) {
            arr.push('Fizz');
        } else if (i % 5 === 0) {
            // n % 5 return Buzz
            arr.push('Buzz');
        } else {
            // return num
            arr.push(i);
        }
    }
    return arr;
}

console.log(fizzBuzz(15)); // arr 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 9, 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'
