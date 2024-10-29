/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

    make as few changes as possible.
    if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

P ints? N, floats? N, Strings? Y, Unique chars? Y
R return string as uppercase if there are a greater amount of uppercase letters otherwise lowercase the letters
E
P
*/

function solve(s) {
  let uppercaseCount = 0;
  let lowercaseCount = 0;

  // Loop through the string once to count uppercase and lowercase characters
  for (const char of s) {
    if (char === char.toUpperCase()) {
      uppercaseCount++;
    } else {
      lowercaseCount++;
    }
  }

  // Decide if the string should be converted to uppercase or lowercase
  if (uppercaseCount > lowercaseCount) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}

console.log(solve('coDe'), 'code'); // return lowercase as only one uppercase letter
console.log(solve('CODe'), 'CODE'); // return uppercase
console.log(solve('coDE'), 'code'); // return lowercase if upp and low are same then default to lowercase
console.log(solve('COde'), 'code');
console.log(solve('Code'), 'code');
console.log(
  solve('rswLDpYYzuSXLFJKRimEhXaaXxXih'),
  'RSWLDPYYZUSXLFJKRIMEHXAAXXXIH'
);
