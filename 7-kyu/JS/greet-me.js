/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"

P
R
E
P
*/

const greet = function (name) {
  let user = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  return `Hello ${user}!`;
};

console.log(greet('riley'), 'Hello Riley!');
console.log(greet('JACK'), 'Hello Jack!');
