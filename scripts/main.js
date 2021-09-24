let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");



let rightPressed = false; 
let leftPressed = false;
let upPressed = false; 
let downPressed = false;

let dotRadius = 5; 
let dotOffsetLeft = 465; 
let dotOffsetTop = 125;
let dotWidthCount = 29; 
let dotHeightCount = 20;
let dotPadding = 15;

let wallWidth = 15; 
let wallHeight = 70; 

let lives = 3;
let level = 1;

let dots = [];

for (let r=0; r < dotWidthCount; r++) {
    dots[r] = { x:0, y:0, show: true};
}

function drawDots1(top) {
    for (let r=0; r < dotWidthCount; r++) {
        if (dots[r].show == true) {
            let dotX = (r*(dotRadius+dotPadding)) + dotOffsetLeft; 
            let dotY = dotOffsetTop + top;
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

function drawDots2(left) {
    for (let r=0; r < dotHeightCount; r++) {
        if (dots[r].show == true) {
            let dotX = dotOffsetLeft + left; 
            let dotY = (r*(dotRadius+dotPadding)) + dotOffsetTop; 
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

function drawRect() {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.rect(440, 100, 610, 450);
    ctx.stroke();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots1(0);
    drawDots1(400);
    drawRect();
    drawDots2(0);
    drawDots2(560);

}


let interval = setInterval(draw,10);

var start = new Date(); 
var elapsed = new Date() - start / 100; 
