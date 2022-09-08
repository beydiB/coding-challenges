/*
Build Tower

Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
let arr = []
let space = 0
for(let i = nFloors; i > 0 ; i--){
  arr.push(' '.repeat(space) + '*'.repeat((i * 2) - 1) + ' '.repeat(space))
  space ++
 }
return arr.reverse()
}