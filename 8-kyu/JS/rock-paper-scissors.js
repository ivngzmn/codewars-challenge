/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/5672a98bdbdd995fad00000f
Kata title: Rock Paper Scissors!

Instructions
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/
//PREP
// nums? N, non nums? Y, strings? Y
// return if p1 scissors and p2 paper return p1 won, p1 scissors and p2 rock return p2 won, else draw
//

function rockPaperScissors(p1, p2) {
    // check for draw strings are equal return Draw!
    if (p1 === p2) {
        return 'Draw';
    } else if (
        // check if player 1 won
        (p1 === 'scissors' && p2 === 'paper') ||
        (p1 === 'paper' && p2 === 'rock') ||
        (p1 === 'rock' && p2 === 'scissors')
    ) {
        return 'Player 1 won!';
    } else {
        // else player 2 won
        return 'Player 2 won!';
    }
}

console.log(rockPaperScissors('scissors', 'paper')); // --> Player 1 won!
console.log(rockPaperScissors('paper', 'rock')); // --> Player 1 won!
console.log(rockPaperScissors('scissors', 'rock')); // --> Player 2 won!
console.log(rockPaperScissors('rock', 'paper')); // --> Player 2 won!
console.log(rockPaperScissors('paper', 'paper')); // --> Draw!
console.log(rockPaperScissors('rock', 'rock')); // --> Draw!
console.log(rockPaperScissors('scissors', 'scissors')); // --> Draw!
