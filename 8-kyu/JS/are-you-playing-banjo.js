/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/53af2b8861023f1d88000832
Kata title: Are You Playing Banjo?

Description:

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.

*/

function areYouPlayingBanjo(name) {
    return name[0].toLowerCase() === 'r'
        ? `${name} plays banjo`
        : `${name} does not play banjo`;
    // first attempt
    // return name.toLowerCase().split('').indexOf('r') === 0
    //     ? `${name} plays banjo`
    //     : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo('Adam'), 'Adam does not play banjo');
console.log(areYouPlayingBanjo('Paul'), 'Paul does not play banjo');
console.log(areYouPlayingBanjo('Ringo'), 'Ringo plays banjo');
console.log(areYouPlayingBanjo('bravo'), 'bravo does not play banjo');
console.log(areYouPlayingBanjo('rolf'), 'rolf plays banjo');
