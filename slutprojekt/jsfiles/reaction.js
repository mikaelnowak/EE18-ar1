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
    if (bgc = "#177ed3") {
        bgc = "#f00";
        eCanvas.style.background = bgc
    } else if (bgc == "#f00") {
        bgc = "#177ed3";
    }
    console.log(bgc);
    
});
