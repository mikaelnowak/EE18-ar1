//Element
const eGubbe = document.querySelector('#gubbe');
const eTable = document.querySelector('table');
const eUp = document.querySelector('#up');
const eLeft = document.querySelector('#left');
const eRight = document.querySelector('#right');
const eDown = document.querySelector('#down');

//Globala variablar
var kordinatX = 0,
kordinatY = -710,
position;

//Placera gubbe på plats "Start"
eGubbe.style.transform = "translate(0, -710px)";

//Lyssna på knapparna
eUp.addEventListener('click', up);
eLeft.addEventListener('click', left);
eRight.addEventListener('click', right);
eDown.addEventListener('click', down);

//Funktion till up
function up() {
    kordinatY -= 100;
    update()
}
//Funktion till down
function down() {
    kordinatY += 100;
    update()
}
//Funktion till left
function left() {
    kordinatX -= 100;
    update()
}
//Funktion till right
function right() {
    kordinatX += 100;
    update()
}

//Uppdatera position på "Gubbe"
function update() {
    //400x400 box
    if (kordinatX == -100) {
        kordinatX = 0;
    } else if (kordinatX == 400) {
        kordinatX = 300;
    } else if (kordinatY == -810) {
        kordinatY = -710;
    } else if (kordinatY == -310) {
        kordinatY = -410;
    }

    //uppdatera "Gubbe"
    eGubbe.style.transform = "translate(" + kordinatX + "px, " + kordinatY + "px)";

    //Om man vinner
    if (kordinatX == 300 && kordinatY == -410) {
        setTimeout(van, 10);
    }
}

//Funktion när man vinner
function van() {
    eGubbe.classList.toggle("blur");
    eTable.classList.toggle("blur");
    
}