//Find the shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
const shortestWord = document.getElementById('shortest-word');
const displayWord = document.createElement('h4')
displayWord.innerHTML = `Danish Words List : [${danishWords}]`;
shortestWord.appendChild(displayWord);
function findShortestWord(danishWords) {
    let shortest = danishWords.reduce((shortestWord, currentWord) => {
        return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, danishWords[0]);
    return shortest;
}
const shortestOutput = findShortestWord(danishWords);
const displayOutput = document.createElement('h4')
displayOutput.innerHTML = `Shortest word from List is : ${shortestOutput}`;
shortestWord.appendChild(displayOutput);
// Danish letters
const danishString = "Jeg har en blå bil";
const danishString2 = "BlÅ grød med røde bær";
const danishLetter = document.getElementById('danish-letters');
const danishLetters = document.createElement('h4');
danishLetters.innerHTML = `Danish letters 1 : "${danishString}"` + `Danish letters 2 : "${danishString2} "`;
danishLetter.appendChild(danishLetters);
function findDanishString(danishChar) {
    let charÅ = (danishChar.toLowerCase().match(/å/g) || []).length;
    let charÆ = (danishChar.toLowerCase().match(/æ/g) || []).length;
    let charØ = (danishChar.toLowerCase().match(/ø/g) || []).length;
    let total = charÅ + charÆ + charØ;
    const displyChar = {
        Total: total,
        æ: charÆ,
        ø: charØ,
        å: charÅ
    }
    for (var key in displyChar) {
        if (displyChar[key] === 0) delete displyChar[key];
    }

    return displyChar
}
console.log(findDanishString(danishString))
console.log(findDanishString(danishString2))
const danishChar = JSON.stringify(findDanishString(danishString)) + JSON.stringify(findDanishString(danishString2));
const displayCharOutput = document.createElement('p')
displayCharOutput.innerHTML = `Results : ${danishChar}`
danishLetter.appendChild(displayCharOutput);

// Spirit animal name generator
const labelName = document.createElement('label');
labelName.innerHTML = "Name : ";
labelName.style.fontFamily = 'Arial, Helvetica, sans-serif'
const inputName = document.createElement('input');
const displayName = document.createElement('p');
displayName.style.backgroundColor = 'Lightgray'
const btnName = document.createElement('button');
btnName.innerText = "Click Me!"
btnName.style.backgroundColor = 'lightblue'
btnName.style.padding = '10px'
btnName.style.margin = '10px'
console.log(btnName)
document.getElementById('cointainer').appendChild(labelName);
document.getElementById('cointainer').appendChild(inputName).placeholder = 'Input Your Name';
document.getElementById('cointainer').appendChild(btnName);
document.getElementById('cointainer').appendChild(displayName);
const spiritAnimal = ['The Lion Attitude', 'Loyalty and bravery of Dog', 'The self control ant', 'The wisdom Fox', 'Isolated Got', 'Intelligence Giraffe', 'The Courageous Goldfinch', 'Transfromation of frog', 'Balance of Panda', 'Power of Tiger']

// Spitit Animal advance option
const radioMouse = document.getElementById('mouse');
const radioInput = document.getElementById('key');
const radioButton = document.getElementById('button-click');

function eventB() {

    const randomName = Math.floor(Math.random() * spiritAnimal.length);
    const text = inputName.value;
    if (!text) {
        displayName.innerHTML = 'Please Enter your Name'
    }
    else {
        displayName.innerHTML = text + ' : ' + spiritAnimal[randomName];
    }
}

const radios = document.querySelectorAll('input')
for (const radio of radios) {
    radio.onclick = (e) => {
        if (e.target.value === 'mouse-hover') {
            inputName.value = '';
            displayName.innerHTML = 'you have select mouse'
            inputName.addEventListener('mouseover', eventB)
            inputName.removeEventListener('keypress', eventB)
            btnName.removeEventListener('click', eventB)
        }
        else if (e.target.value === 'key-type') {
            inputName.value = '';
            displayName.innerHTML = 'you have select key type'
            inputName.addEventListener('keypress', eventB)
            inputName.removeEventListener('mouseover', eventB)
            btnName.removeEventListener('click', eventB)
        }
        else if (e.target.value === 'button-clicks') {
            inputName.value = '';
            displayName.innerHTML = 'you have select button event'
            btnName.addEventListener('click', eventB)
            inputName.removeEventListener('keypress', eventB)
            inputName.removeEventListener('mouseover', eventB)
        } else {

            displayName.innerHTML = 'please select radio button'
        }
    }
}


// product list
console.log("Script loaded");
const products = getAvailableProducts();
function renderProducts(products) {
    // your code here
    const myUl = document.getElementById('product-ul');
    for (const oneProduct of products) {
        const productLi = document.createElement('li');
        myUl.appendChild(productLi).style.border = 'solid';
        productLi.style.padding = '10px'
        const title = document.createElement('li');
        const price = document.createElement('li');
        const rating = document.createElement('li');
        title.innerHTML = `Name: ${oneProduct.name}`
        price.innerHTML = `Price: ${oneProduct.price}`
        rating.innerHTML = `Rating: ${oneProduct.rating}`
        productLi.appendChild(title).style.fontWeight = 'bold';
        productLi.appendChild(price);
        productLi.appendChild(rating);
    }
}
renderProducts(products);