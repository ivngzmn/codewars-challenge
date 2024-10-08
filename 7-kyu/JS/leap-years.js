/*
In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

    Years divisible by 4 are leap years,
    but years divisible by 100 are not leap years,
    but years divisible by 400 are leap years.

Tested years are in range 1600 ≤ year ≤ 4000.
*/

function isLeapYear(year) {
  //PREP
  // ints? Y, Strings? N
  // return true || false
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2020), true);
console.log(isLeapYear(2000), true);
console.log(isLeapYear(2015), false);
console.log(isLeapYear(2100), false);
