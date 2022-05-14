var pipe1Up = document.getElementById("pipe1Up");
var pipe1Down = document.getElementById("pipe1Down");
var pipe2Up = document.getElementById("pipe2Up");
var pipe2Down = document.getElementById("pipe2Down");
var pipe3Up = document.getElementById("pipe3Up");
var pipe3Down = document.getElementById("pipe3Down");
var pipe4Up = document.getElementById("pipe4Up");
var pipe4Down = document.getElementById("pipe4Down");
var pipe5Up = document.getElementById("pipe5Up");
var pipe5Down = document.getElementById("pipe5Down");

function startGame2(){
    pipe1Up.style.animation = "pipe 7s infinite linear";
    pipe1Down.style.animation = "pipe 7s infinite linear";
    pipe1Down.style.display = "flex";
    pipe1Up.style.display = "flex";
    pipe2Up.style.animation = "pipe 7s infinite linear";
    pipe2Down.style.animation = "pipe 7s infinite linear";
    pipe2Down.style.display = "flex";
    pipe2Up.style.display = "flex";
    pipe2Up.style.animationDelay = "1.5s"
    pipe2Down.style.animationDelay = "1.5s"
    pipe3Up.style.animation = "pipe 7s infinite linear";
    pipe3Down.style.animation = "pipe 7s infinite linear";
    pipe3Down.style.display = "flex";
    pipe3Up.style.display = "flex";
    pipe3Up.style.animationDelay = "3s"
    pipe3Down.style.animationDelay = "3s"
    pipe4Up.style.animation = "pipe 7s infinite linear";
    pipe4Down.style.animation = "pipe 7s infinite linear";
    pipe4Down.style.display = "flex";
    pipe4Up.style.display = "flex";
    pipe4Up.style.animationDelay = "4.5s"
    pipe4Down.style.animationDelay = "4.5s"
    pipe5Up.style.animation = "pipe 7s infinite linear";
    pipe5Down.style.animation = "pipe 7s infinite linear";
    pipe5Down.style.display = "flex";
    pipe5Up.style.display = "flex";
    pipe5Up.style.animationDelay = "6s"
    pipe5Down.style.animationDelay = "6s"
    rndHeight1();
    setTimeout( function () {
        rndHeight2();
    }
,1500);
setTimeout( function () {
        rndHeight3();
    }
,3000);
setTimeout( function () {
         rndHeight4();
    }
,4500);
setTimeout( function () {
         rndHeight5();
    }
,6000);
}

var Num1 = 9
var Num2 = 7.5
var Num3 = 7.5
var Num4 = 6.5
function rndHeight1() {
    setInterval(function () {
        var rndNumber1 = Math.floor(Math.random() * Num1) + Num2;
        var rndNumber2 = Math.floor(Math.random() * Num3) + Num4;
        pipe1Up.style.height = rndNumber1 + "vw";
        pipe1Down.style.marginTop = rndNumber1 + rndNumber2 + "vw";
        pipe1Down.style.height = 40 - rndNumber2 - rndNumber1 + "vw";
        pipe1Up.style.opacity = "1";
        pipe1Down.style.opacity = "1";
    }, 7000)
}

function rndHeight2() {
    setInterval(function () {
        var rndNumber1 = Math.floor(Math.random() * Num1) + Num2;
        var rndNumber2 = Math.floor(Math.random() * Num3) + Num4;
        pipe2Up.style.height = rndNumber1 + "vw";
        pipe2Down.style.marginTop = rndNumber1 + rndNumber2 + "vw";
        pipe2Down.style.height = 40 - rndNumber2 - rndNumber1 + "vw";
        pipe2Up.style.opacity = "1";
        pipe2Down.style.opacity = "1";
    }, 7000)
}

function rndHeight3() {
    setInterval(function () {
        var rndNumber1 = Math.floor(Math.random() * Num1) + Num2;
        var rndNumber2 = Math.floor(Math.random() * Num3) + Num4;
        pipe3Up.style.height = rndNumber1 + "vw";
        pipe3Down.style.marginTop = rndNumber1 + rndNumber2 + "vw";
        pipe3Down.style.height = 40 - rndNumber2 - rndNumber1 + "vw";
        pipe3Up.style.opacity = "1";
        pipe3Down.style.opacity = "1";
    }, 7000)
}

function rndHeight4() {
    setInterval(function () {
        var rndNumber1 = Math.floor(Math.random() * Num1) + Num2;
        var rndNumber2 = Math.floor(Math.random() * Num3) + Num4;
        pipe4Up.style.height = rndNumber1 + "vw";
        pipe4Down.style.marginTop = rndNumber1 + rndNumber2 + "vw";
        pipe4Down.style.height = 40 - rndNumber2 - rndNumber1 + "vw";
        pipe4Up.style.opacity = "1";
        pipe4Down.style.opacity = "1";
    }, 7000)
}

function rndHeight5() {
    setInterval(function () {
        var rndNumber1 = Math.floor(Math.random() * Num1) + Num2;
        var rndNumber2 = Math.floor(Math.random() * Num3) + Num4;
        pipe5Up.style.height = rndNumber1 + "vw";
        pipe5Down.style.marginTop = rndNumber1 + rndNumber2 + "vw";
        pipe5Down.style.height = 40 - rndNumber2 - rndNumber1 + "vw";
        pipe5Up.style.opacity = "1";
        pipe5Down.style.opacity = "1";
    }, 7000)
}