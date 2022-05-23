var bird = document.getElementById("bird");
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
var menu = document.getElementById("menu");

var checkDead1 = setInterval(function () {
    var characterX = document.getElementById('bird').offsetLeft;
    var characterY = document.getElementById('bird').offsetTop;
    var characterW = document.getElementById('bird').offsetWidth;
    var characterH = document.getElementById('bird').offsetHeight;
    var rect2 = {x: characterX, y: characterY, width: characterW, height: characterH};

    var blockX = document.getElementById('pipe1Up').offsetLeft;
    var blockY = document.getElementById('pipe1Up').offsetTop;
    var blockW = document.getElementById('pipe1Up').offsetWidth;
    var blockH = document.getElementById('pipe1Up').offsetHeight;
    var rect1 = {x: blockX, y: blockY, width:blockW, height: blockH};
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
        bird.style.display = "none";
        pipe1Up.style.display = "none";
        pipe1Down.style.display = "none";
        pipe2Up.style.display = "none";
        pipe2Down.style.display = "none";
        pipe3Up.style.display = "none";
        pipe3Down.style.display = "none";
        pipe4Up.style.display = "none";
        pipe4Down.style.display = "none";
        pipe5Up.style.display = "none";
        pipe5Down.style.display = "none";
        menu.style.display = "flex";
    }},10);

var checkDead2 = setInterval(function () {
    var characterX = document.getElementById('bird').offsetLeft;
    var characterY = document.getElementById('bird').offsetTop;
    var characterW = document.getElementById('bird').offsetWidth;
    var characterH = document.getElementById('bird').offsetHeight;
    var rect2 = {x: characterX, y: characterY, width: characterW, height: characterH};

    var blockX = pipe1Down.offsetLeft;
    var blockY = pipe1Down.offsetTop;
    var blockW = pipe1Down.offsetWidth;
    var blockH = pipe1Down.offsetHeight;
    var rect1 = {x: blockX, y: blockY, width:blockW, height: blockH};
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
        bird.style.display = "none";
        pipe1Up.style.display = "none";
        pipe1Down.style.display = "none";
        pipe2Up.style.display = "none";
        pipe2Down.style.display = "none";
        pipe3Up.style.display = "none";
        pipe3Down.style.display = "none";
        pipe4Up.style.display = "none";
        pipe4Down.style.display = "none";
        pipe5Up.style.display = "none";
        pipe5Down.style.display = "none";
        menu.style.display = "flex";
    }},10);

var checkDead3 = setInterval(function () {
    var characterX = document.getElementById('bird').offsetLeft;
    var characterY = document.getElementById('bird').offsetTop;
    var characterW = document.getElementById('bird').offsetWidth;
    var characterH = document.getElementById('bird').offsetHeight;
    var rect2 = {x: characterX, y: characterY, width: characterW, height: characterH};

    var blockX = pipe2Up.offsetLeft;
    var blockY = pipe2Up.offsetTop;
    var blockW = pipe2Up.offsetWidth;
    var blockH = pipe2Up.offsetHeight;
    var rect1 = {x: blockX, y: blockY, width:blockW, height: blockH};
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
        bird.style.display = "none";
        pipe1Up.style.display = "none";
        pipe1Down.style.display = "none";
        pipe2Up.style.display = "none";
        pipe2Down.style.display = "none";
        pipe3Up.style.display = "none";
        pipe3Down.style.display = "none";
        pipe4Up.style.display = "none";
        pipe4Down.style.display = "none";
        pipe5Up.style.display = "none";
        pipe5Down.style.display = "none";
        menu.style.display = "flex";
    }},10);

