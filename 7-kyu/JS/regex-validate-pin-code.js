/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

*/
function validatePIN(pin) {
  // if pin has exactly 4 or 6 digits return true
  // else return false
  //   let userPin = pin.split('').map(Number);
  //   let intNan = Number.isNaN(userPin.join('') * 1);
  //   if ((userPin.length === 4 && !intNan) || (userPin.length === 6 && !intNan)) {
  //     return true;
  //   }
  //   return false;
  const regex = /^(\d{4}|\d{6})$/;
  return regex.test(pin);
}

console.log(validatePIN('1'), false, "Wrong output for '1'");
console.log(validatePIN('a234'), false, "Wrong output for 'a234'");
console.log(validatePIN('12'), false, "Wrong output for '12'");
console.log(validatePIN('123'), false, "Wrong output for '123'");
console.log(validatePIN('12345'), false, "Wrong output for '12345'");
console.log(validatePIN('1234567'), false, "Wrong output for '1234567'");
console.log(validatePIN('-1234'), false, "Wrong output for '-1234'");
console.log(validatePIN('1.234'), false, "Wrong output for '1.234'");
console.log(validatePIN('-1.234'), false, "Wrong output for '-1.234'");
console.log(validatePIN('00000000'), false, "Wrong output for '00000000'");
console.log(validatePIN('1234'), true, 'True');
console.log(validatePIN('123456'), true, 'True');
