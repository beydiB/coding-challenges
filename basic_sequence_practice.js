//Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.
//5  -->  [0,  1,  3,  6,  10,  15]
//-5  -->  [0, -1, -3, -6, -10, -15]
//7  -->  [0,  1,  3,  6,  10,  15,  21,  28]

function sumOfN(n) {
    let arr = [0]
    let total = 0
    for(i = 1; i <= Math.abs(n); i++) {
    total += n < 0 ? -i:i;
    arr.push(total)
    }
    return arr
};