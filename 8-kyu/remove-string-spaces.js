/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝ ░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
Kata title: Remove String Spaces

Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace(x) {
    return x.split(' ').join('');
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')); // expected result'8j8mBliB8gimjB8B8jlB'

console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')); // expected result '88Bifk8hB8BB8BBBB888chl8BhBfd'

console.log(noSpace('8aaaaa dddd r     ')); // expected result'8aaaaaddddr'
