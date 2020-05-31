//Canvas
const eCanvas = document.querySelector('canvas');
var ctx = eCanvas.getContext('2d');
eCanvas.width = 700;
eCanvas.height = 700;

//Element
const eOutput = document.querySelector('input');
const eContinent = document.querySelector('select');
const eButton = document.querySelector('button');
const eLetters = document.querySelector('.letters');

//Global varibles
var country = "", guessCountry, wrongGuesses, correctAnswers = 0;

//.replaceAt function (from the internet)
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

//Draw hill
function hill() {
    ctx.beginPath();
    ctx.fillStyle = "#080";
    ctx.strokeStyle = "#080";
    ctx.lineWidth = "3";
    ctx.arc(350, 1500, 950, Math.PI * 1.25, Math.PI * 1.75);
    ctx.stroke();
    ctx.fill();
}

hill()

/* ********************** */
/* Continent and countrys */
/* ********************** */
//Countrys (arrays)
var eu = [
    "Albanien",
    "Austria",
    "Belgium",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Ireland",
    "Italy",
    "Latvia",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Netherlands",
    "Poland",
    "Portugal",
    "Romania",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden"
];
var as = [
    "Afghanistan",
    "Armenia",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Bhutan",
    "Brunei",
    "Cambodia",
    "China",
    "Cyprus",
    "Georgia",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Israel",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Lebanon",
    "Malaysia",
    "Maldives",
    "Mongolia",
    "Myanmar",
    "Nepal",
    "North Korea",
    "Oman",
    "Pakistan",
    "Palestine",
    "Philippines",
    "Qatar",
    "Russia",
    "Saudi Arabia",
    "Singapore",
    "South Korea",
    "Sri Lanka",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Turkey",
    "Turkmenistan",
    "United Arab Emirates",
    "Uzbekistan",
    "Vietnam",
    "Yemen"
];
var oc = [
    "Australia",
    "Fiji",
    "Kiribati",
    "Marshall Islands",
    "Micronesia",
    "Nauru",
    "New Zealand",
    "Palau",
    "Papua New Guinea",
    "Samoa",
    "Solomon Islands",
    "Tonga",
    "Tuvalu",
    "Vanuatu"
];
var naca = [
    "Antigua and Barbuda",
    "Bahamas",
    "Barbados",
    "Belize",
    "Canada",
    "Costa Rica",
    "Cuba",
    "Dominica",
    "Dominican Republic",
    "El Salvador",
    "Grenada",
    "Guatemala",
    "Haiti",
    "Honduras",
    "Jamaica",
    "Mexico",
    "Nicaragua",
    "Panama",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Trinidad and Tobago",
    "United States of America"
];
var sa = [
    "Argentina",
    "Bolivia",
    "Brazil",
    "Chile",
    "Colombia",
    "Ecuador",
    "Guyana",
    "Paraguay",
    "Peru",
    "Suriname",
    "Uruguay",
    "Venezuela"
];
var af = [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cameroon",
    "Central African Republic",
    "Chad",
    "Comoros",
    "Democratic Republic of Congo",
    "Republic of Congo",
    "Cote d'Ivoire",
    "Djibouti",
    "Egypt",
    "Equatorial Guinea",
    "Eritrea",
    "Eswatini",
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Rwanda",
    "Sao Tome and Principe",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Sudan",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Uganda",
    "Zambia",
    "Zimbabwe"
];
var world = eu.concat(as, oc, naca, sa, af);
//console.log(world);

//Selected continent
eButton.addEventListener('click', function() {
    var selected;
    //console.log(eContinent.value);
    switch (eContinent.value) {
        case "no-select":
            eOutput.value = "Select a continent";
            break;
        case "eu":
            selected = eu;
            break;
        case "as":
            selected = as;
            break;
        case "af":
            selected = af;
            break;
        case "oc":
            selected = oc;
            break;
        case "naca":
            selected = naca;
            break;
        case "sa":
            selected = sa;
            break;
        case "world":
            selected = world;
            break;
    }
    //console.log(selected);

    //Reset the game
    guessCountry = "", wrongGuesses = 0, correctAnswers = 0;
    eOutput.style = "background: #fff; font-weight: normal;"
    ctx.clearRect(0, 0, 700, 700);
    hill();

    //Random country selection
    country = selected[Math.floor(Math.random() * selected.length)];
    //console.log(selected);

    //Generate all "_ "
    for (var i = 0; i < country.length; i++) {
        if (country[i] == " ") {
            guessCountry += " ";
        } else {
            guessCountry += "_";
        }
    }
    //console.log(country, guessCountry);
    eOutput.value = guessCountry;
});

