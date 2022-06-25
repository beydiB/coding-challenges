//Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise

const isAnagram = function(test, original) {
    return test.toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join('') === original.toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join('')
  };