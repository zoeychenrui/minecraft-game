let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let dx = 1;
let dy = -1;

let dsx = 1;
let dsy = -1;

let dcx = 1;
let dcy = -1;

let x = 440;
let y = 110;

let sx = 950;
let sy = 110;

let cx = 800; 
let cy = 340; 

let a = 500; 
let b = 365; 

let rightPressed = false; 
let leftPressed = false;
let upPressed = false; 
let downPressed = false;

let dotRadius = 5; 
let dotOffsetLeft = 465; 
let dotOffsetTop = 55;
let dotWidthCount = 29; 
let dotHeightCount = 20;
let dotPadding = 15;

let wallWidth = 15; 
let wallHeight = 70; 

let lives = 3;
let level = 3;
let score = 0;

let dots = [];

var monster = document.getElementById("monster");
var night = document.getElementById("night");
var night2 = document.getElementById("night2");
var night3 = document.getElementById("night3");
var steve = document.getElementById("steve");
var carrot = document.getElementById("carrot");
var beacon = document.getElementById("beacon");
var egg = document.getElementById("egg");
var pig = document.getElementById("pig");
var ender = document.getElementById("ender");
var creeper = document.getElementById("creeper");
var skeleton = document.getElementById("skeleton");

for (let r=0; r < dotWidthCount; r++) {
    dots[r] = { x:0, y:0, show: true};
}

/*
for (let h=0; h < dotHeightCount; h++) {
    dots[h] = { x:0, y:0, show: true};
}

function drawDotsWidth(top) {
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

function drawDotsHeight(left) {
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
*/

function collisionDetection() {
    if(a== x || a == x + 60 || b == y || b == y + 90) {
        lives-=1;
    }
}
function drawRect() {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.rect(440, 30, 610, 425);
    ctx.stroke();
}

function drawLevel() {
    ctx.font = "20px VT323"; 
    ctx.fillStyle = "white"; 
    ctx.fillText("Level:" + level, 1050-80, 30 + 20);
}

function drawLives() {
    ctx.font = "20px VT323"; 
    ctx.fillStyle = "white"; 
    ctx.fillText("Lives:" + lives, 440+20, 30 + 20);
}


    
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key =="Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if(e.key =="Up" || e.key == "ArrowUp"){
        upPressed = true;
    }
    else if(e.key =="Down" || e.key == "ArrowDown"){
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key =="Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    else if(e.key =="Up" || e.key == "ArrowUp"){
        upPressed = false;
    }
    else if(e.key =="Down" || e.key == "ArrowDown"){
        downPressed = false;
    }
}

function drawItems() {
    ctx.drawImage(carrot, 480, 120, 30, 30);
    ctx.drawImage(beacon, 850, 325, 50, 50);
    ctx.drawImage(egg, 950, 100, 30, 30);
    ctx.drawImage(pig, 700, 200, 50, 50);
    ctx.drawImage(ender, 1000, 400, 30, 30);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    
    if(level==1) {
        ctx.drawImage(night, 440, 30, 610, 425);
        drawItems();
    }
    else if(level==2) {
        ctx.drawImage(night2, 440, 30, 610, 425);
        drawItems();
        ctx.drawImage(skeleton, sx, sy, 60, 90);
    }
    else if(level==3) {
        ctx.drawImage(night3, 440, 30, 610, 425);
        drawItems();
        ctx.drawImage(skeleton, sx, sy, 60, 90);
        ctx.drawImage(creeper, cx, cy, 50, 90);
    }
    
    ctx.drawImage(steve, a, b, 40, 90);
    ctx.drawImage(monster, x, y, 60, 90);
    // ctx.drawImage(steve)
    drawRect();
   
    x+=dx;
    y+=dy;

    sx+=dsx;
    sy+=dsy;

    cx+=dcx;
    cy+=dcy;

   /* if(level == 1) {
        drawDotsWidth(0);
        drawDotsWidth(380);
        drawDotsHeight(0);
        drawDotsHeight(560);
    } */
    

    if (x + dx + 60> 1050 || x + dx < 440) {
        dx = -dx;
    }
   
    if(y + dy < 30 || y + dy + 90 > 455) {
        dy = -dy;
    } 

    if (sx + dsx + 60> 1050 || sx + dsx < 440) {
        dsx = -dsx;
    }
   
    if(sy + dsy < 30 || y + dsy + 90 > 455) {
        dsy = -dsy;
    } 

    if (cx + dcx + 60> 1050 || cx + dcx < 440) {
        dcx = -dcx;
    }
   
    if(cy + dcy < 30 || cy + dcy + 90 > 455) {
        dcy = -dcy;
    } 

    if(rightPressed) {
        a +=3; 
        if (a > 1050 - 40) {
            a = 1050 - 40; 
        }
    }
    else if(leftPressed) {
        a -=3;
        if (a < 440) {
            a = 440;
        }
    }
    else if(downPressed) {
        b +=3;
        if (b > 455 - 90) {
            b = 455 - 90;
        }
    }
    else if(upPressed) {
        b -=3;
        if (b < 30) {
            b = 30;
        }
    }

    
    /*if(a == x || b == y) {
        if(lives == 1) {
            alert("Game Over!");
            document.location.reload();
            clearInterval(interval);
        }
        else {
            lives -=1;
            a = 745; 
            b = 242; 
        }
     }
*/
    drawLives(); 
    drawLevel();
    
    collisionDetection();
    //dotDetection();
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let interval = setInterval(draw,10);

var start = new Date(); 
var elapsed = new Date() - start / 100; 
