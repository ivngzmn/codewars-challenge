/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝ ░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/55908aad6620c066bc00002a
Kata title: Exes and Ohs

Instructions
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    let exes = 0;
    let ohs = 0;
    //loop over string
    str.split('').forEach((char) => {
        exes += char.toLowerCase() === 'x' ? 1 : 0;
        ohs += char.toLowerCase() === 'o' ? 1 : 0;
    });
    return exes === ohs ? true : false;
}

console.log(XO('ooxx'), true); // true
console.log(XO('xooxx'), false); // false
console.log(XO('ooxXm'), true); // true
console.log(XO('zpzpzpp'), true); // true
console.log(XO('zzoo'), false); // false
console.log(XO('xo'), true); // true
console.log(XO('xxOo'), true); // true
console.log(XO('xxxm'), false); // false
console.log(XO('Oo'), false); // false
console.log(XO('ooom'), false); // false
