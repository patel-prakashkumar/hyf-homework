const myDiv = document.getElementById('div');
const displayOutput = document.getElementById('display-output')
// Task 1
const result = setTimeout(textDisplay, 2500)
function textDisplay() {
   console.log('Task 1: Called after 2.5 seconds')
}
//Task 2
function resultToDisplay(delay, stringToLOg) {
    const y = delay * 1000
    function displayLog() {
     console.log(stringToLOg)
    }
    const output = setTimeout(displayLog, y)
    return output;
}
resultToDisplay(3, 'Task2 : This string logged after 3 seconds');
resultToDisplay(5, 'Task2 : This string logged after 5 seconds');
//Task 3
const btn = document.createElement('button');
btn.innerHTML = 'Task 3 : click Me Display in 5 sec.'
myDiv.appendChild(btn);
btn.addEventListener('click', btnclick)
function btnclick() {
    function text() {
        displayOutput.innerHTML = 'Task 3 : Called after 5 seconds'
    }
    const x = setTimeout(text, 5000)
}
// task 4
const earthLogger = () => { return 'Task 4 : Its earth Function' };
const saturnLogger = () => { return 'Task 4 : Its saturn Function' };
function planetLogFunction(x) {
    return x();
}
console.log(planetLogFunction(earthLogger));
console.log(planetLogFunction(saturnLogger));
//task 5 
const btnLocation = document.createElement('button')
btnLocation.innerHTML = 'Task 5 : Log Location';
myDiv.appendChild(btnLocation);
btnLocation.addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        let x = position.coords.latitude;
        let y = position.coords.longitude;
        displayOutput.innerHTML = `Task 5 <p>This is Latitude of Location is : ${x}</p> <p>This is Longitude of Location is : ${y}</p>`;

    })
})
// Task 6 optiona not done yet

//Task 7 
function runAfterDelay(delay, callback) {
    const y = delay * 1000
    return setTimeout(callback, y);
}
runAfterDelay(4, function () {
    console.log('Task 7 : should be logged after 4 second')
});

// task 8: Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"

const btnClick = document.createElement('button')
btnClick.innerHTML = 'Task 8: Single Click Or Double Click';
myDiv.appendChild(btnClick);
let pendingClick;
window.addEventListener('click', function myclick() {
         clearTimeout(pendingClick);
         pendingClick = setTimeout(() => {
        displayOutput.innerHTML = 'Task 8 : click';
    }, 1000);
})
window.addEventListener('dblclick', function mydblclick() {
    clearTimeout(pendingClick);
    displayOutput.innerHTML = 'Task 8 : double click';
})
// task 9: Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.
let shouldTellFunnyJoke = false;
function logFunnyJoke() {
    console.log("Task 9 : whats best thing about switzerland? I don't know, but the flag is a big plus")
}

function logBadJoke() {
    console.log("Task 9 : what do you call a fish with no eyes? A fsh")
}

function jokeCreator(x, y, z) {
    if (x === true) {
        return y()
    }
    else {
        return z()
    }
}
jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) 

// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
function a(){
    console.log('Execersise2 task 1 : function A: Its First item in array')
  }
  function b(){
    console.log('Execersise2 task 1  : function B: Its Second items in array')
  }
  function c(){
    console.log('Execersise2 task 1 : function C: Its Third item in array')
  }
  const arrayValue = [a(), b(), c()];
  arrayValue.forEach((list) => {
      return list
  });
  
  // Create a function as a const and try creating a function normally. Call both functions. Read up on this if you are interested:
  
  const constFunction = function numberOfitme() { return 'Execersise2 task 2 : Its return Const function Value'; }
  console.log(constFunction())
  function numberOfitme() { return 'Execersise2 task 2 : Its return normal function Value'; }
  console.log(numberOfitme())
  
  // Create an object that has a key whose value is a function. Try calling this function.
  
  const objectFunction   = {
      name: 'prakash',
      address : function(){
          return 'Execersise2 task 3 : Vejegårdsparken Vallenbæk 2665'
      }
  }
  console.log(objectFunction.address())