// Task 1: Add two parameter in function.

function getFullName(firstname, lastname) {
    console.log(`"${firstname} ${lastname}"`);
}
getFullName("Benjamin", "Hughes");


// fullname with formalname and gender condition check , also checked empty string in firstname and lastname

const fullName1 = getFullName("Prakash", "Patel", "male", true);
const fullName2 = getFullName("Smita", "Patel", "female", true);
const fullName3 = getFullName("Maahit", "Patel", "male", false);
const fullName4 = getFullName("Preshu", "Patel", "female", true);
const fullName5 = getFullName("", "", "female", true);
const fullName6 = getFullName("Prakash", "Patel", "male", true);

function getFullName(firstname, lastname, gender, useFormalName) {
    if (firstname === "" || lastname === "") {
        console.warn("please enter first name or last name")
    }
    else {
        if (useFormalName == true) {
            if (gender == "male") {
                console.log(`"Lord ${firstname} ${lastname}"`);
            }
            else
                console.log(`"${firstname} ${lastname}"`)
        } else {
            console.log(`"${firstname} ${lastname}"`);
        }
    }
}
getFullName(fullName1);


// Task 2 Eventday calculator 

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const weekDay = new Date();

function getEventWeekday(eventday) {

    weekDay.setDate(weekDay.getDate() + eventday);
    return weekDays[weekDay.getDay()];
}
console.log(`Event held on ${getEventWeekday(6)}`);

// Task 3  Weather to Wear cloth.

const winter = weatherToWear(5);
const spring = weatherToWear(14);
const summer = weatherToWear(20);

function weatherToWear(temperture) {
    if (temperture <= 10) {
        return "Sweter, Jacket & Warm Cap";
    } else if (temperture <= 18) {
        return "Fullsleve T-shirt & Jense";
    } else {
        return "short and a t-shirt ";
    }
}

weatherToWear();
console.log(winter);
console.log(spring);
console.log(summer);

// Task 4 Student Manager 
const class07Students = [];
function addStudentToClass(studentName) {
    // You write code here

    if (class07Students.length > 6) {
        if (studentName == "Queen") {
            class07Students.push(studentName);
        } else {
            console.log("Cannot add more students to class");
        }
    } else {
        if (class07Students.includes(studentName)) {
            console.log("Student is already in the class");
        } else {
            class07Students.push(studentName);
        }
    }
}

addStudentToClass("Prakash");
addStudentToClass("Prakash");
addStudentToClass("Michel");
addStudentToClass("Danial");
addStudentToClass("Jakub");
addStudentToClass("Milo");
addStudentToClass("Tommy");
addStudentToClass("Christian");
addStudentToClass("Queen");
addStudentToClass("Prakash");

console.log(class07Students);

function getNumberOfStudents() {
    // You write code here

    console.log(`Total Number of Student in Class ${class07Students.length}`);
}
getNumberOfStudents();

// Task 5 Candy helper. 
const boughtCandyPrices = []

function addCandy(candyType, weight) {

    if (candyType === "Sweet") {

        boughtCandyPrices.push(weight * 0.5);

    }

    else if (candyType === "Chocolate") {

        boughtCandyPrices.push(weight * 0.7);

    }
    else if (candyType === "Toffe") {
        boughtCandyPrices.push(weight * 1.1);

    }

    else {
        boughtCandyPrices.push(weight * 0.03);
    }

    return boughtCandyPrices;

}
addCandy("Sweet", 20);
addCandy("Chocolate", 25);
addCandy("Toffe", 15);
addCandy("Chewing-gum", 40);
console.log(boughtCandyPrices);

// create function canBuyMoreCandy and match total price with math.random()
const amountToSpend = Math.random() * 100;
let total = 0;
function canBuyMoreCandy() {

    for (let i = 0; i < boughtCandyPrices.length; i++) {

        total += boughtCandyPrices[i]

    }
    if (total <= amountToSpend) {
        console.log("You can buy more, so please do!")
    }
    else {
        console.log("Enough candy for you!")
    }

}
canBuyMoreCandy();

