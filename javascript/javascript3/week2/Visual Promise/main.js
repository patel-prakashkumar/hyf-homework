const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');
function boxToMove(currentBoxPosition, targetBoxPosition) {
    return {
        x: targetBoxPosition.x - (currentBoxPosition.getBoundingClientRect()).left,
        y: targetBoxPosition.y - (currentBoxPosition.getBoundingClientRect()).top
    }
};
const redCircleTarget = boxToMove(redBox, { x: 20, y: 300 })
const blueCircleTarget = boxToMove(blueBox, { x: 400, y: 300 })
const greenCircleTarget = boxToMove(greenBox, { x: 400, y: 20 })
const backToPosition = { x: 0, y: 0 }
async function translateOneByOne() {

    await moveElement(redBox, redCircleTarget).then(
        () => {
            console.log('Red element has been moved');
        }
    );
    await moveElement(blueBox, blueCircleTarget).then(
        () => {
            console.log('Blue element has been moved');
        }
    );
    await moveElement(greenBox, greenCircleTarget).then(() => {
        console.log('Green element has been moved');
    });

    await Promise.all([moveElement(redBox, backToPosition), moveElement(blueBox, backToPosition), moveElement(greenBox, backToPosition)])
        .then(() => {
            console.log('all eleemnt has been moved');
        });

    await translateAllAtOnce()
}
translateOneByOne();
async function translateAllAtOnce() {
    await Promise.all([moveElement(redBox, redCircleTarget), moveElement(blueBox, blueCircleTarget), moveElement(greenBox, greenCircleTarget)])
        .then(() => {
            console.log('all eleemnt has been moved');
        });
}
