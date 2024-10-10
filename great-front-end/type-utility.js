/*
JavaScript is a dynamically typed language, which means the types of variable can be changed during runtime. Many interview questions involve recursion of values that contain values of different types and how to handle each value type differs according to the type (e.g. different code is needed to iterate over an array vs an object). Knowledge of handling the JavaScript types is crucial to solving questions like Deep Clone and Deep Equal.

In this question, we will implement the following utility functions to determine the types of primitive values.

isBoolean(value): Return true if value is a boolean, false otherwise.
isNumber(value): Return true if value is a number, false otherwise. Note that NaN is considered a number.
isNull(value): Return true if value is null, false otherwise.
isString(value): Return true if value is a String, else false.
isSymbol(value): Return true if value is a Symbol primitive, else false.
isUndefined(value): Return true if value is undefined, else false.
*/

function isBoolean(value) {
  return typeof value === 'boolean';
}

function isNumber(value) {
  return typeof value === 'number';
}

function isNull(value) {
  return value === null;
}

function isString(value) {
  return typeof value === 'string';
}

function isSymbol(value) {
  return typeof value === 'symbol';
}

function isUndefined(value) {
  return value === undefined;
}

console.log(isBoolean(true), 'isBoolean', true);
console.log(isBoolean(false), 'isBoolean', true);
console.log(isBoolean(0), 'isBoolean', false);
console.log(isNumber(0), 'isNumber', true);
console.log(isNumber(1), 'isNumber', true);
console.log(isNumber(NaN), 'isNumber', true);
console.log(isNumber(Infinity), 'isNumber', true);
console.log(isNumber('1'), 'isNumber', false);
console.log(isNull(null), 'isNull', true);
console.log(isNull(undefined), 'isNull', false);
console.log(isString(''), 'isString', true);
console.log(isString('abc'), 'isString', true);
console.log(isString(1), 'isString', false);
console.log(isSymbol(Symbol()), 'isSymbol', true);
console.log(isSymbol('abc'), 'isSymbol', false);
console.log(isUndefined(undefined), 'isUndefined', true);
console.log(isUndefined(null), 'isUndefined', false);
