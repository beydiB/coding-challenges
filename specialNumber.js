/*
Definition
A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

Given a number determine if it special number or not .
*/

function specialNumber(n){
  n = String(n)
  for(i = 0; i < n.length; i++) {
    if(! '012345'.includes(n[i])) return 'NOT!!'
  }
  return "Special!!"
}