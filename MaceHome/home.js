var stroke = document.getElementById("rect1");

setInterval(function (){
    stroke.style.display = "flex"
    stroke.style.animation = "blink 5s"
      var Interval = setInterval(function (){
            stroke.style.animation = "blink2 5s";
            var Interval2 = setInterval(function (){
                stroke.style.display = "none";
                clearInterval(Interval2);
            }, 5000)
          clearInterval(Interval);
        },7000)
}, 1000)