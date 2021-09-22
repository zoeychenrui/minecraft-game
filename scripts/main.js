let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let rightPressed = false; 
let leftPressed = false;
let upPressed = false; 
let downPressed = false;

let dotRadius = 5; 
let dotOffsetLeft = 5; 
let dotOffsetTop = 5;
let dotWidthCount = 20; 

let wallWidth = 15; 
let wallHeight = 70; 

let lives = 3;
let level = 1;

let dots = [];

for (let r=0; r < dotWidthCount; r++) {
    dots[r] = { x:0, y:0, show: true};
}

function drawDots1() {
    for (let r=0; r < dotWidthCount; r++) {
        if (dots[r].show ==true) {
            let dotX = (r*(dotRadius+dotPadding)) + dotOffsetLeft; 
            let dotY = (r*(dotRadius+dotPadding)) + dotOffsetTop; 
            dots[r].x = dotX;
            dots[r].y = dotY;
            ctx.beginPath();
            ctx.fillStyle = "hsl("+Date.now()*0.07%360+",80%,50%)";
            ctx.fill();
            ctx.closePath();
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots1();
}
var start = new Date(); 
var elapsed = new Date() - start / 100; 
