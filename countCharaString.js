/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
    if(!string) return {}
    let ans = {}
    string.split('').forEach(x=> ans[x] ? ans[x]++ : ans[x] = 1)
    return ans
  }