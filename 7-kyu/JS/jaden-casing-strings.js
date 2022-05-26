/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/5390bac347d09b7da40006f6
Kata title: Jaden Casing Strings

Instructions
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

Link to Jaden's former Twitter account @officialjaden via archive.org

*/
String.prototype.toJadenCase = function () {
    return this.split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ');
};

// for loop solution
//PREP
//P: Numbers? Nah, String? Yeah, any crazy inputs? Nah
//R: The string function should return every word with the first letter capitalized
//E: see example below
String.prototype.toJadenCase = function () {
    // set jaden to this str prototype and split the incoming string
    let jaden = this.split(' ');
    // loop through each word
    for (let i = 0; i < jaden.length; i++) {
        // once we iterate through each word we will get the first letter and capitalize it
        // then we will add the rest of the word and move to the next word
        jaden[i] = jaden[i][0].toUpperCase() + jaden[i].slice(1);
    }
    // now we will join the string that we split
    return jaden.join(' ');
};

let str = "How can mirrors be real if our eyes aren't real";

//E:
console.log(str.toJadenCase()); // --> How Can Mirrors Be Real If Our Eyes Aren't Real
