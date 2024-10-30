/*
Story

Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
Task

Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
Examples:

checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
P strings? Y, ints? N, 
R return true if coupon valid && not expired else false otherwise
E -> see below
P check the coupon
ensure the date is not greater than the expiration date
if both are true return true else false
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  // solution
  // dates
  let dateEntered = new Date(currentDate);
  let expiration = new Date(expirationDate);

  if (enteredCode === correctCode && dateEntered <= expiration) {
    return true;
  } else {
    return false;
  }
}
console.log(checkCoupon('123', '123', 'July 9, 2014', 'July 9, 2014'), true); // valid
console.log(checkCoupon('123a', '123', 'July 9, 2014', 'July 2, 2014'), false); // expired
console.log(
  checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'),
  true
); // valid
console.log(
  checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'),
  false
); // wrong code
