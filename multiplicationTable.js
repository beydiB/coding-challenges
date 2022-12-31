/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9

For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/


multiplicationTable = function(size) {
  let start = Array.from({length: size}, (_, i) => i + 1)
  let table = []
  for(i = 1; i <= size; i++) {
    table.push(start.map(x => x * i))
  }
  return table
}