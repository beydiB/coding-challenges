/*
In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.
Examples
16+1821426+39515122+811103\large \begin{array}{lll} & 1 & 6 \\ + & 1 & 8 \\ \hline & 2 & 1 4 \\ \end{array} \qquad \large \begin{array}{lll} & 2 & 6 \\ + & 3 & 9 \\ \hline & 5 & 15 \\ \end{array} \qquad \large \begin{array}{lll} & 1 & 2 & 2 \\ + & & 8 & 1 \\ \hline & 1 & 10 & 3 \\ \end{array}+​112​6814​​+​235​6915​​+​11​2810​213​​
*/

function add(num1, num2) {
  let arr1 = num1.toString().split('').reverse()
  let arr2 = num2.toString().split('').reverse()
  let arr3 = []
  for(let i=0; i < (arr1.length < arr2.length ? arr2.length : arr1.length); i++) {
    arr3.push((parseInt(arr1[i]) || 0) + (parseInt(arr2[i]) || 0))
  }
  return parseInt(arr3.reverse().join(''));
}