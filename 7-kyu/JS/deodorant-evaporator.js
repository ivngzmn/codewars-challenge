/*
This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.
Example:

evaporator(10, 10, 5) -> 29

Note:

Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.
P ints? Y, negative? N, floats? N, strings? N
R return the number of days that it takes to evaporate the content
E --> see below
P
 */

function evaporator(content, evap_per_day, threshold) {
    // hold num of days
    let days = 0;
    // hold threshold
    let thresholdContent = content * (threshold / 100);
    // while content is greater than threshold
    while( content > thresholdContent) {
        content -= content * (evap_per_day / 100);
        days++;
    }
    // return num of days it took
    return days;
}

console.log(evaporator(10,10,10), 22) // take 22 days
console.log(evaporator(10,10,5), 29) // take 29 days
