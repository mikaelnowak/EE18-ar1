//Element
const elementAntal = document.querySelector("#antal");
const elementFrukt = document.querySelector("#frukt");
const elementSkicka = document.querySelector("#skicka");
const elementRadera = document.querySelector("#radera");
const elementOutput = document.querySelector("#output");
const elementFel = document.querySelector("#fel");

//Skicka funktionen
elementSkicka.addEventListener('click', skicka);

function skicka() {
    var antal = Number(elementAntal.value),
    frukt = elementFrukt.value;

    elementFel.textContent = "";
    //Ingen antal
    if (antal == "") {
        elementFel.innerHTML = "Du har inte valt antal<br>";
    }

    //Ingen frukt
    if (frukt == "") {
        elementFel.innerHTML += "Du har inte valt frukt";
    }

    //Fel frukt
    if (frukt != "äpplen") {
        frukt = "äpplen";
    }

    //Rätt tal som ska skrivas ut
    if (antal <= 1) {
        antal = "ett";
    }
    if (antal >= 2) {
        antal = "två";
    }
    console.log(antal, frukt);
    
    //Om allt är rätt
    if (elementFel.textContent == "") {
        elementOutput.textContent = "Doktorn säger: "
        + antal + " "
        + frukt + " om dagen håller doktorn borta";
    }

    //Rensa
    elementRadera.addEventListener('click', rensa);

    function rensa() {
        elementOutput.textContent = "";
        elementFel.textContent = "";
        elementAntat.textContent = "";
        elementAntal.textContent = "";
    }
}