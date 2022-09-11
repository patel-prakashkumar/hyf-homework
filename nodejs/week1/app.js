// Warmup Exercice 
// parse command line arguments
const listNumber = process.argv.slice(2).map(num => Number(num));
let sum = 0;
listNumber.forEach(function (number) {
  sum += number        
});
const average = sum / listNumber.length;
console.log(average)
average > 0
  ? console.log(`Average Number is  ${average.toFixed(2)}`)
  : console.log('Enter Valid Input or Number');