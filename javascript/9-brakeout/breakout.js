//Element
const eCanvas = document.querySelector('canvas');

//Canvas
var ctx = eCanvas.getContext('2d');

/* ************************************ */
/*                Player                */
/* ************************************ */
//Variable/object
var pWidth = 200,
pHeight = 50,
pMarginBottom = 50;

var player = {
    x: eCanvas.width/2 - pWidth/2,
    y: eCanvas.height - pHeight - pMarginBottom,
    width: pWidth,
    height: pHeight,
    dx: 5
}

//Design
function drawPlayer1() {
    ctx.fillStyle = '#F8F8FF';
    ctx.fillRect(player.x, player.y, player.width, player.height);

    ctx.strokeStyle = '#696969';
    ctx.lineWidth = 8;
    ctx.strokeRect(player.x, player.y, player.width, player.height);
}

//Left and right
let left = false;
let right = false;

//Press down (move)
document.addEventListener('keydown', function(e){
    if (event.keyCode == 65) {
        left = true;
    } else if (event.keyCode == 68){
        right = true;
    }
});

//Not pressing (no move)
document.addEventListener('keyup', function(e){
    if (event.keyCode == 65) {
        left = false;
    } else if (event.keyCode == 68){
        right = false;
    }
});

//Collision detection
function moveP1() {
    if (right && player.x + player.width < eCanvas.width) {
        player.x += player.dx;
    } else if (left && player.x > 0) {
        player.x -= player.dx;
    }
}

/* ************************************ */
/*                 Ball                 */
/* ************************************ */
//Variable/object
var ballSize = 30;

var ball = {
    x: eCanvas.width/2,
    y: player.y - ballSize,
    radius: ballSize,
    speed: 10,
    dx: 10,
    dy: -10
}

//Design
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);

    ctx.fillStyle = '#F8F8FF';
    ctx.fill();

    ctx.strokeStyle = "#696969";
    ctx.stroke();

    ctx.closePath();
}

//Movement
function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;
}

//Collision detection
var life = 3;
function ballWallCollision() {
    if (ball.x + ball.radius > eCanvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
}
    if (ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
}
    if (ball.y + ball.radius > eCanvas.height) {
        life--;
        resetBall();
    }
}

function resetBall() {
    ball.x = eCanvas.width/2;
    ball.y = player.y - ballSize;
    ball.dx = (Math.random() * 2 - 1) * 3;
    ball.dy = -10;
}

//Collision with player
function ballPlayerCollision() {
    if (ball.y > player.y && ball.y < player.y + player.height && ball.x > player.x && ball.x < player.x + player.width) {
        var collidePoint = ball.x - (player.x + player.width / 2);
        collidePoint = collidePoint / (player.width / 2);
        var angle = collidePoint * (Math.PI / 3);
        ball.dx = ball.speed * Math.sin(angle);
        ball.dy = -ball.speed * Math.cos(angle);
    }
}

/* ************************************ */
/*                 Loop                 */
/* ************************************ */
function loop() {
    ctx.clearRect(0, 0, eCanvas.width, eCanvas.height);

    drawPlayer1();
    drawBall();

    moveP1();
    moveBall();

    ballPlayerCollision();

    ballWallCollision();

    //resetBall();

    requestAnimationFrame(loop);
}

loop();