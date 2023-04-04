/*
Task
We need a function to collect these numbers, that may receive two integers 
�
a, 
�
b that defines the range 
[
�
,
�
]
[a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range 
[
�
,
�
]
[a,b] the function should output an empty list.

90, 100 --> []
*/

function sumDigPow(a, b) {
  let ans = []
  for(i=a; i<=b;i++){
    if(i == String(i).split('').reduce((a,b,index)=>a+b**(index+1),0)) ans.push(i)
  }
  return ans
}
