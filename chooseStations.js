const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

//using for loop, keeping track of index values
//RUN THIS ONE OR THE NEXT, DO NOT RUN BOTH
const chooseStations = function (stations) {
  const goodStations = [];
  for (let arr = 0; arr <= 2; arr++) {
    if (stations[arr][1] >= 20) {
      if (stations[arr][2] === 'school' || stations[arr][2] === 'community centre') {
        goodStations.push(stations[arr][0]);
      };
    };
  } return goodStations;
};


//using for...of loop
//RUN THIS OR THE PREVIOUS, DO NOT RUN BOTH
const chooseStations = function (stations) {
  const goodStations = [];
  for (let station of stations) {
    const capacity = station[1];
    if (capacity >= 20) {
      const type = station[2];
      if (type === 'school' || type === 'community centre') {
        goodStations.push(station[0]);
      };
    };
  } return goodStations;
}

//print answer
console.log(chooseStations(stations));