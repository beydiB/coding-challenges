/*
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
*/


function sevenAte9(str) {
    let arr = str.split('');
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] === '9' && arr[i - 1] === '7' && arr[i + 1] === '7') {
        arr.splice(i, 1);
      }
    }
    return arr.join('');
  }