var checkDead4 = setInterval(function () {
    var characterX = document.getElementById('bird').offsetLeft;
    var characterY = document.getElementById('bird').offsetTop;
    var characterW = document.getElementById('bird').offsetWidth;
    var characterH = document.getElementById('bird').offsetHeight;
    var rect2 = {x: characterX, y: characterY, width: characterW, height: characterH};

    var blockX = pipe2Down.offsetLeft;
    var blockY = pipe2Down.offsetTop;
    var blockW = pipe2Down.offsetWidth;
    var blockH = pipe2Down.offsetHeight;
    var rect1 = {x: blockX, y: blockY, width:blockW, height: blockH};
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
        bird.style.display = "none";
        pipe1Up.style.display = "none";
        pipe1Down.style.display = "none";
        pipe2Up.style.display = "none";
        pipe2Down.style.display = "none";
        pipe3Up.style.display = "none";
        pipe3Down.style.display = "none";
        pipe4Up.style.display = "none";
        pipe4Down.style.display = "none";
        pipe5Up.style.display = "none";
        pipe5Down.style.display = "none";
        menu.style.display = "flex";
    }},10);

var checkDead5 = setInterval(function () {
    var characterX = document.getElementById('bird').offsetLeft;
    var characterY = document.getElementById('bird').offsetTop;
    var characterW = document.getElementById('bird').offsetWidth;
    var characterH = document.getElementById('bird').offsetHeight;
    var rect2 = {x: characterX, y: characterY, width: characterW, height: characterH};

    var blockX = pipe3Up.offsetLeft;
    var blockY = pipe3Up.offsetTop;
    var blockW = pipe3Up.offsetWidth;
    var blockH = pipe3Up.offsetHeight;
    var rect1 = {x: blockX, y: blockY, width:blockW, height: blockH};
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
        bird.style.display = "none";
        pipe1Up.style.display = "none";
        pipe1Down.style.display = "none";
        pipe2Up.style.display = "none";
        pipe2Down.style.display = "none";
        pipe3Up.style.display = "none";
        pipe3Down.style.display = "none";
        pipe4Up.style.display = "none";
        pipe4Down.style.display = "none";
        pipe5Up.style.display = "none";
        pipe5Down.style.display = "none";
        menu.style.display = "flex";
    }},10);

var checkDead6 = setInterval(function () {
    var characterX = document.getElementById('bird').offsetLeft;
    var characterY = document.getElementById('bird').offsetTop;
    var characterW = document.getElementById('bird').offsetWidth;
    var characterH = document.getElementById('bird').offsetHeight;
    var rect2 = {x: characterX, y: characterY, width: characterW, height: characterH};

    var blockX = pipe3Down.offsetLeft;
    var blockY = pipe3Down.offsetTop;
    var blockW = pipe3Down.offsetWidth;
    var blockH = pipe3Down.offsetHeight;
    var rect1 = {x: blockX, y: blockY, width:blockW, height: blockH};
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
        bird.style.display = "none";
        pipe1Up.style.display = "none";
        pipe1Down.style.display = "none";
        pipe2Up.style.display = "none";
        pipe2Down.style.display = "none";
        pipe3Up.style.display = "none";
        pipe3Down.style.display = "none";
        pipe4Up.style.display = "none";
        pipe4Down.style.display = "none";
        pipe5Up.style.display = "none";
        pipe5Down.style.display = "none";
        menu.style.display = "flex";
    }},10);

var checkDead7 = setInterval(function () {
    var characterX = document.getElementById('bird').offsetLeft;
    var characterY = document.getElementById('bird').offsetTop;
    var characterW = document.getElementById('bird').offsetWidth;
    var characterH = document.getElementById('bird').offsetHeight;
    var rect2 = {x: characterX, y: characterY, width: characterW, height: characterH};

    var blockX = pipe4Up.offsetLeft;
    var blockY = pipe4Up.offsetTop;
    var blockW = pipe4Up.offsetWidth;
    var blockH = pipe4Up.offsetHeight;
    var rect1 = {x: blockX, y: blockY, width:blockW, height: blockH};
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
        bird.style.display = "none";
        pipe1Up.style.display = "none";
        pipe1Down.style.display = "none";
        pipe2Up.style.display = "none";
        pipe2Down.style.display = "none";
        pipe3Up.style.display = "none";
        pipe3Down.style.display = "none";
        pipe4Up.style.display = "none";
        pipe4Down.style.display = "none";
        pipe5Up.style.display = "none";
        pipe5Down.style.display = "none";
        menu.style.display = "flex";
    }},10);

