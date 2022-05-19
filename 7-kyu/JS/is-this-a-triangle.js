/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/56606694ec01347ce800001b
Kata title: Is this a triangle?

Instructions
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/
//PREP
// whole nums? Y, negative nums? Y? Non nums? N, surface > 0 to
// returning bool true if triangle can be built and false in any other case. Okay to console? Y
//

function isTriangle(a, b, c) {
    // check if num > 0 else return false
    if (a > 0 && b > 0 && c > 0) {
        // check if two lengths > third side then return true else return false
        if (a + b > c && b + c > a && a + c > b) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}

console.log(isTriangle(1, 2, 2)); // return true
console.log(isTriangle(7, 2, 2)); // return false
console.log(isTriangle(7, 2, -2)); // return false
