/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

// how many char are in the ending and then use that as count
// for loop to to start from the end of the string. may need to split the string
// check if the last part str equals the ending return true

// function solution(str, ending) {
//   const strArr = str.split('');
//   const endingLength = ending.split('').length;
//   let strEnding = [];
//   for (let i = 1; i <= endingLength; i++) {
//     j = strArr.pop();
//     strEnding.push(j);
//   }

//   return strEnding.reverse().join('') === ending;
// }

function solution(str, ending) {
  return str.endsWith(ending); // cleaner solution
}
console.log(solution('abcde', 'cde'), true);
console.log(solution('abcde', 'abc'), false);
console.log(solution('abc', 'bc'), true);
console.log(solution('abc', 'd'), false);
