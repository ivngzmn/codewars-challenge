/*
Haskell has some useful functions for dealing with lists:

$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
return 1
λ tail [1,2,3,4,5]
return [2,3,4,5]
λ init [1,2,3,4,5]
return [1,2,3,4]
λ last [1,2,3,4,5]
return 5

Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x
Here's how I expect the functions to be called in your language:

head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]
*/

function head(arr) {
  return arr[0];
}
function tail(arr) {
  return arr.slice(1);
}
function init(arr) {
  return arr.slice(0, -1);
}
function last(arr) {
  return arr[arr.length - 1];
}

console.log(head([1, 2, 3, 4, 5]));
console.log(tail([1, 2, 3, 4, 5]));
