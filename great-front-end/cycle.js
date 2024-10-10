/*
Implement a function that takes one or more values and returns a function that cycles through those values each time it is called.

Examples

const helloFn = cycle('hello');
console.log(helloFn()); // "hello"
console.log(helloFn()); // "hello"

const onOffFn = cycle('on', 'off');
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
console.log(onOffFn()); // "on"
*/

function cycle(...values) {
  let state = -1;
  const length = values.length;

  return function () {
    state = (state + 1) % length;
    return values[state];
  };
}

let helloFn = cycle('hello');
console.log(helloFn()); // "hello"
console.log(helloFn()); // "hello"

const onOffFn = cycle('on', 'off');
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
console.log(onOffFn()); // "on"
