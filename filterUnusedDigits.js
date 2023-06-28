/*
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.
*/

function unusedDigits() {
    let num  = '0123456789'
    let ans = ''
    let s = [...arguments].join('')
    for(i=0; i < num.length; i++){
      if(!s.includes(num[i]) ) ans += num[i]
    }
    return ans
  }