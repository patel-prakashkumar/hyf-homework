// Task 1
const yearOfBirth = 1987;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

// Task 2
let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth + 60;
let shouldShowResultInDogYear = true;

if (shouldShowResultInDogYear == true) {
  console.log(
    "Your dog will be " + dogYear + " dog years old in " + dogYearFuture
  );
} else {
  let humanYear = dogYear - 60;
  console.log(
    "Your dog will be " + humanYear + " human years old in " + dogYearFuture
  );
};

// Task 3
// Peter house prise calculation
let peter = { wide: 8, deep: 10, high: 10, gardenSizeInM2: 100 };
let peterVolumeInMeters = peter.wide * peter.deep * peter.high;
let peterHousePrise =
  peterVolumeInMeters * 2.5 * 1000 + peter.gardenSizeInM2 * 300;
if (peterHousePrise > 2500000) {
  console.log("Peter is paying too much");
} else {
  console.log("Peter is paying too little");
};

// Julia house prise calculation 
let julia = { wide: 5, deep: 11, high: 8, gardenSizeInM2: 70 };
let juliaVolumeInMeters = julia.wide * julia.deep * julia.high;
let juliaHousePrise =
  juliaVolumeInMeters * 2.5 * 1000 + julia.gardenSizeInM2 * 300;

if (juliaHousePrise > 1000000) {
  console.log("Julia is paying too much");
} else {
  console.log("Julia is paying too little");
};


// Task 4
const firstWords = [
  "Connex",
  "Dreem",
  "Newly",
  "Philler",
  "Lotis",
  "Lanz",
  "Scooper",
  "Acsent",
  "Findr",
  "Hevin",
];
const secondWords = [
  "FryMedia",
  "InterLayer",
  "FlowFreer",
  "RypeMake",
  "Handly",
  "Data",
  "Vital",
  "Alpha",
  "Cross",
  "Serva",
];
const randomNumber = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNumber] + secondWords[randomNumber];
console.log(
  "New Startup Name is " +
    startupName +
    " Number of characters are " +
    startupName.length
);
