//Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

function inAscOrder(arr) {
  return arr.join('') == arr.sort((a,b)=> a-b).join('')
}