/*
Filter the number

Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
Task

Your task is to return a number from a string.
Details

You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
P strings? Y, ints? N, floats? N
R return only the ints in the strings
E --> see below
P
*/

function filterString(value) {
    // set the ints var
    // loop through the string
    // if char can be converted to int
    // then have the int str go into the ints var
    // return int str as an int
    let ints = '';
    for (char of value) {
        if (!isNaN(+char)) {
            ints += char;
        }
    }
    return Number(ints);
}

console.log(filterString('123'), 123);
console.log(filterString('a1b2c3'), 123);
console.log(filterString('70tkh0rm'), 700);
