/* Kod som körs vid start */
/* Väjla ut elementvi ska jobba med */
const elementBildruta = document.querySelector("#bildruta");

/* Kod som körs efter start, när man klickar på en miniatyr */
function visaBild(nr) {
    elementBildruta.innerHTML = "<img src=\"./bilder/photo"+ nr +".jpg\" alt=\"Foto "+ nr +"\">";
}