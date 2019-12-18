/* Kod som körs vid start */
/* Väjla ut elementvi ska jobba med */
const elementBild = document.querySelector("img");
var bildNr = 1;
/* Kod som körs efter start, när man klickar på en miniatyr */
function föreBild() {
    bildNr = bildNr - 1;
    if (bildNr < 1) {
        bildNr = 8;
    }
    elementBild.src = "./bilder/photo" + bildNr + ".jpg";
}
function nästaBild() {
    bildNr = bildNr + 1;
    if (bildNr > 8) {
        bildNr = 1;
    }
    elementBild.src = "./bilder/photo" + bildNr + ".jpg";
}
function play() {
    setInterval(nästaBild, 1000);
}