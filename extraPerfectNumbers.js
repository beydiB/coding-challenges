/*
Extra perfect number is the number that first and last bits are set bits.
Given a positive integer N , Return the extra perfect numbers in range from 1 to N .
Notes
Number passed is always Positive .

Returned array/list should contain the extra perfect numbers in ascending order from lowest to highest

Input >> Output Examples
extraPerfect(3)  ==>  return {1,3}
*/

function extraPerfect(n){
    let arr = []
    for(i = 1; i <= n; i += 2) {
      arr.push(i)
    }
    return arr
  }