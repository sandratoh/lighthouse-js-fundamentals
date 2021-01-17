//REVIEW HOW TO MAKE RIGHT ANSWER
/*
function concat(arrayOne, arrayTwo) {
  const arrayMerged = arrayOne.concat(arrayTwo);
  return arrayMerged;
};
*/

//RIGHT ANSWER
function concat (arrayOne, arrayTwo) {
  for (let i = 0; i < arrayTwo.length; i++) {
    arrayOne.push(arrayTwo[i]);
  }
  return arrayOne;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);