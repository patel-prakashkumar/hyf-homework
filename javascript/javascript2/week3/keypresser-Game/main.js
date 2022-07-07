const inputTime = document.getElementById('input-key');
const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');
const btnAgain = document.getElementById('btn-again');
const countdown = document.getElementById('countdown')
const sKey = document.getElementById('box-1')
const lKey = document.getElementById('box-2')
const resultBox = document.getElementById('box-3')
const winnerResult = document.getElementById("winner");
const skeyOutput = document.getElementById("skey")
const lkeyOutput = document.getElementById("lkey")
let counterS = 0;
let counterL = 0;
let countDown = 0;
function keyPress(e) {
    if (e.key === 's') {
        enterTime = inputTime.value;
        skeyOutput.innerHTML = `Number of Key Pressed ${counterS++}`
    }
    else if (e.key === 'l') {
        enterTime = inputTime.value;
        lkeyOutput.innerHTML = `Number of Key Pressed ${counterL++}`
    }
    else {
        winnerResult.innerHTML = '<h3>Press wrong Key</h3>'
    }
}
function display() {
    document.removeEventListener('keypress', keyPress)
    if (counterL > counterS) {
        return SkeyResult()
    }
    else {
        return LkeyResult()
    }
}
function SkeyResult() {
    winnerResult.innerHTML = `<b>Winner of the Game :==> L key Player Total Number of key Pressed ${counterL} within ${enterTime} Second<b/>`
    lKey.style.backgroundColor = 'lightgreen'
    resultBox.style.backgroundColor = '#F06D06'
    sKey.style.backgroundColor = 'Red'
    document.body.style.backgroundColor = "#76BA99";
}
function LkeyResult() {
    winnerResult.innerHTML = `<b>Winner of the Game :==> S key Player Total Number of key Pressed ${counterS} within ${enterTime} Second</b>`
    sKey.style.backgroundColor = 'lightgreen'
    lKey.style.backgroundColor = 'Red'
    resultBox.style.backgroundColor = '#F06D06'
    document.body.style.backgroundColor = "#76BA99";
}
function btnStartAgain() {
    inputTime.value = '';
    lkeyOutput.innerHTML = '';
    skeyOutput.innerHTML = '';
    winnerResult.innerHTML = '';
    countdown.innerHTML = '';
    lKey.style.backgroundColor = '#C4DFAA';
    resultBox.style.backgroundColor = '#C4DFAA';
    sKey.style.backgroundColor = '#C4DFAA';
    document.body.style.backgroundColor = "#C4DFAA";
}
function setTimer() {
    const enterTime = inputTime.value;
    const time = enterTime * 1000
    let count = enterTime;
    let counter = setInterval(timer, 1000);
    let x = setTimeout(display, time)
    document.addEventListener('keypress', keyPress)
    btnStop.addEventListener('click', stopGame)

    function timer() {
        count = count - 1;
        if (count <= 0) {
            clearInterval(counter);
            countdown.innerHTML = 'Game Over'
            return;
        }
        countdown.innerHTML = "Countdown to End of Game :" + count; // watch for spelling
    }
    function stopGame() {
        clearTimeout(x)
        inputTime.value = '';
        lkeyOutput.innerHTML = '';
        skeyOutput.innerHTML = '';
        winnerResult.innerHTML = '<h3>Game Stop By User</h3>'
    }
}
btnStart.addEventListener('click', setTimer)
btnAgain.addEventListener('click', btnStartAgain)



