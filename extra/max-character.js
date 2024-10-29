/*
Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)! 
P strings? Y, ints? N, nothing funny going on ova here
R char -> "l" -> char that appears more often
E
P
*/

function maxCharacter(str) {
  // set our hash map key is char and val is occurrence/frequency
  let charMap = {},
    count = 0,
    maxChar = null;
  // loop and find most freq char
  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  // loop and find most freq char
  for (const char in charMap) {
    if (charMap[char] > count) {
      count = charMap[char];
      maxChar = char;
    }
  }
  // return max freq char
  return maxChar;
}

console.log(maxCharacter('Hello World!'), 'l'); // return str 'l'
