/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
P ints? N, strings? Y
R return only string with words as they appear in the main str not in alphabetical order
E --> see below
P
*/

function removeDuplicateWords(s) {
  // get string and split it by spaces
  // set a hash map or use Set
  // return the joined str with the removed dup str
  let words = s.split(' ');
  let hash = {};
  for (let word of words) {
    hash[word] = true;
  }
  return Object.keys(hash).join(' ');
}

console.log(
  removeDuplicateWords(
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  ),
  'alpha beta gamma delta'
);
