/*
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

    Correct answer    |    Student's answer   |   Result         
 ---------------------|-----------------------|-----------
 ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
 ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
 ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
 ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0

P array? Y, ints? N, strings? Y
R return the sum of the correct answers based on rules provided
E 
P 
*/
console.time('checkExam');

function checkExam(array1, array2) {
  // set var for the score
  // check each value, if value === value += 4, if incorrect answer += -1, if value is empty string += 0
  // if returned score is < 0 return 0

  let score = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      score += 4;
    } else if (array1[i] !== array2[i] && array2[i] !== '') {
      score -= 1;
    } else {
      score += 0;
    }
  }

  return score > 0 ? score : 0;
}

// examples
console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']), 6); // 4 - 1 + 4 -1
console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']), 7); // 4 + 4 - 1 + 0
console.log(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']), 16);
console.log(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c']), 0);

// constant time o(n)
console.timeEnd('checkExam');
