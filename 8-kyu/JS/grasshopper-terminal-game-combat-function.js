/*
Description:
Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.
*/

function combat(health, damage) {
  // if player health is less than damage return "Health cannot be below 0"
  // get player health
  // get he damage
  // return the players new health
  if (health < damage) {
    return 0;
  }

  return health - damage;
}

console.log(combat(100, 5), 95);
console.log(combat(92, 8), 84);
console.log(combat(20, 30), 0);
