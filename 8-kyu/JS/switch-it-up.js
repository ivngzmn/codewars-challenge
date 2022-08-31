/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/5808dcb8f0ed42ae34000031
Kata title: Switch it Up!

Description:
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement. https://en.wikipedia.org/wiki/Switch_statement

*/
//

function switchItUp(number) {
  switch (number) {
    case 1:
      return 'One';

    case 2:
      return 'Two';

    case 3:
      return 'Three';

    case 4:
      return 'Four';

    case 5:
      return 'Five';

    case 6:
      return 'Six';

    case 7:
      return 'Seven';

    case 8:
      return 'Eight';

    case 9:
      return 'Nine';
  }
}

console.log(switchItUp(1), 'One');
console.log(switchItUp(3), 'Three');
console.log(switchItUp(5), 'Five');
console.log(switchItUp(0), 'Zero');
