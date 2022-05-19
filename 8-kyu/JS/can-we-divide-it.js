/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/5a2b703dc5e2845c0900005a
Kata title: Can we divide it?

Instructions
Your task is to create the function isDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

A few cases:


(-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false

(45, 1, 6)    ->  false
(45, 5, 15)   ->  true

(4, 1, 4)     ->  true
(15, -5, 3)   ->  true
*/
//PREP
// whole nums? Y, negative nums? Y, non nums? N, float nums? N
// return true if num is divisible by a and b

function isDivideBy(num, a, b) {
    // check if num is divisible by both a and b
    return num % a === 0 && num % b === 0;
}
console.log(isDivideBy(-12, 2, -6)); //->  true
console.log(isDivideBy(-12, 2, -5)); //->  false

console.log(isDivideBy(45, 1, 6)); //->  false
console.log(isDivideBy(45, 5, 15)); //->  true

console.log(isDivideBy(4, 1, 4)); //->  true
console.log(isDivideBy(15, -5, 3)); //->  true
