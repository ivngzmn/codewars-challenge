/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
P ints? n, strings? y
R return 'Woohoo" if get home in 15 or less bumps else return 'Car Dead'
E --> See below
P
*/

function bump(x) {
  //loop through str and for every n increase count
  // if count < 15 return "Woohoo!"
  // else return 'Car Dead'
  let bumps = 0;

  for (let char of x) {
    if (char === 'n') {
      bumps++;
    }
  }
  return bumps <= 15 ? 'Woohoo!' : 'Car Dead';
}

console.log(bump('n'), 'Woohoo!');
console.log(bump('__nn_nnnn__n_n___n____nn__nnn'), 'Woohoo!');
console.log(bump('_nnnnnnn_n__n______nn__nn_nnn'), 'Car Dead');
