//Canvas
const eCanvas = document.querySelector('canvas');
var ctx = eCanvas.getContext('2d');
eCanvas.width = 1000;
eCanvas.height = 700;

//Elements
const eLife = document.querySelector('#life');
const eScore = document.querySelector('#score');
const eLeftKey = document.querySelector('#leftkey');
const eRightKey = document.querySelector('#rightkey');
const eShotKey = document.querySelector('#shotkey');
const eRebind = document.querySelector('#rebind');
const eDefault = document.querySelector('#default');


/* ******************** */
/*      Variables       */
/* ******************** */
var pWidth = 50, pHeight = 50, pMarginBottom = 20, right = false, left = false, keyCodeLeft = "65", keyCodeRight = "68", keyCodeShot = "32";

var player = {
    x: eCanvas.width/2 - pWidth/2,
    y: eCanvas.height - pHeight - pMarginBottom,
    width: pWidth,
    height: pHeight,
    dx: 5,
    pic: new Image()
}
var laser = {
    x: player.x,
    y: player.y,
    dy: 10,
    pic: new Image()
}
var alien = {
    x: 0,
    y: 20,
    width: pWidth,
    height: pHeight,
    dx: 2,
    pic: new Image()
}

/* ******************** */
/*        Player        */
/* ******************** */
//Pictures
player.pic.src = "../pictures/player-50px.png";
laser.pic.src = "../pictures/laser-50px.png";

//Design
function drawPlayer() {
    ctx.drawImage(player.pic, player.x, player.y);
}
function drawLaser() {
    ctx.drawImage(laser.pic, laser.x, laser.y);
    laser.y -= laser.dy;
    requestAnimationFrame(drawLaser);
}

//Movment (move) and Shot 
document.addEventListener('keydown', function(e) {
    if (event.keyCode == keyCodeLeft) {
        left = true;
    } else if (event.keyCode == keyCodeRight) {
        right = true;
    } else if (event.keyCode == keyCodeShot) {
        drawLaser();
    }
});

//Movment (no move)
document.addEventListener('keyup', function(e) {
    if (event.keyCode == keyCodeLeft) {
        left = false;
    } else if (event.keyCode == keyCodeRight) {
        right = false;
    }
});

//Collision detection
function movePlayer() {
    if (right && player.x + player.width < eCanvas.width) {
        player.x += player.dx;
    } else if (left && player.x > 0) {
        player.x -= player.dx;
    };
}


/* ******************** */
/*        Alien         */
/* ******************** */
//Picture
alien.pic.src = "../pictures/alien-50px.png";

//Spawn in all aliens
function spawnAlien() {
    for (var i = 50; i < 550; i += 100) {
        ctx.drawImage(alien.pic, alien.x + i, alien.y);
    }
}
//Move aliens
function moveAlien() {
    alien.x += alien.dx;
}

//Collision with wall
function alienCollision() {
    if (alien.x + alien.width > eCanvas.width || alien.x < 0) {
        alien.dx = -alien.dx;
    }
}

/* ******************** */
/*    Life and score    */
/* ******************** */


/* ******************** */
/*      Rebinding       */
/* ******************** */
//Change key
eRebind.addEventListener('click', function() {
    //Keybinding for LEFT
    if (eLeftKey.value != "") {
        var bindLeft = eLeftKey.value.toUpperCase();
        //Convert to keycode
        keyCodeLeft = bindLeft.codePointAt(0);
        //New placeholder
        eLeftKey.placeholder = bindLeft;
        eLeftKey.value = "";
    }
    if (eRightKey.value != "") {
        var bindRight = eRightKey.value.toUpperCase();
        //Convert to keycode
        keyCodeRight = bindRight.codePointAt(0);
        //New placeholder
        eRightKey.placeholder = bindRight;
        eRightKey.value = "";
    }
    if (eShotKey.value != "") {
        var bindShot = eShotKey.value.toUpperCase();
        //Convert to keycode
        keyCodeShot = bindShot.codePointAt(0);
        //New placeholder
        eShotKey.placeholder = bindShot;
        eShotKey.value = "";
    }
});


//Loop
function loop() {
    ctx.clearRect(0, 0, eCanvas.width, eCanvas.height);

    drawPlayer();
    movePlayer();
    spawnAlien();
    moveAlien();
    alienCollision()

    requestAnimationFrame(loop);
}

loop();