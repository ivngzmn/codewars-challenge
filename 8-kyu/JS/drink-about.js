/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/56170e844da7c6f647000063
Kata title: Drink about

Instructions

    Kids drink toddy.
    Teens drink coke.
    Young adults drink beer.
    Adults drink whisky.

Make a function that receive age, and return what they drink.

Rules:

    Children under 14 old.
    Teens under 18 old.
    Young under 21 old.
    Adults have 21 or more.

Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"

*/

function peopleWithAgeDrink(old) {
    if (old >= 21) {
        return 'drink whisky'
    }
    
    if (old >= 18) {
        return 'drink beer'
    }

    if (old >= 14) {
        return 'drink coke'
    }
    return 'drink toddy'
};
console.log(peopleWithAgeDrink(7));
console.log(peopleWithAgeDrink(9));
console.log(peopleWithAgeDrink(10));
console.log(peopleWithAgeDrink(13));
console.log(peopleWithAgeDrink(16));
console.log(peopleWithAgeDrink(17));
console.log(peopleWithAgeDrink(18));
console.log(peopleWithAgeDrink(20));
console.log(peopleWithAgeDrink(21));
console.log(peopleWithAgeDrink(23));
console.log(peopleWithAgeDrink(29));
console.log(peopleWithAgeDrink(30));
console.log(peopleWithAgeDrink(32));