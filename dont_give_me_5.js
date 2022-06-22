//you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

function dontGiveMeFive(start, end){
    let sum = 0
    for(i=start;i<=end;i++) {
      if(!i.toString().includes(5)){sum+=1}
    }
    return sum
  }