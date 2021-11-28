//Instructinos
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
  let sum = 0
  numbers.forEach(number => {
    sum += (number * number)
  })
  return sum
}


