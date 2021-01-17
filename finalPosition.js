const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; 

const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  for (let move of moves) {
    if (move === 'east') {
      x++;
    } else if (move === 'west') {
      x--;
    } else if (move === 'north') {
      y++;
    } else if (move === 'south') {
      y--;
    }
  } return [x, y];
};

console.log(finalPosition(moves));
//Output = [-1,4]
