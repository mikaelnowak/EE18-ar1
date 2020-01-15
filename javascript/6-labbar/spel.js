/* 
Jerry Seinfeld föds 1954
Ett år efter hans död utkommer Stieg Larssons första kriminalroman "Män som hatar kvinnor" 2005
Dante påbörjar sin vandring genom helvetet och skrärselden 1300
för första gången lär vi känna "Sickan" i filmen "Varning för Jönssonligan" 1981
Harriet Bosse niger och säger "ja, tack" när Strindberg frågar om hon vill ha ett litet barn tillsammans med honom 1901
Gustaf Fröding åtalas för sin osedliga dikt "En morgonfröm" 1896
Evert Taube skriver låten "Änglamark" som ledmotiv till fimman "Äppelkriget" 1971
Författaren Oscar Wilde döms till fängelse för "onaturelig otukt" 1885
Birgit Nilsson blir kunglig hovsångerska 1954
SVT:s "Antikrundan" har premiär 1988
*/

/* Globala variabler och konstanter */
var frågor = [
    "Jerry Seinfeld föds",
    "Ett år efter hans död utkommer Stieg Larssons första kriminalroman \"Män som hatar kvinnor\"",
    "Dante påbörjar sin vandring genom helvetet och skrärselden",
    "för första gången lär vi känna \"Sickan\" i filmen \"Varning för Jönssonligan\"",
    "Harriet Bosse niger och säger \"ja, tack\" när Strindberg frågar om hon vill ha ett litet barn tillsammans med honom",
    "Gustaf Fröding åtalas för sin osedliga dikt \"En morgonfröm\"",
    "Evert Taube skriver låten \"Änglamark\" som ledmotiv till fimman \"Äppelkriget\"",
    "Författaren Oscar Wilde döms till fängelse för \"onaturelig otukt\"",
    "Birgit Nilsson blir kunglig hovsångerska",
    "SVT:s \"Antikrundan\" har premiär"
];
var årtal = [
    1954, 2005, 1300, 1981, 1901, 1896, 1971, 1885, 1954, 1988
];
var slumptal,
    poäng = 0,
    varv = 10;

const elementBody = document.querySelector("body");
const elementFrågaRuta = document.querySelector("textarea");
const elementÅrtal = document.querySelector("input");
const elementKnappSkicka = document.querySelector("#skicka");
const elementKnappNästa = document.querySelector("#nästa");
const elementPoäng = document.querySelector("#poäng")
const elementUpp = document.querySelector("#upp");
const elementNer = document.querySelector("#ner");

/* Skapa en funktion för att slumpa fram en fråga */
function nyFråga() {
    /* Slumptal 0-9 */
    slumptal = Math.floor(Math.random() * 10);
    console.log(frågor[slumptal]);
    console.log(årtal[slumptal]);
    
    elementFrågaRuta.value = frågor[slumptal];

    /* Dölj tumarna */
    elementUpp.style.display = "none";
    elementNer.style.display = "none";

    /* Ta bort gamla svar */
    elementÅrtal.value = "";
}

/* Körs för första gångern */


/* Kör funktionen */
nyFråga();

/* Plocka fram en ny fråga när man klickar på knappen Nästa */
elementKnappNästa.addEventListener("click", nyFråga);

/* Kolla om svarat rätt årtal */
elementKnappSkicka.addEventListener("click", kollaSvaret);

/* Skapa en funktion för att kolla om svaret är rätt */
function kollaSvaret() {
    /* Läs av svar */
    var svaret = elementÅrtal.value;

    /* De rätta svaret */
    var årtalet = årtal[slumptal];    

    /* Kolla om svaret är rätt */
    if (svaret == årtalet) {
        elementUpp.style.display = "block";
        elementNer.style.display = "none";
        poäng++;
    } else {
        elementNer.style.display = "block";
        elementUpp.style.display = "none";
    }
    
    /* Skriv ut poängen */
    elementPoäng.value = poäng;
    
    varv--;
    console.log(varv);
    if (varv == 0) {
        if (poäng == 10) {
            elementBody.innerHTML = "Du är lucky";
        } else {
            elementBody.innerHTML = "Du är en noob. Sug dig själv till du dör, och ge mig all credit medans";
        }  
    }
}