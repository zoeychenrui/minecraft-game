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

let carx = 480;
let cary = 120;

let beax = 850;
let beay = 325;

let eggx = 950;
let eggy = 100;

let pigx = 700;
let pigy = 200;

let endx = 1000;
let endy = 400;

let rightPressed = false; 
let leftPressed = false;
let upPressed = false; 
let downPressed = false;

let wallWidth = 15; 
let wallHeight = 70; 

let lives = 3;
let level = 3;
let score = 0;

let dots = [];

let carrotcol = false; 
let beaconcol = false;
let eggcol = false;
let pigcol = false;
let endercol = false;

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


function collisionDetection() {
    if(level==1) {
        if((a > x-60 && a<x+60 && b > y - 90 && b<y+90)) {
            if(lives==1) {
                alert("Game Over!");
                document.location.reload();
                clearInterval(interval);
            }
            else {
                lives-=1;
                setPos();
            }
            
        }
    }
    else if(level==2) {
        if((a > x-60 && a<x+60 && b > y - 90 && b<y+90) || (a > sx-60 && a<sx+60 && b > sy - 90 && b<sy+90)) {
            if(lives==1) {
                alert("Game Over!");
                document.location.reload();
                clearInterval(interval);
            }
            else {
                lives-=1;
                setPos();
            }
            
        }
    }
    else if(level==3) {
        if((a > x-60 && a<x+60 && b > y - 90 && b<y+90) || (a > sx-60 && a<sx+60 && b > sy - 90 && b<sy+90) || (a > cx-60 && a<cx+50 && b > cy - 90 && b<cy+90) ) {
            if(lives==1) {
                alert("Game Over!");
                document.location.reload();
                clearInterval(interval);
            }
            else {
                lives-=1;
                setPos();
            }
            
        }
    }
    
}

function setPos() {
    dx = 1;
    dy = -1;
    
    dsx = 1;
    dsy = -1;
    
    dcx = 1;
    dcy = -1;
    
    x = 440;
    y = 110;
    
    sx = 950;
    sy = 110;
    
    cx = 800; 
    cy = 340; 
    
    a = 500; 
    b = 365;
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
    //ctx.drawImage(carrot, 480, 120, 30, 30);
    // ctx.drawImage(beacon, 850, 325, 50, 50);
    //ctx.drawImage(egg, 950, 100, 30, 30);
    //ctx.drawImage(pig, 700, 200, 50, 50);
    //ctx.drawImage(ender, 1000, 400, 30, 30);
}

function setItemsPos() {
    carrotcol = false; 
    beaconcol = false;
    eggcol = false;
    pigcol = false;
    endercol = false;
    carx = 480;
    cary = 120;

    beax = 850;
    beay = 325;

    eggx = 950;
    eggy = 100;

    pigx = 700;
    pigy = 200;

    endx = 1000;
    endy = 400;
}

function checkLevel() {
    if (score<5) {
        level = 1;
    }
    else if(score==5) {
        setItemsPos();
        level = 2;
    }
    else if (score < 10) {
        level = 2;
    }
    else if(score ==10) {
        setItemsPos();
        level = 2;
    }
    else if(score <15) {
        level = 3;
    }
    else if(score==15) {
        alert("You survived the night!");
        document.location.reload();
        clearInterval(interval);
    }

} 

function carrotCollide() {
    if(a > carx-60 && a< carx+60 && b > cary - 90 && b< cary+90) {
        carrotcol = true;
        carx = 0;
        cary = 0;
        score+=1;
    }
    if(!carrotcol) {
        ctx.drawImage(carrot, carx, cary, 30, 30);
    }
}

function beaconCollide() {
    if(a > beax-60 && a< beax+60 && b > beay - 90 && b< beay+90) {
        beaconcol = true;
        beax = 0;
        beay = 0;
        score+=1;
    }
    if(!beaconcol) {
        ctx.drawImage(beacon, beax, beay, 50, 50);
    }
}

function eggCollide() {
    if(a > eggx-60 && a< eggx+60 && b > eggy - 90 && b< eggy+90) {
        eggcol = true;
        eggx = 0;
        eggy = 0;
        score+=1;
    }
    if(!eggcol) {
        ctx.drawImage(egg, eggx, eggy, 30, 30);
    }
}

function pigCollide() {
    if(a > pigx-60 && a< pigx+60 && b > pigy - 90 && b< pigy+90) {
        pigcol = true;
        pigx = 0;
        pigy = 0;
        score+=1;
    }
    if(!pigcol) {
        ctx.drawImage(pig, pigx, pigy, 50, 50);
    }
}

function enderCollide() {
    if(a > endx-60 && a< endx+60 && b > endy - 90 && b< endy+90) {
        endercol = true;
        endx = 0;
        endy = 0;
        score+=1;
    }
    if(!endercol) {
        ctx.drawImage(ender, endx, endy, 30, 30);
    }
}

function allCollides() {
    carrotCollide(); 
    beaconCollide();
    eggCollide();
    pigCollide();
    enderCollide();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    checkLevel();

    if(level==1) {
        ctx.drawImage(night, 440, 30, 610, 425);
        allCollides();
    }

    else if(level==2) {
        ctx.drawImage(night2, 440, 30, 610, 425);
        allCollides();
        ctx.drawImage(skeleton, sx, sy, 60, 90);
    }
    else if(level==3) {
        ctx.drawImage(night3, 440, 30, 610, 425);
        allCollides();
        ctx.drawImage(skeleton, sx, sy, 60, 90);
        ctx.drawImage(creeper, cx, cy, 50, 90);
    }
    
    ctx.drawImage(steve, a, b, 40, 90);
    ctx.drawImage(monster, x, y, 60, 90);
  
    drawRect();
   
    x+=dx;
    y+=dy;

    sx+=dsx;
    sy+=dsy;

    cx+=dcx;
    cy+=dcy;
    

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

    drawLives(); 
    drawLevel();
    
    collisionDetection();
    
}

document.getElementById("pics").style.visibility = "hidden";


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let interval = setInterval(draw,10);

var start = new Date(); 
var elapsed = new Date() - start / 100; 
