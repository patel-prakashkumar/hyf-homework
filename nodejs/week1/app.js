// Warmup Exercice 
// parse command line arguments
const listNumber = process.argv.slice(2).map(num => Number(num));
let sum = 0;
const average = sum / listNumber.length;
sum > 0
  ? console.log(`Average Number is  ${average.toFixed(2)}`)
  : console.log('Enter Valid Input or Number');