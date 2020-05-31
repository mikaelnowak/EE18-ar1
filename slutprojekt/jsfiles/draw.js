//Canvas
const eCanvas = document.querySelector('canvas');
var ctx = eCanvas.getContext('2d');
//Responsive canvas
eCanvas.width = window.innerWidth * 0.8 - (window.outerWidth - window.innerWidth);
eCanvas.height = window.innerHeight * 1.069 - (window.outerHeight - window.innerHeight);

//Elements
const ePen = document.querySelector('#pen');
const eEraser = document.querySelector('#eraser');
const eSlider = document.querySelector('.slider');
const eColor = document.querySelector('#color');
const eOwnColor = document.querySelector('#owncolor');
const eOwnColorShow = document.querySelector('.own');
const eSelect = document.querySelector('#select');
const eReset = document.querySelector('.reset');

//Global variable
var mouseX, mouseY, mouseX2, mouseY2, down = false, fillColor = "000", thickness = 5, fillColorSave = "000";

/* ******************* */
/*        Mouse        */
/* ******************* */
//Mouse X and Y
eCanvas.addEventListener('mousemove', function(e) {
    mouseX2 = mouseX;
    mouseY2 = mouseY;
    mouseX = e.clientX;
    mouseY = e.clientY;
    //mouseX = e.clientX;
    //mouseY = e.clientY;
    //console.log(mouseX, mouseY, mouseX2, mouseY2);

});
//Pressing down
eCanvas.addEventListener('mousedown', function() {
    down = true;
});
//Relice
eCanvas.addEventListener('mouseup', function() {
    down = false;
});

//Draw funcction
function draw() {
    //If mouse button 1 och 2 is pressed down
    if (down == true && thickness >= 20) {
        ctx.beginPath();
        ctx.fillStyle = "#" + fillColor;
        ctx.moveTo(mouseX, mouseY);
        ctx.arc(mouseX, mouseY, thickness, 0*Math.PI, 2*Math.PI);
        ctx.fill();
        //console.log(ctx.fillStyle);
    } else if (down == true && thickness <= 20) {
        ctx.beginPath();
        ctx.strokeStyle = "#" + fillColor;
        ctx.lineWidth = thickness;
        ctx.moveTo(mouseX2, mouseY2);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
    }
}

/* ******************* */
/*       Sidebar       */
/* ******************* */

//Pen
ePen.addEventListener('click', function() {
    fillColor = fillColorSave;
});

//Eraser
eEraser.addEventListener('click', function() {
    fillColor = "fff";
});

//Pen/Eraser thickness
eSlider.addEventListener('mouseup', function() {
    thickness = eSlider.value;
    console.log(thickness);
});

//Ready colors
eColor.addEventListener('click', function(event) {
    if (event.target.className) {
        console.log(event.target.className);
        
        switch (event.target.className) {
            case "circle black":
                fillColor = "000";
                fillColorSave = fillColor;
                break;
            case "circle red":
                fillColor = "f00";
                fillColorSave = fillColor;
                break;
            case "circle green":
                fillColor = "0f0";
                fillColorSave = fillColor;
                break;
            case "circle blue":
                fillColor = "00f";
                fillColorSave = fillColor;
                break;
            case "circle gray":
                fillColor = "888";
                fillColorSave = fillColor;
                break;
            case "circle yellow":
                fillColor = "ff0";
                fillColorSave = fillColor;
                break;
        }
    }
});

//Select your own color
eSelect.addEventListener('click', function() {
    fillColor = eOwnColor.value;
    eOwnColorShow.style.background = "#" + fillColor;
    //Save color for pen
    fillColorSave = fillColor;
    //console.log(fillColor);
});

//Reset canvas
eReset.addEventListener('click', function() {
    ctx.clearRect(0, 0, eCanvas.width, eCanvas.height);
});

function loop() {
    draw();

    requestAnimationFrame(loop);
}

loop();