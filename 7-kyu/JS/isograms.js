/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝ ░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/54ba84be607a92aa900000f1
Kata title: Isograms

Instructions
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/

function isIsogram(str) {
    // create our hashmap/dictionary
    let hash = {};
    // have string set to be case insensitive
    str = str.toLowerCase();
    // loop through str
    for (let i = 0; i < str.length; i++) {
        if (hash[str[i]]) {
            return false;
        }
        hash[str[i]] = true;
    }
    return true;
}

// another great solution that uses Set
// function isIsogram(str) {
//     return new Set(str.toUpperCase()).size == str.length;
// }

console.log(isIsogram('Dermatoglyphics'), true);
console.log(isIsogram('aba'), false);
console.log(isIsogram('moOse'), false);
console.log(isIsogram(''), true);
