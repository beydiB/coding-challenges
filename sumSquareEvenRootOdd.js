/*
Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.

Good luck!
*/


const sumSquareEvenRootOdd = ns => {
  let sum = 0
  for(i=0; i < ns.length; i++){
    ns[i] %  2 == 0 ? sum +=  ns[i] ** 2 : sum += Math.sqrt(ns[i])
  }
  return sum.toFixed(2)*1
};