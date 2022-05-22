var character = document.getElementById("character");
var block = document.getElementById("block");
var block2 = document.getElementById("block2");
var pipe = document.getElementById("pipe");
var optionsMenu = document.getElementById("optionsMenu");
var timer = document.getElementById("timer");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var highscore = document.getElementById("highscore");


function jump (){
    if (character.classList !== "animateJump")
    {
        character.classList.add("animateJump");
    }
    setTimeout(function(){
        character.classList.remove("animateJump");
    },500);
}

function restart(){
    window.location.reload(false);
}

document.onkeydown = detectKey;

var rightMove = false;

function detectKey(e) {
        e = e || window.event;
        if (e.keyCode == '38') {
            // up arrow
            document.getElementById('character').offsetTop = jump();
        } else if (e.keyCode == '37') {
            // left arrow
            moveLeft1();
            moveLeft2();
        } else if (e.keyCode == '39') {
            // right arrow
            // document.getElementById('character').offsetLeft  = (posLeft+1)+"px";
            moveRight();
            moveRight2();
        } else if (e.keyCode == "82") {
            window.location.reload(false);
        } else if (e.keyCode == "67") {
            menuVis();
        }
}

function init(){
    character.style.left = "10vw";
}

function menuVis() {
    if (optionsMenu.style.display == "none") {
        optionsMenu.style.display = "flex"
    } else {
        optionsMenu.style.display = "none"
    }
}


function moveLeft1() {
    var moveL = setInterval (function () {
        character.style.left = parseInt(character.style.left) - 1.4 + "vw";
    },20);
    setTimeout(function (handle) {
        clearInterval(moveL);
    },200);
}

function moveLeft2() {
    var moveL2 = setInterval(function () {
        character.style.left = parseInt(character.style.left) + 1.2 + "vw";
    },20);
    setTimeout(function (handle) {
        clearInterval(moveL2);
    },200);
}

function moveRight() {
    var moveR = setInterval (function () {
        character.style.left = parseInt(character.style.left) + 1.4 + "vw";
    },10);
    setTimeout(function (handle) {
        clearInterval(moveR);
    },200);
}

function moveRight2() {
    var moveR2 = setInterval(function () {
        character.style.left = parseInt(character.style.left) - 1.2 + "vw";
    },40);
    setTimeout(function (handle) {
        clearInterval(moveR2);
    },200);
}

//arrow keys off
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

var checkDead1 = setInterval(function () {
    var characterX = document.getElementById('character').offsetLeft;
    var characterY = document.getElementById('character').offsetTop;
    var characterW = document.getElementById('character').offsetWidth;
    var characterH = document.getElementById('character').offsetHeight;
    var rect2 = {x: characterX, y: characterY, width: characterW, height: characterH};

    var blockX = document.getElementById('block').offsetLeft;
    var blockY = document.getElementById('block').offsetTop;
    var blockW = document.getElementById('block').offsetWidth;
    var blockH = document.getElementById('block').offsetHeight;
    var rect1 = {x: blockX, y: blockY, width:blockW, height: blockH};
if (rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y) {
    // console.log("it worked");
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
    if (localStorage.getItem("highscore") < totalSeconds) {
        localStorage.setItem("highscore", totalSeconds);
    }
    // collision detected
} else {
    // console.log("nope didnt work")
}},10);

var checkDead2 = setInterval(function () {
    var characterX = document.getElementById('character').offsetLeft;
    var characterY = document.getElementById('character').offsetTop;
    var characterW = document.getElementById('character').offsetWidth;
    var characterH = document.getElementById('character').offsetHeight;
    var rect2 = {x: characterX, y: characterY, width: characterW, height: characterH};

    var blockX = document.getElementById('block2').offsetLeft;
    var blockY = document.getElementById('block2').offsetTop;
    var blockW = document.getElementById('block2').offsetWidth;
    var blockH = document.getElementById('block2').offsetHeight;
    var blockG = {x: blockX, y: blockY, width: blockW, height: blockH};
    if (blockG.x < rect2.x + rect2.width &&
        blockG.x + blockG.width > rect2.x &&
        blockG.y < rect2.y + rect2.height &&
        blockG.y + blockG.height > rect2.y) {
        // console.log("it worked");
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
        if (localStorage.getItem("highscore") < totalSeconds) {
            localStorage.setItem("highscore", totalSeconds);
        }
        // collision detected
    } else {
        // console.log("nope didnt work")
    }},10);

var checkDead3 = setInterval(function () {
    var characterX = document.getElementById('character').offsetLeft;
    var characterY = document.getElementById('character').offsetTop;
    var characterW = document.getElementById('character').offsetWidth;
    var characterH = document.getElementById('character').offsetHeight;
    var rect2 = {x: characterX, y: characterY, width: characterW, height: characterH};

    var pipeX = document.getElementById('pipe').offsetLeft;
    var pipeY = document.getElementById('pipe').offsetTop;
    var pipeW = document.getElementById('pipe').offsetWidth;
    var pipeH = document.getElementById('pipe').offsetHeight;
    var pipe1 = {x: pipeX, y: pipeY, width: pipeW, height: pipeH};
    if (pipe1.x < rect2.x + rect2.width &&
        pipe1.x + pipe1.width > rect2.x &&
        pipe1.y < rect2.y + rect2.height &&
        pipe1.y + pipe1.height > rect2.y) {
        // console.log("it worked");
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
        if (localStorage.getItem("highscore") < totalSeconds) {
            localStorage.setItem("highscore", totalSeconds);
        }
        // collision detected
    } else {
        // console.log("nope didnt work")
    }},10);

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;

setInterval(setTime, 1000);

function setTime()
{
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds%60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
}

function pad(val)
{
    var valString = val + "";
    if(valString.length < 2)
    {
        return "0" + valString;
    }
    else
    {
        return valString;
    }
}

window.onload = getHighscore();

function getHighscore(){
    init();
    document.getElementById("highscore").innerHTML = lshighscore();
}

function lshighscore() {
    return "Highscore: " + localStorage.getItem("highscore") + "s";
}
