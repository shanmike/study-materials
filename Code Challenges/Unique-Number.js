// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// Examples:

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

findUniq = (arr) => {
    sorted = arr.sort((a,b)=>a-b)
    return sorted[0] < sorted[1] ? sorted[0] : sorted.splice(sorted.length-1,1)[0] 
  }