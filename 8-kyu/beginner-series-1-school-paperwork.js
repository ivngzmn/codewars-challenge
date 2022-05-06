/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝ ░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd
Kata title: Beginner Series #1 School Paperwork

Description:
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
Example:

n= 5, m=5: 25
n=-5, m=5:  0

Waiting for translations and Feedback! Thanks!

*/

function paperwork(n, m) {
    let classMates = n >= 0 ? n : 0;
    let pages = m >= 0 ? m : 0;
    return classMates * pages;
}

// alt solution for one liner but not as clear
// function paperwork(n, m) {
//     return n >= 0 && m >= 0 ? n * m : 0;
// }

console.log(paperwork(5, 5), 25, 'Failed at paperwork(5, 5)');
console.log(paperwork(5, -5), 0, 'Failed at paperwork(5, -5)');
console.log(paperwork(-5, -5), 0, 'Failed at paperwork(-5, -5)');
console.log(paperwork(-5, 5), 0, 'Failed at paperwork(-5, 5)');
console.log(paperwork(5, 0), 0, 'Failed at paperwork(5, 0)');
