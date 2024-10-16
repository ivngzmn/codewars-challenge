/*
Task

Given a string str, reverse it and omit all non-alphabetic characters.
Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".
Input/Output

    [input] string str

A string consists of lowercase latin letters, digits and symbols.

    [output] a string

*/

function reverseLetter(str) {
  //params: strings, alphabetical letters, symbols, ints? n
  // return reversed string
  // pseudo
  // get string and split it
  // filter out any non alphabetical chars
  // return the reversed string
  let reversed = str
    .split('')
    // .filter((char) => /[a-zA-Z]/.test(char)) // with regex
    .filter((char) => char >= 'a' && char <= 'z') // without regular expression
    .reverse()
    .join('');
  return reversed;
}

console.log(reverseLetter('krishan'), 'nahsirk'); // Example reversed string

console.log(reverseLetter('ultr53o?n'), 'nortlu');

console.log(reverseLetter('ab23c'), 'cba');

console.log(reverseLetter('krish21an'), 'nahsirk');
