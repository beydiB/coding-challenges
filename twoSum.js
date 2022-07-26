/********************************************************************************** 
* 
* Given an array of integers, find two numbers such that they add up to a specific target number.
* 
* The function twoSum should return indices of the two numbers such that they add up to the target, 
* where index1 must be less than index2. Please note that your returned answers (both index1 and index2) 
* are not zero-based.
* 
* You may assume that each input would have exactly one solution.
* 
* Input: numbers={2, 7, 11, 15}, target=9
* Output: index1=1, index2=2
* 
*               
**********************************************************************************/

const twoSum = function(nums, target) {
  let map = {}
  for(i=0; i<nums.length; i++) {
    let value = nums[i]
    let complementaryPair = target - value
    if(map[complementaryPair] !== undefined) {
      return [map[complementaryPair],i]
    } else {
      map[value] = i
    }
  }
};