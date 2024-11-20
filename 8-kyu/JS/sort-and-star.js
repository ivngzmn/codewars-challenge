/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
P arr? Y, strings? Y, ints? N, floats, N
R return the first char of each sub string in the arr and be joined by *** between the char
E --> see below
P
 */

function twoSort(s) {
    // split the substrings
    // get the first char in the split sub string
    // join the substring with ***
    // don't forget to return
    return s.sort()[0].split('').join('***');
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 