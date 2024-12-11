/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]

NOTES

    Vowels in this context refers to: a e i o u y (including upper case)
    This is indexed from [1..n] (not zero indexed!)

P ints? N, strings? Y
R return the index (1..n) aka +1 of each vowel
E --> see below
P
*/

function vowelIndices(word) {
  // set empty arr
  // loop through word to find vowel and push 1..n index to arr
  // return the arr
  let vowelIndx = [];
  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    y: true,
  };

  for (let i = 0; i < word.length; i++) {
    if (vowels[word[i].toLowerCase()]) {
      vowelIndx.push(i + 1);
    }
  }
  return vowelIndx;
}

console.log(vowelIndices('mmm'), []);
console.log(vowelIndices('apple'), [1, 5]);
console.log(vowelIndices('super'), [2, 4]);
console.log(vowelIndices('YoMama'), [1, 2, 4, 6]);
