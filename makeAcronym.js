/*
Rule of making acronym in this kata:

split string to words by space char
take every first letter from word in given string
uppercase it
join them toghether
Eg:

Code wars -> C, w -> C W -> CW
Note: There will be at least two words in the given string!
*/


function toAcronym(inp){
  let str = ''
  inp = inp.split(" ")
  for(i=0; i < inp.length; i++){
    str += inp[i][0].toUpperCase()
}
  return str
}