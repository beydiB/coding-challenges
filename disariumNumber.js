/*
Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
Task
Given a number, Find if it is Disarium or not .
*/

function disariumNumber(n){
    n = String(n)
    let sum = 0
    for(i = 0; i < n.length; i++) {
      sum += n[i] ** (i+1)
    }
    return sum == n ? "Disarium !!" : "Not !!"
  }
