const howManyHundreds = num => {
  if (num % 100 === 0) {
    return num / 100;
  } else if (num % 100 > 1) {
    return Math.floor(num / 100)
  } else if (num % 100 < 1) {
    return '0';
  };
};

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));
