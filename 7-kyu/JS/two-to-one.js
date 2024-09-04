/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/
function longest(s1, s2) {
  // no ints, sorted asc, unique letters from both s1 and s2
  // combine both strings
  // sort the letters in asc order
  // loop through all letters in combined list
  // if letter is not in array and is not a duplicate push to array
  // return the string and join
  let combinedStr = (s1 + s2).split('').sort();
  let uniqueStr = [];
  for (let i = 0; i < combinedStr.length; i++) {
    if (!uniqueStr.includes(combinedStr[i])) {
      uniqueStr.push(combinedStr[i]);
    }
  }
  return uniqueStr.join('');
}

console.log(longest('aretheyhere', 'yestheyarehere'), 'aehrsty');
console.log(
  longest('loopingisfunbutdangerous', 'lessdangerousthancoding'),
  'abcdefghilnoprstu'
);
console.log(
  longest('inmanylanguages', 'theresapairoffunctions'),
  'acefghilmnoprstuy'
);
