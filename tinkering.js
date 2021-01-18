/*
//winningVeggie
const judgeVegetable = (vegetables, metric) => {
  let winningVeggie = '';
  let winner = '';

  //for of loop of vegetable
  for (let vegetable of vegetables) {
    if (metric === 'redness') {
      winningVeggie = Math.max(vegetable[1]);
    } else if (metric === 'plumpness') {
      winningVeggie = Math.max(vegetable[2]);
    } return winningVeggie;
  }
   
  //return statement
  winner = winningVeggie[-1];
  //vegetables.submitter of highest metric
  return winner;
}
*/

/*
//removed winningVeggie - returns NaN
const judgeVegetable = (vegetables, metric) => {
  let winner = '';

  //for of loop of vegetable
  for (let vegetable of vegetables) {
    if (metric === 'redness') {
      winner = (Math.max(vegetable[1]));
    } else if (metric === 'plumpness') {
      winner = (Math.max(vegetable[2]));
    }
  }
  
  //return statement
  return winner;
}
*/

//function within function
const judgeVegetable = (vegetables, metric) => {
  let highestValue = 0;
  let winner = '';
  for (let vegetable of vegetables) {
    if (vegetable[metric] > highestValue) {
      highestValue = vegetable[metric];
      winner = vegetable.submitter
    }
  } return winner;
}
//testing condition
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));