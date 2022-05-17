/*
░█████╗░░█████╗░██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚██╗████╗██╔╝███████║██████╔╝╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
kata URL: https://www.codewars.com/kata/58261acb22be6e2ed800003a
Kata title: Volume of a Cuboid

Instructions
Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
*/
//PREP
// whole nums? Y, negative nums? N, non nums? N, floats? Y
// return a whole num that is sum of l,w,h

function getVolumeOfCuboid(length, width, height) {
    //return sum by multiplying l,w,h
    return length * width * height;
}

console.log(getVolumeOfCuboid(1, 2, 2)); // 4
console.log(getVolumeOfCuboid(6.3, 2, 5)); // 63
