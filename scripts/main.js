let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let dx = 1;
let dy = -1;

let x = 440;
let y = 110;

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
let level = 1;

let dots = [];

var monster = document.getElementById("monster");
var night = document.getElementById("night");
var steve = document.getElementById("steve");

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
    ctx.rect(440, 30, 610, 425);
    ctx.stroke();
}

function drawLevel() {
    ctx.font = "20px VT323"; 
    ctx.fillStyle = "white"; 
    ctx.fillText("Level:" + level, 1050-80, 30 + 20);
}

/* function dotDetection() {
    for (let c=0; c< brickColumnCount; c++) {
        for(let r=0; r < brickRowCount; r++) {
            let b = bricks[c][r];
            if (b.show ==true) {
                if (x> b.x && x < b.x + brickWidth && y > b.y && y <b.y + brickHeight) {
                    dy = -dy;
                    b.show = false;
                    score++;
                    if (score == brickRowCount * brickColumnCount) {
                        if (levelCount % 3 ==1) {
                            alert("Onto Level 2!");
                            resetBricks();
                            x = canvas.width/2;
                            y = canvas.height-30;
                            paddleWidth -=30;
                            levelCount +=1;
                            dx = 2;
                            dy = -2;
                            
                        }
                        if (levelCount % 3==2 ) {
                            alert("Onto Level 3!");
                            resetBricks();
                            x = canvas.width/2;
                            y = canvas.height-30;
                            paddleWidth -=30;
                            levelCount +=1;
                            dx = 2.5;
                            dy = -2.5;
                        }
                        if (levelCount % 3==0) {
                            alert("Back to Level 1!");
                            resetBricks();
                            x = canvas.width/2;
                            y = canvas.height-30;
                            paddleWidth = 90;
                            levelCount +=1;
                            dx = 1.5;
                            dy = -1.5;
                        }
                        
                        
                    }
                }
            }
            
        }
    }
}
*/ 

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


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(night, 440, 30, 610, 425);
    drawRect();
   

    x+=dx;
    y+=dy;

    if(level == 1) {
        drawDots1(0);
        drawDots1(380);
        drawDots2(0);
        drawDots2(560);
    }
    

    if (x + dx + 60> 1050 || x + dx < 440) {
        dx = -dx;
    }
   
    if(y + dy < 30 || y + dy + 90 > 455) {
        dy = -dy;
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

    drawLevel();
    ctx.drawImage(steve, a, b, 40, 90);
    ctx.drawImage(monster, x, y, 60, 90);

}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let interval = setInterval(draw,10);

var start = new Date(); 
var elapsed = new Date() - start / 100; 
