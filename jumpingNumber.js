/*
Definition
Jumping number is the number that All adjacent digits in it differ by 1.

Task
Given a number, Find if it is Jumping or not .

*/


function jumpingNumber(n){
    n = String(n)
    for(i = 0; i < n.length -1; i++) {
      if(n[i] != Number(n[i+1]) - 1 && n[i] != Number(n[i+1]) + 1 ) return "Not!!"
    }
    return "Jumping!!"
  }