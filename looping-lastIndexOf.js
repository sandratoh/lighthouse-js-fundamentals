/*
function lastIndexOf(arr, value) {
  let x = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr === [] || arr[i] !== value) {
      x = -1;
    } else if (arr[i] === value) {
      x = i;
    } return x;
  } 
}



console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

*/


//WORK ON THIS AGAIN
function lastIndexOf(arr, value) {
  if (arr.length === 0) {
    return -1;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) {
      return i;
    } else {
      return -1;
    }
  }


//RIGHT ANSWER;

function lastIndexOf(arr, val) {
  if (arr.length === 0) {
    return -1
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === val) {
      return i;
    }
  }
  // If nothing matches in the array;
  // as the loop has ended without returning anything.
  return -1;
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);