/*
Given a Divisor and a Bound , Find the largest integer N , Such That ,
Conditions :

    N is divisible by divisor

    N is less than or equal to bound

    N is greater than 0.
*/


function maxMultiple(divisor, bound){
  return bound-bound%divisor
}