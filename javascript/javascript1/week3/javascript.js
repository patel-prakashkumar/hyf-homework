// Remove name from array list
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala"

];
const nameToRemove = "Ahmad";
for (let i = 0; i < names.length; i++) {
    if (names[i] === nameToRemove) {
        names.splice(i, 1);
    }
}
console.log(names);


// Travel time Information function
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
}
function travelTimeCalculator(travelInformation) {
    const travelTime = travelInformation.destinationDistance / travelInformation.speed;
    const hour = Math.floor(travelTime);
    let decpart = travelTime - hour;
    const min = 1 / 60;
    decpart = min * Math.round(decpart / min);
    const minute = Math.floor(decpart * 60) + '';
    return `${hour} hours and ${minute} minutes`;
}
const travelTime = travelTimeCalculator(travelInformation);
console.log(travelTime)

// Time Calculation of  series Duration in Life. 
const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 6,
        hours: 15,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 9,
        hours: 3,
        minutes: 0,
    },
];

function logOutSeriesText() {
    // write code here
    let totalPerLifeSpan = 0;
    const age = 80;
    for (let i = 0; i < seriesDurations.length; i++) {
        const serialTime = seriesDurations[i].days + (seriesDurations[i].hours / 24);
        const lifeLongSpan = age * 365;
        const perLifeSpan = serialTime * 100 / lifeLongSpan;
        console.log(`${seriesDurations[i].title} took ${perLifeSpan.toFixed(3)}% of my life`)
        totalPerLifeSpan += +perLifeSpan.toFixed(3)
    }
    // Return total percentage of life Span 
    return `In total that is ${totalPerLifeSpan}% of my life`
}
const perLifeSpan = logOutSeriesText()
console.log(perLifeSpan)


// Save Notes Function
const notes = [];
function saveNote(content, id) {
    let value = content;
    let key = id;
    if (typeof (value) !== 'string' || typeof (id) !== 'number') {
        console.warn("Please enter valid Input")
    }
    else {

        let object = {
            content: value,
            id: key
        }
        notes.push(object)
    }
}
saveNote("Pick up groceries", 1)
saveNote("Do laundry", 2);
saveNote("Do laundry", "113");
saveNote("car pickup", 4);
saveNote("Doctor Appointment", 5);
saveNote("Car charge", 6);
console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Getnotes function 
function getNote(id) {
    if (typeof (id) !== 'number') {
        return console.log('Please enter valid Id');
    }
    else if (id > notes.length) {
        return console.log("Id doest exist, please enter valid Id")
    }
    else {
        for (let i = 0; i < notes.length; i++) {
            if (id === notes[i].id) {
                return notes[i];
            }
        }
    }
}
const firstNote = getNote(2);
console.log(firstNote);

// Logout Notes Function 

function logOutNotesFormatted() {
    // your code here
    for (let i = 0; notes.length; i++) {
        console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`)
    }
}
logOutNotesFormatted();


