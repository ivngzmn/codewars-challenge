/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
Kata title: Removing Elements

Description:
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

*/
//PREP
// arr? Y, nums? Y, strings? Y, whole nums? Y, empty? N
// return arr with every second element removed
function removeEveryOther(arr) {
  // arr of the elements we are keeping
  let keptElement = [];
  // if only one element in arr return element
  if (arr.length === 1) {
    return arr;
  } else {
    arr.map((element, index) =>
      index % 2 === 0 ? keptElement.push(element) : ''
    );
  }
  return keptElement;
  // else
  // remove every second element in arr
  // return arr with only elements that were not skipped
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), [
  'Hello',
  'Hello Again',
]);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], { Great: 'Job' }]), [['Goodbye']]);
