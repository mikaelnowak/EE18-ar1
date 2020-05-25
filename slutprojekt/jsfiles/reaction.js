//Canvas
const eCanvas = document.querySelector('canvas');
var ctx = eCanvas.getContext('2d');
eCanvas.width = 500;
eCanvas.height = 500;

//Elements


//Variables
var bgc = "#177ed3";

//Click on canvas
eCanvas.addEventListener('click', function() {
    //Variables

    //Random wait time generator
    var waitTime = Math.floor(Math.random() * 3000) + 2000;
    //console.log(waitTime);

    //When the background is a sertent color
    if (bgc == '#177ed3') {
        bgc = '#f00';
        eCanvas.style.background = bgc;
        setTimeout('eCanvas.style.background = "#0f0"', waitTime);
    } if (bgc == '#f00') {
        console.log("hej");
    }
});