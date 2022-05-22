var collision = document.getElementById("collisionBox");
var rndBlockSpeed = document.getElementById("blockSpeed");
var blockCollision = document.getElementById("blockBox");
var charCollision = document.getElementById("charCollision");
var bomb1Tele = document.getElementById("bombTele");

window.onload = checkboxes();

var block = document.getElementById("block");
var block2 = document.getElementById("block2");
var pipe = document.getElementById("pipe");
var bomb = document.getElementById("bomb");
var optionsMenu = document.getElementById("optionsMenu");
var randomSpeed = false

function checkboxes() {
    block1Collision();
    collisionCheck();
    randomBlockSpeed();
    characterCollision();
    // block1Teleportation();
}

function block1Collision() {
    if (blockCollision.checked == true) {
        block.style.animation = "none";
        block.style.display = "none";
        console.log("worked")
    } else if (collision.checked == true, collision.checked == false) {
        block.style.animation = "block 4.5s linear infinite";
        block.style.display = "flex";
    }
}

function collisionCheck() {
    if (collision.checked == true) {
        block.style.animation = "none";
        block.style.display = "none";
        character.style.display = "none";
        pipe.style.display = "none";
        block2.style.animation = "none";
        block2.style.display = "none";
    } else {
        block.style.animation = "block 4.5s linear infinite";
        block.style.display = "flex";
        character.style.display = "flex";
        pipe.style.display = "flex";
        block2.style.animation = "block 6.5s infinite linear";
        block2.style.display = "flex";
    }
}

function randomBlockSpeed() {
    var randomNumber2 = Math.floor(Math.random() * 13) + 5;
    if (rndBlockSpeed.checked == true){
        console.log("hi");
     randomSpeed = true;
}
if (randomSpeed == true){
    var randomizeSpeed = setInterval(function () {
        block.style.animationDuration = randomNumber2 + "s";
    },randomNumber2);
}}


function characterCollision () {
    if (charCollision.checked == true) {
        character.style.display = "none";
    } else if (charCollision.checked == false, collision.checked == false) {
        character.style.display = "flex";
    }
}
    setInterval(function b1tele() {
        if (bomb1Tele.checked == false) {
            bomb.style.display = "flex";
            rndPos = Math.floor(Math.random() * 60) + 20;
            bomb.style.left = rndPos + "vw";
            explosion();
            console.log("boooom");

        }
    }, 6000)

function b1Tele() {
    bomb.style.display = "none";
    bomb.style.left = "200vw";
}

function explosion() {
    bomb.style.backgroundColor = "orange";
    setTimeout(function red(){
        bomb.style.backgroundColor = "red";
        setTimeout(function (){
            bombdead();
        },1000);
    },2000);
}

function bombdead() {
    var characterX = document.getElementById('character').offsetLeft;
    var characterY = document.getElementById('character').offsetTop;
    var characterW = document.getElementById('character').offsetWidth;
    var characterH = document.getElementById('character').offsetHeight;

    var bombX = document.getElementById("bomb").offsetLeft;
    var bombY = document.getElementById('bomb').offsetTop;
    var bombW = document.getElementById('bomb').offsetWidth;
    var bombH = document.getElementById('bomb').offsetHeight;
    var rect2 = {x: characterX, y: characterY, width: characterW, height: characterH};
    var rect1 = {x: bombX, y: bombY, width:bombW, height: bombH};
    console.log(rect2);
    console.log(rect1);
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x) {
            gameMenu.style.display = "block";
            block.style.animation = "none";
            block.style.display = "none";
            character.style.display = "none";
            pipe.style.display = "none";
            block2.style.animation = "none";
            block2.style.display = "none";
            optionsMenu.style.display = "none";
            timer.style.display = "none";
            highscore.style.marginTop = "-19.5vw";
            bomb1Tele.checked = "true";
            bomb.style.display = "none";
            console.log("touched");
            if (localStorage.getItem("highscore") < totalSeconds) {
                localStorage.setItem("highscore", totalSeconds);
            }
        } else {
            console.log("nope");
            bomb.style.display = "none";
        }
    }