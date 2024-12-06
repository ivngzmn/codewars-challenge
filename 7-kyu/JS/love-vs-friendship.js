/*
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.
P ints? N, floats? N, strings? Y
R return the sum of the value of the char based on alphabet position
E --> see below
P
*/

function wordsToMarks(string) {
  // set counter
  // may need to set a hashmap to hold the value of the alphabet
  // loop through the string param and and check value and add to sum
  // return sum value
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let sum = 0;
  let letterMap = {};
  for (let i = 0; i < alphabet.length; i++) {
    let counter = 1;
    counter += i;
    letterMap[alphabet[i]] = counter;
  }
  for (let letter of string) {
    if (letterMap[letter]) {
      sum += letterMap[letter];
    }
  }
  return sum;
}

console.log(wordsToMarks('love'), 54);
console.log(wordsToMarks('friendship'), 108);
