var arena = document.getElementById("svg1");
var whole = document.getElementById("whole");
var stroke = document.getElementById("stroke1");
var startField = document.getElementById("startgame");


function startGame(){
    whole.style.animation = "colorFade 3s";
    startField.style.display = "none";
    var interval1 = setInterval(function (){
        whole.style.backgroundColor = "rgba(24,229,189,0.74)";
        stroke.style.display = "flex";
        clearInterval(interval1);
    },3000)
}

function end(){
    console.log("lost")
    whole.style.backgroundColor = "#2a166b";
    stroke.style.display = "none";
    startField.style.display = "flex";
    whole.style.animation = "";
}