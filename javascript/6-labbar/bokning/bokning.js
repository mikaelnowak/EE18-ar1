/* Start */
/* Element vi använder */
const elementRum = document.querySelectorAll('input[name="rum"]');
const elementAntalNätter = document.querySelector('select');
const elementTillägg = document.querySelectorAll('input[name="extra"]');
const elementKampanj = document.querySelector("#kampanjkod");
const elementKnapp = document.querySelector('button');
const elementP = document.querySelector('p');

elementKnapp.addEventListener('click', räknaUt);

function räknaUt() {
    /* Väsa av bokningen */
    var kostnad = 0, rumspris = 0;

    /* Val av rum */
/*     console.log(elementRum[0].checked);
    console.log(elementRum[1].checked);
    console.log(elementRum[2].checked); */

    if (elementRum[0].checked == true) {
        rumspris = 500;
    }
    if (elementRum[1].checked == true) {
        rumspris = 1000;
    }
    if (elementRum[2].checked == true) {
        rumspris = 2000;
    }

    /* Hur många nätter har valts? */
    var antalNätter = elementAntalNätter.value;
    kostnad = rumspris * antalNätter;
/*     console.log(kostnad); */
    
    
    /* Vilka tillägg har valts */
    if (elementTillägg[0].checked == true) {
        kostnad += 50;
    }
    if (elementTillägg[1].checked == true) {
        kostnad += 1000000;
    }
    if (elementTillägg[2].checked == true) {
        kostnad += 100;
    }
    if (elementTillägg[3].checked == true) {
        kostnad += 50;
    }
    
    /* har vi en kampanjkod */
    var kampanjkod = elementKampanj.value;
    if (kampanjkod == "sportlov2020") {
        kostnad *= 0.9;
    }
    if (kampanjkod == "sommar2020") {
        kostnad *= 0.85;
    }
    if (kampanjkod == "NTI") {
        kostnad *= 0;
    }
    console.log(kostnad);
    
    /* Visa kostnaden */
    elementP.textContent = "Dina val ger en kostnad på " + kostnad + " kr.";
}

/* Räkna ut kostnaden */