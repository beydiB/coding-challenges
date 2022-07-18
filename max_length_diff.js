//You are given two arrays a1 and a2 of strings.Each string is composed with letters from a to z.Let x be any string in the first array and y be any string in the second array. 
//Find max(abs(length(x) − length(y)))
//If a1 and/or a2 are empty return -1

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1
  let first = a1.map((x,i) => x.length)
  let sec = a2.map((x,i) => x.length)
  return Math.max(Math.max(...first) - Math.min(...sec),Math.max(...sec) - Math.min(...first))
}
