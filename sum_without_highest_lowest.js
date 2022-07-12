//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

function sumArray(array) {
if(!array || array.length < 2) {return 0}
let arr = array.sort((a,b) => a-b).reduce((a,b)=>a+b)
return arr - Math.min(...array) - Math.max(...array)
}