/*
title -  firstNotRepeatingCharacter

Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

    For s = "abacabad", the output should be
    solution(s) = 'c'.

    There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

    For s = "abacabaabacaba", the output should be
    solution(s) = '_'.

    There are no characters in this string that do not repeat.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] string s

    A string that contains only lowercase English letters.

    Guaranteed constraints:
    1 ≤ s.length ≤ 105.

    [output] char

    The first non-repeating character in s, or '_' if there are no characters that do not repeat.

*/
//PREP
//

function solution(s) {
  //iterate through string with for loop
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    // console.log(s.indexOf(char), s.lastIndexOf(char));

    // if (s.indexOf(char) == i && s.indexOf(char, i + 1) == -1) { // need to see what is up with this
    if (s.indexOf(char) === s.lastIndexOf(char)) {
      return char;
    }
  }
  return '_';
}

console.log(solution('abacabad')); // "c"
console.log(solution('abacabaabacaba')); // "_"
console.log(solution('z')); // "z"
console.log(solution('bcb')); // "c"
console.log(solution('bcccccccb')); // "_"
console.log(solution('abcdefghijklmnopqrstuvwxyziflskecznslkjfabe')); // "d"
console.log(solution('zzz')); // "_"
console.log(solution('bcccccccccccccyb')); // "y"
console.log(solution('xdnxxlvupzuwgigeqjggosgljuhliybkjpibyatofcjbfxwtalc')); // "d"
console.log(solution('ngrhhqbhnsipkcoqjyviikvxbxyphsnjpdxkhtadltsuxbfbrkof')); // "g"
