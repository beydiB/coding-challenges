//This function should return n!
function factorial (n) {
  if (n < 0) return null;
  if (n === 0) return 1;
  
  return n * factorial(--n)
}