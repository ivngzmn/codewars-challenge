/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/5772da22b89313a4d50012f7
Kata title: Grasshopper - Personalized Message

Description:
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:
case                return
name equals owner 	'Hello boss'
otherwise       	'Hello guest'
*/
//PREP
// take some notes
// print string, name = owner 'Hello boss', name != owner 'Hello guest'
//P: given a string, number? no, anything else being passed? no,
//R: console.log? yes,
//E:
//P:
function greet(name, owner) {
    // check if name === owner
    return name === owner ? 'Hello boss' : 'Hello guest';
    // console.log "Hello boss"
    // else console.log "Hello guest"
}

console.log(greet(`Daniel`, `Daniel`)); // 'Hello boss'
console.log(greet(`Ashley`, `Daniel`)); // 'Hello guest'
console.log(greet(`Bob`, `Daniel`)); // 'Hello guest'
