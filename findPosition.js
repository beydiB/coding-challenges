/*
When provided with a letter, return its position in the alphabet.
Input :: "a"
Ouput :: "Position of alphabet: 1"
*/

function position(letter) {
  let pos = letter.charCodeAt() - 96;
  return "Position of alphabet: " + pos;
}
