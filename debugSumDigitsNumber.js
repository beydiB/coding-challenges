/*
Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14
*/


function getSumOfDigits(integer) {
  var sum = 0;
  var digits = integer.toString();

  for(var ix = 0; ix < digits.length; ix++) {
    sum += +digits[ix];
  }
  return sum;
}