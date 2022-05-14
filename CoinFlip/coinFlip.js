var resultM = document.getElementById("resultM");
var resultS = document.getElementById("resultStar");
var flipGif = document.getElementById("flipGif");
var delay = 2800;

function randomize() {
    var randomizedFlip = getRndInteger();
    resultS.style.display = "none";
    resultM.style.display = "none";
    flipGif.style.display = "none";
    resultS.style.display = "flex";
    resultS.style.animation = "flip 2.8s ease-in"
    if (randomizedFlip == "1") {
       var TO1 = setTimeout(function (){
            resultS.style.display = "none";
            resultS.style.display = "flex";
            clearTimeout(TO1);
        }, delay);
    }
     else if (randomizedFlip == "2") {
       var TO2 = setTimeout(function (){
             resultS.style.display = "none";
             resultM.style.display = "flex";
             // resultM.style.animation = "flip 1.8s"
           clearTimeout(TO2);
        }, delay);
     }
}

function getRndInteger(min, max) {
    return Math.floor((Math.random() * 2 ) + 1);
}

