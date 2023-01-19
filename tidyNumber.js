/*
function tidyNumber(n){
  n = String(n)
  for( i = 0; i < n.length -1; i++) {
    if(n[i] > n[i+1]) return false
  }
  return true
}
*/

function tidyNumber(n){
    n = String(n)
    for( i = 0; i < n.length -1; i++) {
      if(n[i] > n[i+1]) return false
    }
    return true
  }