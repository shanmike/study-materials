// Find the sum of the odd numbers within an array, after cubing the initial integers. 

function cubeOdd(arr) {
    let num = 0;
    arr.map((e,i)=> e % 2 !== 0 ? num += Math.pow(e,3) : 0);
    return isNaN(num) ? undefined : num;
  }