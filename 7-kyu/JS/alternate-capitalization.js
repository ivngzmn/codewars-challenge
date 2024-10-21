/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

function capitalize(s) {
  // ints? n, floats? n
  // return array with even in 0 index and odd in 1 index [even, odd]

  // loop through string and cap even letters and for the odd letters

  let evenStr = '';
  let oddStr = '';

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      evenStr += s[i].toUpperCase();
      oddStr += s[i];
    } else {
      evenStr += s[i];
      oddStr += s[i].toUpperCase();
    }
  }
  return [evenStr, oddStr];
}

console.log(capitalize('abcdef'), ['AbCdEf', 'aBcDeF']); // array with 0 index even letters cap and 1 index with odd letters cap
console.log(capitalize('codewars'), ['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize('abracadabra'), ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize('codewarriors'), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
