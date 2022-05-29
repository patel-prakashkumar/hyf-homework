// Task 1
const yearOfBirth = 1987;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in  ${yearFuture}`);

// Task 2
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = (dogYearFuture - dogYearOfBirth) * 7;
const shouldShowResultInDogYear = true;

if (shouldShowResultInDogYear) {
  console.log(`Your dog will be  ${dogYear} dog years old in ${dogYearFuture}`);
} else {
  const humanYear = dogYear / 7;
  console.log(
    `Your dog will be ${humanYear} human years old in ${dogYearFuture}`
  );
}

// Task 3
// Peter house prise calculation
const peter = { wide: 8, deep: 10, high: 10, gardenSizeInM2: 100 };
const peterVolumeInMeters = peter.wide * peter.deep * peter.high;
const peterHousePrice =
  peterVolumeInMeters * 2.5 * 1000 + peter.gardenSizeInM2 * 300;
if (peterHousePrice >= 2500000) {
  console.log("Peter is paying too much");
} else {
  console.log("Peter is paying too little");
}

// Julia house price calculation
const julia = { wide: 5, deep: 11, high: 8, gardenSizeInM2: 70 };
const juliaVolumeInMeters = julia.wide * julia.deep * julia.high;
const juliaHousePrice =
  juliaVolumeInMeters * 2.5 * 1000 + julia.gardenSizeInM2 * 300;

if (juliaHousePrice >= 1000000) {
  console.log("Julia is paying too much");
} else {
  console.log("Julia is paying too little");
}

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
const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);

const startupName = `${firstWords[randomNumber1]} ${secondWords[randomNumber2]}`;
console.log(
  `New Startup Name is ${startupName} Number of characters are ${startupName.length}`
);
