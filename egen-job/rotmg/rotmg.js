//Element
const eCanvas = document.querySelector('canvas');

//Canvas
var ctx = eCanvas.getContext("2d");

//Caracter
/* var knight = new Image(); */

//Position
/* var knightX = 750, knightY = 400; */
var knight = {
    x: eCanvas.width/2 - 32,
    y: eCanvas.height/2 - 32,
    width: 64,
    height: 64,
    pic: new Image(),
    dx: 3,
    dy: 3
}

//Find picture
knight.pic.src = "./photos/Knight.png";

//Draw Knight
function drawKnight() {
    ctx.drawImage(knight.pic, knight.x, knight.y);
}

//Move knight
let // \/
right = false,
left = false,
up = false,
down = false;

//Press down (Requst movement)
document.addEventListener('keydown', function(e){
    if (event.keyCode == 68) {
        right = true;
    } else if (event.keyCode == 65) {
        left = true;
    } else if (event.keyCode == 87) {
        up = true;
    } else if (event.keyCode == 83) {
        down = true;
    };
});

//No press (No movement)
document.addEventListener('keyup', function(e){
    if (event.keyCode == 68) {
        right = false;
    }
    if (event.keyCode == 65) {
        left = false;
    }
    if (event.keyCode == 87) {
        up = false;
    }
    if (event.keyCode == 83) {
        down = false;
    };
    
});

//Collision for movement
function moveKnight() {
    if (right && down && knight.x + knight.width < eCanvas.width && knight.y + knight.height < eCanvas.height) {
        knight.x += knight.dx;
        knight.y += knight.dy;
    } else if (down && left && knight.y + knight.height < eCanvas.height && knight.x > 0) {
        knight.y += knight.dy;
        knight.x -= knight.dx;
    } else if (left && up && knight.x > 0 && knight.y > 0) {
        knight.y -= knight.dy;
        knight.x -= knight.dx;
    } else if (up && right && knight.y > 0 && knight.x + knight.width < eCanvas.width) {
        knight.y -= knight.dy;
        knight.x += knight.dx;
    } else if (right && knight.x + knight.width < eCanvas.width) {
        knight.x += knight.dx;
    } else if (left && knight.x > 0) {
        knight.x -= knight.dx;
    } else if (up && knight.y > 0) {
        knight.y -= knight.dy;
    } else if (down && knight.y + knight.height < eCanvas.height) {
        knight.y += knight.dy;
    };
}

//Start
loop();

function loop() {
    ctx.clearRect(0, 0, 1920, 979);
    drawKnight();
    moveKnight();
    requestAnimationFrame(loop);
};