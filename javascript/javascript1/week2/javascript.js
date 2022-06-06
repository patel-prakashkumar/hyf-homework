// Task 1: Add two parameter in function.

function getFullName(firstname, lastname) {
    return `${firstname} ${lastname}`;
}
console.log(getFullName("Benjamin", "Hughes"));



// fullname with formalname and gender condition check , also checked empty string in firstname and lastname

const fullName1 = getFullName("Prakash", "Patel", "male", true);
const fullName2 = getFullName("Smita", "Patel", "female", true);
const fullName3 = getFullName("Maahit", "Patel", "male", false);
const fullName4 = getFullName("Preshu", "Patel", "female", true);
const fullName5 = getFullName("", "", "female", true);
const fullName6 = getFullName("Prakash", "Patel", "male", true);
const fullName7 = getFullName(" ", " ", "female", true);
const fullName8 = getFullName(true, true, "female", true);

function getFullName(firstname, lastname, gender, useFormalName) {
    if (firstname.length === 0 || lastname.length === 0) {
        console.warn("please enter first name or last name")
    }
    else if (typeof (firstname) !== 'string' || typeof (lastname) !== 'string') {
        console.warn("please enter correct first name or last name")
    }

    else if (firstname.match(/^\s+$/) !== null || lastname.match(/^\s+$/) !== null) {
        console.warn("please remove empty space and enter correct first name or last name")
    }

    else if (useFormalName === true) {
        if (gender == "male") {
            return `Lord ${firstname} ${lastname}`;
        }
        else {
            return `Lady ${firstname} ${lastname}`;
        }
    }

    else {

        return `${firstname} ${lastname}`;
    }


}

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(fullName4);
console.log(fullName5);
console.log(fullName6);
console.log(fullName7);
console.log(fullName8);



// Task 2 Eventday calculator 



function getEventWeekday(eventday) {
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const weekDay = new Date();

    weekDay.setDate(weekDay.getDate() + eventday);
    return weekDays[weekDay.getDay()];
}
getEventWeekday(1);
getEventWeekday(1);
console.log(`Event held on ${getEventWeekday(1)}`);



// Task 3  Weather to Wear cloth.

const winter = weatherToWear(5);
const spring = weatherToWear(14);
const summer = weatherToWear(20);

function weatherToWear(temperture) {
    if (temperture <= 10) {
        return "Sweater, Jacket & Warm Cap";
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

    if (typeof (studentName) !== 'string' || studentName.match(/^\s+$/) !== null) {
        console.warn("Please enter correct student name")
    }
    else if (class07Students.length > 6)
        if (studentName === "Queen") {
            if (class07Students.includes(studentName)) {
                console.warn("Queen already in class");
            }
            else {

                class07Students.push(studentName);
            }
        }
        else {

            console.warn("Cannot add more students to class");

        }

    else {
        if (class07Students.includes(studentName)) {
            console.warn("Student is already in the class");
        } else {
            class07Students.push(studentName);
        }
    }




}



addStudentToClass("Prakash");
addStudentToClass("Prakash");
addStudentToClass("Michel");
addStudentToClass("Danial");
addStudentToClass("Tommy");
addStudentToClass("Christian");
addStudentToClass("Queen");
addStudentToClass("Prakash");
addStudentToClass();
addStudentToClass(true);
addStudentToClass(null);
addStudentToClass("");
addStudentToClass(" ");
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

