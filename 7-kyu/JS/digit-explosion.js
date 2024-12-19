/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
"312" should return "333122"
"102269" should return "12222666666999999999"
P ints? N, strings? Y, arr? N
R return a string of exploded digits e.g. "3" -> "333"
E --> see below
P
*/

function explode(s) {
    // hold the num map for checking
    // create the num map
    // loop through string to check the int string and return appropriate val
    // return the exploded string
    const numMap = {}
    let frankenString = ''
    for (let i = 0; i <= 9; i++) {
        numMap[i] = i.toString().repeat(i)
    }
    for (char of s) {
        if (numMap[char]) {
            frankenString += numMap[char]
        }
    }
    return frankenString
}

console.log(explode("312"), "333122")
console.log(explode("102269"), "12222666666999999999")