/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/571d42206414b103dc0006a1
Kata title: Filling an array (part 1)

Instructions
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]

Note: The parameter is optional. So you have to give it a default value.
*/
//PREP
// int? Y, Strings? N, floating? N
// Return int that is passed in and create arr with the count 0 to N-1

const arr = (N) => {
  // set our empty arr
  let arrContents = [];
  // count from 0 and push to arr
  for (let i = 0; i < N; i++) {
    arrContents.push(i);
  }
  return arrContents;
};

// const arr = (N) => Array.from({ length: N }, (_, i) => i); // cray cray solution
// Example
console.log(arr(4));
console.log(arr());
console.log(arr(5));
