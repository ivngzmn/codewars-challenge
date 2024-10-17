/*
o(n) example

const nums = [1,2,3,4,5]
let sum = 0
for(let num of nums) {
sum += num
}

can be done more efficient
const sumContiguousArr = function(arr) {
    get the last item
    const lastItem = arr.[arr.length - 1];
    gauss's trick
    return lastItem * (lastItem + 1) / 2;
}

const nums = [1,2,3,4,5];
const sumOfArray = sumContiguousArr(nums);

o(n^2) quadratic: loop inside a loop
nested for loops be careful
linear inside of a linear operation

o(log n) Logarithmic time: divide and conquer algo
loop your operations are halved

*/
