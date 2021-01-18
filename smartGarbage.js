/*
const input = smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

const output = {
  waste: 4,
  recycling: 3,
  compost: 5
};
*/

//VERY CLOSE; return {waste: 0, recycling: 1, compost: 0};
/*
const smartGarbage = function (trash, bins) {
  //define new variable to return;
  let newObject = '';

   //define paramter bins: object with three properties holding numerical value
   newObject = bins = {
     waste: 0,
     recycling: 0,
     compost: 0
    };

  //define parameter trash: increases corresponding bins
  if (trash === 'waste') {
    newObject.waste++;
  } else if (trash === 'recycling') {
    newObject.recycling++;
  } else if (trash === 'compost') {
    newObject.compost++
  }
  return newObject;
};
 


console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

*/

//RIGHT ANSWER: bins value set to argument
const smartGarbage = function (trash, bins) {
  //define new variable to return;
  let newObject = '';

   //define paramter bins: object with three properties holding numerical value
   newObject = bins = {
     waste: bins.waste,
     recycling: bins.recycling,
     compost: bins.compost
    };

  //define parameter trash: increases corresponding bins
  if (trash === 'waste') {
    newObject.waste++;
  } else if (trash === 'recycling') {
    newObject.recycling++;
  } else if (trash === 'compost') {
    newObject.compost++
  }
  return newObject;
};
 


console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));