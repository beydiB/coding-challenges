//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
//Don't change the order of the elements that are left.
//ex: Input: [2,2,1,2,1], output = [2,2,2,1]
function removeSmallest(numbers) {
    let slicedArr = numbers.slice()
    let lowR = numbers.indexOf(Math.min(...numbers))
    slicedArr.splice(lowR,1)
    return slicedArr
  }