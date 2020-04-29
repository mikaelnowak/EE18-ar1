//Element
const eCanvas = document.querySelector('canvas');

//Canvas
eCanvas.width = 1920;
eCanvas.height = 979;
var ctx = eCanvas.getContext("2d");

//Caracter
var knight = new Image();
knight.src = "./photos/Knight.png";

//Position
//var knightX = 750, knightY = 400;
var knight = {
    x: 750,
    y: 400
}

//Start
loop();

function loop() {
    ctx.clearRect(0, 0, 1600, 900);
    drawKnight();
    requestAnimationFrame(loop);
}

//Draw Knight
function drawKnight() {
    ctx.drawImage(knight, knightX, knightY);
}

window.addEventListener("keydown", function(e) {
    console.log(e.key);
    switch (e.key) {
        case 'w':
            knightY -= 5;
            break;
        case 's':
            knightY += 5;
            break;
        case 'd':
            knightX += 5;
            break;
        case 'a':
            knightX -= 5;
            break;
    }
}); 