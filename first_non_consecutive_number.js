//Your task is to find the first element of an array that is not consecutive.


function firstNonConsecutive (arr) {
 	for(let i=0; i<arr.length-1; i++) {
    if(arr[i] + 1 !== arr[i+1] ) {
      return arr[i+1]
    }
  } 
  return null
}
