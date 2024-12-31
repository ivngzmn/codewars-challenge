/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

P ints? N, floats? N, bools? N, strings? Y
R if a -> b, if b -> a, else return the char
E --> see below
P
*/

function switcheroo(x) {
  // set the switched string
  // loop through the string
  // if letter a return b
  // if letter b return a
  // else return char
  // return the switched string
  let switchedStr = '';
  for (char of x) {
    if (char === 'a') {
      switchedStr += 'b';
    } else if (char === 'b') {
      switchedStr += 'a';
    } else {
      switchedStr += char;
    }
  }

  return switchedStr;
}

console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb');
console.log(switcheroo('ccccc'), 'ccccc');
