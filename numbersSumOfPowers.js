/*
eq_sum_powdig(hMax, exp): ----> sequence of numbers (sorted list) (Number one should not be considered).

Let's see some cases:

eqSumPowdig(100, 2) ----> []

eqSumPowdig(1000, 2) ----> []

eqSumPowdig(200, 3) ----> [153]

eqSumPowdig(370, 3) ----> [153, 370]
Enjoy it !!
*/

function eqSumPowdig(hMax, exp) {
    let arr  = []
    for( i = 2; i <= hMax; i++) {
      if(String(i).split('').map( x => x ** exp).reduce((a,b) => a+b,0) == i) arr.push(i)
    }
    return arr
  }