/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/55cbd4ba903825f7970000f5
Kata title: Grasshopper - Grade book

Instructions
Grade book

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
Numerical Score 	Letter Grade
90 <= score <= 100 	'A'
80 <= score < 90 	'B'
70 <= score < 80 	'C'
60 <= score < 70 	'D'
0 <= score < 60 	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/
//PREP
// Nums? Y, Strings? N, Floats? N
// Func returns letter grade from average of 3 nums
//

function getGrade(s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3; // get average
  if (average >= 90) {
    // if 90 <= ave <= 100 return A
    return 'A';
  } else if (average >= 80 && average < 90) {
    // if 80 <= ave < 90 return B
    return 'B';
  } else if (average >= 70 && average < 80) {
    // if 70 <= ave < 80 return C
    return 'C';
  } else if (average >= 60 && average < 70) {
    // if 60 <= ave < 70 return D
    return 'D';
  } else {
    // else return F
    return 'F';
  }
}

console.log(getGrade(95, 90, 93), 'A');
console.log(getGrade(100, 85, 96), 'A');
console.log(getGrade(92, 93, 94), 'A');

console.log(getGrade(70, 70, 100), 'B');
console.log(getGrade(82, 85, 87), 'B');
console.log(getGrade(84, 79, 85), 'B');
console.log(getGrade(89, 89, 90), 'B');

console.log(getGrade(70, 70, 70), 'C');
console.log(getGrade(75, 70, 79), 'C');
console.log(getGrade(60, 82, 76), 'C');

console.log(getGrade(65, 70, 59), 'D');
console.log(getGrade(66, 62, 68), 'D');
console.log(getGrade(58, 62, 70), 'D');

console.log(getGrade(44, 55, 52), 'F');
console.log(getGrade(48, 55, 52), 'F');
console.log(getGrade(58, 59, 60), 'F');
