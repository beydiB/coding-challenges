// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type
function factorial(n)
{
  if (n < 0 || n > 12) throw new RangeError('Range must be between 0 and 12')
  let sum =1
  for(i=1; i<=n;i++) {
    sum*=i
  }
  return sum
}