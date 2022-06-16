//Count the number of divisors of a positive integer n. Random tests go up to n = 500000.
//ex: 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n){
    let counter = 0
    for(i=1; i<=n; i++) {
      if(n%i === 0) {counter ++}
    }
  return counter
}