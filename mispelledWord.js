/*
Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
mispelled('versed', 'versed'); // returns true
It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.
*/


var mispelled = function(word1, word2) {
  if (Math.max(word1.length, word2.length) - Math.min(word1.length, word2.length) > 1) {
    return false;
  }
  
  if (word1.length == word2.length) {
    let diff = 0;
    for (i = 0; i < word1.length; i++) {
      if (word1[i] != word2[i]) {
        diff++;
      }
    }
    return diff <= 1;
  } else {
    return word1.length > word2.length ? word1.includes(word2) : word2.includes(word1);
  }
};