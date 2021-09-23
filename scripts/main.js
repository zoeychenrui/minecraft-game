let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");



let rightPressed = false; 
let leftPressed = false;
let upPressed = false; 
let downPressed = false;

let dotRadius = 5; 
let dotOffsetLeft = 310; 
let dotOffsetTop = 110;
let dotWidthCount = 30; 
let dotPadding = 15;

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
        if (dots[r].show == true) {
            let dotX = (r*(dotRadius+dotPadding)) + dotOffsetLeft; 
            let dotY = dotOffsetTop;
            dots[r].x = dotX;
            dots[r].y = dotY;
            ctx.beginPath();
            ctx.arc(dotX, dotY, dotRadius, 0, Math.PI*2);
            ctx.fillStyle = "hsl("+Date.now()*0.07%360+",80%,50%)";
            ctx.fill();
            ctx.closePath();
        }
    }
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots1();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.rect(300, 100, 600, 450);
    ctx.stroke();
}


let interval = setInterval(draw,10);

var start = new Date(); 
var elapsed = new Date() - start / 100; 
