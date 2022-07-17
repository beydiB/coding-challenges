//Upto and including n, this function will return the sum of all multiples of 3 and 5.

function findSum(n) {
    let sum = 0
    for (i = 1; i <= n; i++) {
        if (i % 3 == 0 || i % 5 == 0) { sum += i }
    }
    return sum
}