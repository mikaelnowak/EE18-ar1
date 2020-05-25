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
var selected, country = "", guessCountry;

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
    //console.log(eContinent.value);
    switch (eContinent.value) {
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

    //Random country selection
    country = selected[Math.floor(Math.random() * selected.length)];
    //console.log(selected);

    //Reset guessCountry
    guessCountry = "";

    //Generate all "_ "
    for (var i = 0; i < country.length; i++) {
        guessCountry += "_";
    }
    //console.log(country, guessCountry);
    eOutput.value = guessCountry;
});

/* ********************** */
/*         Letters        */
/* ********************** */
//Know wich button pressed
eLetters.addEventListener('click', function(event) {
    var guess, incorrect = true, newGuessCountry = "";

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
        if (guess == letter) {
            newGuessCountry += country[i];
        } else {
            newGuessCountry += "_";
        }
    }
    console.log(newGuessCountry);
    

    for (var a = 0; a < country.length; a++) {
        if (guessCountry[a] == "_") {
            guessCountry[a] = newGuessCountry[a];
        } else {
            incorrect = false;
        }
    }
    eOutput.value = guessCountry;
    console.log(guessCountry);
    
});