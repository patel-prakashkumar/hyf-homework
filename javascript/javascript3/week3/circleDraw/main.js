class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngel = startAngle;
        this.endAngel = endAngle;
        this.fillColor = fillColor;
    }
    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.r, this.startAngel, 2 * Math.PI, this.fillColor);
        context.fill();
        context.stroke();
    }
}
let circlesPos = {
    left: 40,
    top: 20,
}

function circleFillSameColor() {
    const canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    function createCircle(circleFillSameColor) {
        circleFillSameColor.draw(context);
    }
    const colorRandom = Math.floor(Math.random() * 16777215).toString(16);
    context.fillStyle = "#" + colorRandom;
    let circles = [];
    for (let i = 0; i < 15; i++) {
        const xRandom = Math.random() * 100 + circlesPos.left;
        const yRandom = Math.random() * 100 + circlesPos.top;
        const radiusRandom = Math.random() * 20;
        let circleFillSameColor = new Circle(xRandom, yRandom, radiusRandom, 0, 2 * Math.PI, colorRandom);
        circles.push(circleFillSameColor);
        createCircle(circles[i]);
    }
    const btnCircleFillSameColor = document.getElementById("circle-samecolorfill");
    btnCircleFillSameColor.addEventListener('click', () => {
        window.location.reload();
    });
}
circleFillSameColor();


function circleFillDiffColor() {
    const canvas2 = document.getElementById("myCanvas2");
    let context = canvas2.getContext("2d");
    function createCircle(circleFillSameColor) {
        circleFillSameColor.draw(context);
    }
    let circles = [];
    for (let i = 0; i < 15; i++) {
        const xRandom = Math.random() * 100 + circlesPos.left;
        const yRandom = Math.random() * 100 + circlesPos.top;
        const radiusRandom = Math.random() * 20;
        const colorRandom = Math.floor(Math.random() * 16777215).toString(16);
        let circleFillSameColor = new Circle(xRandom, yRandom, radiusRandom, 0, 2 * Math.PI, colorRandom);
        context.fillStyle = "#" + colorRandom;
        circles.push(circleFillSameColor);
        createCircle(circles[i]);
    }
}
circleFillDiffColor();

function circleCreate100ms() {
    const canvas3 = document.getElementById("myCanvas3");
    let context = canvas3.getContext("2d");
    function createCircle() {
        const xRandom = Math.random() * 150 + circlesPos.left;
        const yRandom = Math.random() * 150 + circlesPos.top;
        let c1 = new Circle(xRandom, yRandom, 10, 0, 2 * Math.PI);
        context.fillStyle = "#FFFFFF";
        c1.draw(context)

    }
    const intervalCircle = setInterval(createCircle, 100);
    setTimeout(()=>{clearInterval(intervalCircle)}, 10000);
}
circleCreate100ms();

function circleMouseMove() {
    const canvas4 = document.getElementById("myCanvas4");
    let context = canvas4.getContext("2d");
    function createCircle() {
        const xRandom = Math.random() * 150 + circlesPos.left;
        const yRandom = Math.random() * 150 + circlesPos.top;
        const colorRandom = Math.floor(Math.random() * 16777215).toString(16);
        let c1 = new Circle(xRandom, yRandom, 10, 0, 2 * Math.PI, colorRandom);
        context.fillStyle = "#" + colorRandom;
        c1.draw(context)

    }
 canvas4.addEventListener('mousemove', createCircle)
}
circleMouseMove();










