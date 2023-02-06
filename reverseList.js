/*
Write reverseList function that simply reverses lists.
*/

function reverseList(arr) {
    let reversedArr = []
    for(i = arr.length-1; i >= 0; i--) reversedArr.push(arr[i])
    return reversedArr
  }