/* ********************** */
/*         Letters        */
/* ********************** */
//Know wich button pressed
eLetters.addEventListener('click', function(event) {
    var guess, correct = false;

    //All keys
    switch (event.target.textContent) {
        case "A":
            guess = "A";
            break;
        case "B":
            guess = "B";
            break;
        case "C":
            guess = "C";
            break;
        case "D":
            guess = "D";
            break;
        case "E":
            guess = "E";
            break;
        case "F":
            guess = "F";
            break;
        case "G":
            guess = "G";
            break;
        case "H":
            guess = "H";
            break;
        case "I":
            guess = "I";
            break;
        case "J":
            guess = "J";
            break;
        case "K":
            guess = "K";
            break;
        case "L":
            guess = "L";
            break;
        case "M":
            guess = "M";
            break;
        case "N":
            guess = "N";
            break;
        case "O":
            guess = "O";
            break;
        case "P":
            guess = "P";
            break;
        case "Q":
            guess = "Q";
            break;
        case "R":
            guess = "R";
            break;
        case "S":
            guess = "S";
            break;
        case "T":
            guess = "T";
            break;
        case "U":
            guess = "U";
            break;
        case "V":
            guess = "V";
            break;
        case "W":
            guess = "W";
            break;
        case "X":
            guess = "X";
            break;
        case "Y":
            guess = "Y";
            break;
        case "Z":
            guess = "Z";
            break;
    }
    //console.log(country);

    //Compair guessed letter
    for (var i = 0; i < country.length; i++) {
        console.log(i, country[i]);
        var letter = country[i].toUpperCase();

        //Controll if guess is a letter in the country
        if (guess == letter && guessCountry[i] == "_") {
            guessCountry = guessCountry.replaceAt(i, country[i]);
            correct = true;
            correctAnswers++;
        }
    }

    //Show the progress
    eOutput.value = guessCountry;

    //Increment wrong guesses
    if (correct == false) {
        wrongGuesses++;
        console.log(wrongGuesses);
    }

    //Draw when guessing wrong
    switch (wrongGuesses) {
        case 1:
            ctx.beginPath()
            ctx.strokeStyle = "#000";
            ctx.lineWidth = "20";
            ctx.moveTo(300, 550);
            ctx.lineTo(300, 200);
            ctx.stroke();
            break;
        case 2:
            ctx.moveTo(290, 200);
            ctx.lineTo(450, 200);
            ctx.stroke();
            break;
        case 3:
            ctx.lineWidth = "2";
            ctx.moveTo(425, 200);
            ctx.lineTo(425, 250);
            ctx.stroke();
            break;
        case 4:
            ctx.beginPath();
            ctx.strokeStyle = "#FEDBB7";
            ctx.fillStyle = "#FEDBB7";
            ctx.lineWidth = "4";
            ctx.moveTo(450, 275);
            ctx.arc(425, 275, 25, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            break;
        case 5:
            ctx.moveTo(425, 300);
            ctx.lineTo(425, 400);
            ctx.stroke();
            break;
        case 6:
            ctx.lineTo(410, 475);
            ctx.stroke();
            break;
        case 7:
            ctx.moveTo(425, 400);
            ctx.lineTo(440, 475);
            ctx.stroke();
            break;
        case 8:
            ctx.moveTo(425, 330);
            ctx.lineTo(410, 400);
            ctx.stroke();
            break;
        case 9:
            ctx.moveTo(425, 330);
            ctx.lineTo(440, 400);
            ctx.stroke();
            ctx.closePath();

            //Revile answer and notify that player lost
            eOutput.style = "background: #f00; font-weight: bold;";
            eOutput.value = country;
            break;
    }

    //When you guess the country right before 9 wrong guesses
    if (correctAnswers == country.length && wrongGuesses < 9) {
        //console.log("hej");
        eOutput.style = "background: #0f0; font-weight: bold;";
    }
});