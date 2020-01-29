/* Element vi använder */
const elementRutaTal1 = document.querySelector("#tal1");
const elementRutaTal2 = document.querySelector("#tal2");
const elementKnappPlus = document.querySelector("#plus");
const elementKnappMinus = document.querySelector("#minus");
const elementKnappGånger = document.querySelector("#gånger");
const elementKnappDela = document.querySelector("#dela");
const elementRutaResultat = document.querySelector("#resultat");

/* Lyssna på om man klicka på + */
elementKnappPlus.addEventListener('click', addition);
elementKnappMinus.addEventListener('click', subtraktion);
elementKnappGånger.addEventListener('click', multiplikation);
elementKnappDela.addEventListener('click', divition);

function addition() {
    /* Läs av tal1 och tal2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    /* Räkna ut summan */
    var summa = tal1 + tal2;

    /* Skriva ut svaret i resultat */
    elementRutaResultat.value = summa;
}
function subtraktion() {
    /* Läs av tal1 och tal2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    /* Räkna ut summan */
    var summa = tal1 - tal2;

    /* Skriva ut svaret i resultat */
    elementRutaResultat.value = summa;
}
function multiplikation() {
    /* Läs av tal1 och tal2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    /* Räkna ut summan */
    var summa = tal1 * tal2;

    /* Skriva ut svaret i resultat */
    elementRutaResultat.value = summa;
}
function divition() {
    /* Läs av tal1 och tal2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    /* Räkna ut summan */
    var summa = tal1 / tal2;

    /* Skriva ut svaret i resultat */
    elementRutaResultat.value = summa;
}