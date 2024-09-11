/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

function reverseWords(str) {
  // no ints
  // get each word and split the letters
  // from there reverse the words not the whole string
  // return the reversed words in the string
  const sentence = str.split(' ');
  let reversed = [];
  for (let i = 0; i < sentence.length; i++) {
    reversed.push(sentence[i].split('').reverse().join(''));
  }

  return reversed.join(' ');
}

console.log(reverseWords('This is an example text!'));
console.log(reverseWords('double  spaces'));
console.log(reverseWords('Hello World!'));

console.log(
  reverseWords('The quick brown fox jumps over the lazy dog.'),
  'ehT kciuq nworb xof spmuj revo eht yzal .god'
);
console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
