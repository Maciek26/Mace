 var bird = document.getElementById("bird");
var button = document.getElementById("button");

var downforce = false

function startGame() {
    downforce = true;
    button.style.display = "none";
    bird.style.top = "194vw";

}

  // down Force1
    setInterval (function () {
        if (downforce === true) {
          var birdY = document.getElementById("bird").offsetTop;
          bird.style.top = parseInt(bird.style.top) + 1.4 + "px";
      }
    },4)

//  down Force2
    setInterval (function () {
        if (downforce === true) {
            var birdY = document.getElementById("bird").offsetTop;
            bird.style.top = parseInt(bird.style.top) - 1 + "px";
        }
    },7)

// up Force 1
setInterval(function () {
    if (downforce === false) {
        bird.style.top = parseInt(bird.style.top) - 1.7 + "px";
    }
},4);

// up Force 2
setInterval(function () {
    if (downforce === false) {
        bird.style.top = parseInt(bird.style.top) + 1 + "px";
    }
},6);

document.onkeydown = keyDetect;

function keyDetect(e) {
    e = e || window.event;
    if (e.keyCode == '32') {
        // spacebar
        downforce = false;
        restart();

    }
}

window.onkeydown = function(e) {
    return !(e.keyCode == 32);
    //stop spacebar scrolling
};

function restart() {
    setTimeout(function () {
        downforce = true;
    }, 225)
}
//End movement bird


