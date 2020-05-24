//Canvas
const eCanvas = document.querySelector('canvas');
var ctx = eCanvas.getContext('2d');
eCanvas.width = 500;
eCanvas.height = 500;

//Elements


//Click on canvas
eCanvasBlue.addEventListener('click', function() {
    //Variables

    //Random wait time generator
    var secunds = Math.ceil(Math.random() * 3) + 1;
    var waitTime = Math.random() + 1 * secunds;
    console.log(waitTime);

    var bgc = "#177ed3";
    //When the background is a sertent color
    if (bgc == "#177ed3") {
        bgc = "#f00";
        eCanvas.style.background = bgc;
        //console.log(bgc);
        
    }
});