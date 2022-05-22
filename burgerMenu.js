document.write(`
    <nav>
<!--    <svg class="svg">-->
<!--<path fill-rule="evenodd" clip-rule="evenodd" d="M189.94 0.364105L190.273 0.581136C212.719 15.2124 251.596 32.7804 295.233 37.9034C338.861 43.0253 387.21 35.7059 428.677 0.61831L429.323 1.3817C387.59 36.6941 338.939 44.0414 295.117 38.8966C251.518 33.7781 212.663 16.2933 190.059 1.63497C163.991 26.4186 90.2163 60.5458 0.724365 1.41717L1.27562 0.582835C90.6528 59.6356 164.13 25.1683 189.654 0.639496L189.94 0.364105Z" fill="black"/>-->
<!--<path fill-rule="evenodd" clip-rule="evenodd" d="M618.216 0L618.549 0.21703C640.994 14.8483 679.872 32.4163 723.509 37.5393C767.136 42.6612 815.486 35.3418 856.953 0.254204L857.599 1.01759C815.866 36.33 767.215 43.6773 723.392 38.5325C679.794 33.414 640.939 15.9292 618.335 1.27086C592.267 26.0545 518.492 60.1817 429 1.05307L429.551 0.21873C518.928 59.2715 592.406 24.8042 617.929 0.275391L618.216 0Z" fill="black"/>-->
<!--<path fill-rule="evenodd" clip-rule="evenodd" d="M1046.22 2L1046.55 2.21703C1068.99 16.8483 1107.87 34.4163 1151.51 39.5393C1195.14 44.6612 1243.49 37.3418 1284.95 2.2542L1285.6 3.01759C1243.87 38.33 1195.21 45.6773 1151.39 40.5325C1107.79 35.414 1068.94 17.9292 1046.33 3.27086C1020.27 28.0545 946.492 62.1817 857 3.05307L857.551 2.21873C946.928 61.2715 1020.41 26.8042 1045.93 2.27539L1046.22 2Z" fill="black"/>-->
<!--</svg>-->
        <div class="navigation">
        <a class="m1" id="m1">m</a><a class="a1" id="a1">a</a><a class="c1" id="c1">c</a><a class="e1" id="e1">e</a>
            
        </div>
        <div class="nav-Links">
            <a href="../MaceHome/index.html">Home</a>
            <div class="dropdown1">
                <a class="dropdownButton">Randomizers</a>
                <div class="dropdown">
                    <a href="../R6%20Randomizer/rainbow6Randomizer.html">R6 Randomizer</a>
                    <a href="../CoinFlip/coinFlip.html">Coin Flip</a>
                    <a href="../LuckyWheel/luckyWheel.html">Lucky Wheel</a>
                </div>
            </div>
            <div class="dropdown1">
                <a class="dropdownButton1">Games</a>
                <div class="dropdown">
                    <a href="../MarioRun/marioRun.html">Mario Run</a>
                    <a href="../FlappyBirds/flappyBirds.html">Flappy Birds</a>
                    <a href="../labyrinth/labyrinth.html">Labyrinth</a>
                </div>
            </div>
            <a href="../Feedback/feedback.html">Feedback</a>
        </div>
        <div class="burgerMenu">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
`);

const navSlide = () => {
    const burgerMenu = document.querySelector('.burgerMenu');
    const nav = document.querySelector('.nav-Links');
    const navLinks = document.querySelectorAll('.nav-Links li');

    burgerMenu.addEventListener('click',() => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((links, index) => {
            if(links.style.animation){
                links.style.animation = ''
            } else {
                links.style.animation = `navLinksFade 0.5s ease forwards ${index / 5 + 0.4}s`;
            }
        });
        //burger x animation
        burgerMenu.classList.toggle('toggle');
    });
}
navSlide();

// window.onload = function () {
    var m = document.getElementById("m1");
    var a = document.getElementById("a1");
    var c = document.getElementById("c1");
    var e = document.getElementById("e1");
    setInterval(function () {
        m.style.animationIterationCount = "1";
        m.style.animation = "Mace 1s";
        var aTimeout = setTimeout(function () {
            a.style.animationIterationCount = "1";
            a.style.animation = "Mace 1s";
            clearTimeout(aTimeout)
            var cTimeout = setTimeout(function () {
                c.style.animationIterationCount = "1";
                c.style.animation = "Mace 1s";
                clearTimeout(cTimeout)
                var eTimeout = setTimeout(function () {
                    e.style.animationIterationCount = "1";
                    e.style.animation = "Mace 1s";
                    clearTimeout(eTimeout)
                    var resTimeout = setTimeout(function () {
                        m.style.animationIterationCount = "";
                        m.style.animation = "";
                        a.style.animationIterationCount = "";
                        a.style.animation = "";
                        c.style.animationIterationCount = "";
                        c.style.animation = "";
                        e.style.animationIterationCount = "";
                        e.style.animation = "";
                        clearTimeout(resTimeout)
                    }, 1200)
                }, 1000)
            }, 1000)
        }, 1000)

    }, 6000)
// }