//Canvas
const eCanvas = document.querySelector('canvas');
var ctx = eCanvas.getContext('2d');
eCanvas.width = 700;
eCanvas.height = 700;

//Element
const eLetters = document.querySelector('.interaction');


//Countrys (arrays)
var europe = [
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
var asia = [
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
var ociania = [
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
var afrika = [
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
var world = europe.concat(asia, ociania, naca, sa, afrika);
//console.log(world);

/* ************************ */
/*          Letter          */
/* ************************ */
eLetters.addEventListener('click', function(event) {
    if (event.target.tagName == 'BUTTON') {
        console.log(event.target.textContent);

        //Individual letters
        switch (event.target.textContent) {
            case "A":
                
                break;
            case "B":
                
                break;
            case "C":
                
                break;
            case "D":
                
                break;
            case "E":
                
                break;
            case "F":
                
                break;
            case "G":
                
                break;
            case "H":
                
                break;
            case "I":
                
                break;
            case "J":
                
                break;
            case "K":
                
                break;
            case "L":
                
                break;
            case "M":
                
                break;
            case "N":
                
                break;
            case "O":
                
                break;
            case "P":
                
                break;
            case "Q":
                
                break;
            case "R":
                
                break;
            case "S":
                
                break;
            case "T":
                
                break;
            case "U":
                
                break;
            case "V":
                
                break;
            case "W":
                
                break;
            case "X":
                
                break;
            case "Y":
                
                break;
            case "Z":
                
                break;
        }
    }
});


/* var index = Math.floor(Math.random() * stader.length);
console.log(index);
//Ta ut staden
var slumpadStad = stader[index];
console.log(slumpadStad); */