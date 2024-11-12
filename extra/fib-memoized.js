const memo = {};

function fib(n) {
  if (n < 2) {
    return n;
  } else if (memo[n]) {
    return memo[n];
  } else {
    let result = fib(n - 1) + fib(n - 2);
    memo[n] = result;
    return result;
  }
}

console.log(fib(3), 2);
console.log(fib(4), 3);
console.log(fib(5), 5);
console.log(fib(7), 13);
console.log(fib(50), 12586269025);

// time complexity is O(n) rather than O(n^2)