var checkDead8 = setInterval(function () {
    var characterX = document.getElementById('bird').offsetLeft;
    var characterY = document.getElementById('bird').offsetTop;
    var characterW = document.getElementById('bird').offsetWidth;
    var characterH = document.getElementById('bird').offsetHeight;
    var rect2 = {x: characterX, y: characterY, width: characterW, height: characterH};

    var blockX = pipe4Down.offsetLeft;
    var blockY = pipe4Down.offsetTop;
    var blockW = pipe4Down.offsetWidth;
    var blockH = pipe4Down.offsetHeight;
    var rect1 = {x: blockX, y: blockY, width:blockW, height: blockH};
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
        bird.style.display = "none";
        pipe1Up.style.display = "none";
        pipe1Down.style.display = "none";
        pipe2Up.style.display = "none";
        pipe2Down.style.display = "none";
        pipe3Up.style.display = "none";
        pipe3Down.style.display = "none";
        pipe4Up.style.display = "none";
        pipe4Down.style.display = "none";
        pipe5Up.style.display = "none";
        pipe5Down.style.display = "none";
        menu.style.display = "flex";
    }},10);

var checkDead9 = setInterval(function () {
    var characterX = document.getElementById('bird').offsetLeft;
    var characterY = document.getElementById('bird').offsetTop;
    var characterW = document.getElementById('bird').offsetWidth;
    var characterH = document.getElementById('bird').offsetHeight;
    var rect2 = {x: characterX, y: characterY, width: characterW, height: characterH};

    var blockX = pipe5Up.offsetLeft;
    var blockY = pipe5Up.offsetTop;
    var blockW = pipe5Up.offsetWidth;
    var blockH = pipe5Up.offsetHeight;
    var rect1 = {x: blockX, y: blockY, width:blockW, height: blockH};
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
        bird.style.display = "none";
        pipe1Up.style.display = "none";
        pipe1Down.style.display = "none";
        pipe2Up.style.display = "none";
        pipe2Down.style.display = "none";
        pipe3Up.style.display = "none";
        pipe3Down.style.display = "none";
        pipe4Up.style.display = "none";
        pipe4Down.style.display = "none";
        pipe5Up.style.display = "none";
        pipe5Down.style.display = "none";
        menu.style.display = "flex";
    }},10);

var checkDead9 = setInterval(function () {
    var characterX = document.getElementById('bird').offsetLeft;
    var characterY = document.getElementById('bird').offsetTop;
    var characterW = document.getElementById('bird').offsetWidth;
    var characterH = document.getElementById('bird').offsetHeight;
    var rect2 = {x: characterX, y: characterY, width: characterW, height: characterH};

    var blockX = pipe5Down.offsetLeft;
    var blockY = pipe5Down.offsetTop;
    var blockW = pipe5Down.offsetWidth;
    var blockH = pipe5Down.offsetHeight;
    var rect1 = {x: blockX, y: blockY, width:blockW, height: blockH};
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
        bird.style.display = "none";
        pipe1Up.style.display = "none";
        pipe1Down.style.display = "none";
        pipe2Up.style.display = "none";
        pipe2Down.style.display = "none";
        pipe3Up.style.display = "none";
        pipe3Down.style.display = "none";
        pipe4Up.style.display = "none";
        pipe4Down.style.display = "none";
        pipe5Up.style.display = "none";
        pipe5Down.style.display = "none";
        menu.style.display = "flex";
    }},10);

function reload() {
    window.location.reload();
}