//Canvas
const eCanvas = document.querySelector('canvas');
var ctx = eCanvas.getContext('2d');
eCanvas.width = 400;
eCanvas.height = 300;

//Element
const eBokstav = document.querySelector('#bokstav');
const eKnapp = document.querySelector('button');
const eResultat = document.querySelector('#resultat');

//Slumpa fram en stad
var stader = [
    "Abu Dhabi",
    "Abuja",
    "Accra",
    "Addis Abeba",
    "Alger",
    "Amman",
    "Amsterdam",
    "Andorra la Vella",
    "Ankara",
    "Antananarivo",
    "Apia",
    "Asjchabad",
    "Asmara",
    "Astana",
    "Asuncion",
    "Aten",
    "Bagdad",
    "Baku",
    "Bamako",
    "Bandar Seri Begawan",
    "Bangkok",
    "Bangui",
    "Banjul",
    "Basseterre",
    "Beirut",
    "Belgrad",
    "Belmopan",
    "Berlin",
    "Bern",
    "Bisjkek",
    "Bissau",
    "Bogota",
    "Brasilia",
    "Bratislava",
    "Brazzaville",
    "Bridgetown",
    "Bryssel",
    "Budapest",
    "Buenos Aires",
    "Bukarest",
    "Canberra",
    "Caracas",
    "Castries",
    "Chisinau",
    "Colombo",
    "Conakry",
    "Dakar",
    "Damaskus",
    "Dhaka",
    "Dili",
    "Djibouti",
    "Dodoma",
    "Doha",
    "Dublin",
    "Dusjanbe",
    "Funafuti",
    "Freetown",
    "Gaborone",
    "Georgetown",
    "Gitega",
    "Guatemala City",
    "Hanoi",
    "Harare",
    "Havanna",
    "Helsingfors",
    "Honiara",
    "Islamabad",
    "Jakarta",
    "Jerevan",
    "Jerusalem",
    "Juba",
    "Kabul",
    "Kairo",
    "Kampala",
    "Katmandu",
    "Khartoum",
    "Kiev",
    "Kigali",
    "Kingston",
    "Kingstown",
    "Kinshasa",
    "Kuala Lumpur",
    "Kuwait",
    "Köpenhamn",
    "Libreville",
    "Lilongwe",
    "Lima",
    "Lissabon",
    "Ljubljana",
    "Lome",
    "London",
    "Luanda",
    "Lusaka",
    "Luxemburg",
    "Madrid",
    "Majuro",
    "Malabo",
    "Male",
    "Managua",
    "Manama",
    "Manila",
    "Maputo",
    "Maseru",
    "Mbabane",
    "Mexico City",
    "Minsk",
    "Mogadishu",
    "Monaco",
    "Monrovia",
    "Montevideo",
    "Moroni",
    "Moskva",
    "Muskat",
    "N'Djamena",
    "Nairobi",
    "Nassau",
    "Naypyidaw",
    "New Delhi",
    "Ngerulmud",
    "Niamey",
    "Nicosia",
    "Nouakchott",
    "Nukualofa",
    "Nuuk",
    "Oslo",
    "Ottawa",
    "Ouagadougou",
    "Palikir",
    "Panama City",
    "Paramaribo",
    "Paris",
    "Peking",
    "Phnom Penh",
    "Podgorica",
    "Port Louis",
    "Port Moresby",
    "Port of Spain",
    "Port-au-Prince",
    "Porto-Novo",
    "Port Vila",
    "Prag",
    "Praia",
    "Pretoria",
    "Pristina",
    "Pyongyang",
    "Quito",
    "Rabat",
    "Reykjavik",
    "Riga",
    "Riyadh",
    "Rom",
    "Roseau",
    "Saint George's",
    "Saint Johns",
    "San Jose",
    "San Marino",
    "San Salvador",
    "Sanaa",
    "Santiago de Chile",
    "Santo Domingo",
    "São Tome",
    "Sarajevo",
    "Seoul",
    "Singapore",
    "Skopje",
    "Sofia",
    "Stockholm",
    "Sucre",
    "Suva",
    "Taipei",
    "Tallinn",
    "Tarawa",
    "Tasjkent",
    "Tbilisi",
    "Tegucigalpa",
    "Teheran",
    "Thimphu",
    "Tirana",
    "Tokyo",
    "Torshamn",
    "Tripoli",
    "Tunis",
    "Ulan Bator",
    "Vaduz",
    "Valletta",
    "Vatikanstaden",
    "Victoria",
    "Vientiane",
    "Vilnius",
    "Warszawa",
    "Washington DC",
    "Wellington",
    "Wien",
    "Windhoek",
    "Yamoussoukro",
    "Yaounde",
    "Zagreb"
];
//Slump kod
var index = Math.floor(Math.random() * stader.length);
console.log(index);
//Ta ut staden
var slumpadStad = stader[index];
console.log(slumpadStad);

//Lagra fel
var fel = 0;

var resultat = "";

for (var i = 0; i < slumpadStad.length; i++) {
    resultat += "_ ";
}

//Läs av gissning
eKnapp.addEventListener('click', function() {
    var gissning = eBokstav.value;
    console.log(gissning);

    var rättGissat = false;

    //Kolla om input är en bokstav
    for (var i = 0; i < slumpadStad.length; i++) {
        console.log(i, slumpadStad[i]);

        var slumpadBokstav = slumpadStad[i].toLowerCase();

        //Om rätt
        if (gissning == slumpadBokstav) {
            //console.log("Bokstav hittar", gissning);
            resultat += gissning + " ";
            rättGissat = true;
        }
    }

    console.log("Rätt gissat =", rättGissat);

    if (rättGissat == false) {
        fel++;
        console.log("Antal fel =", fel);
    }

    eResultat.value = resultat;

    //Rita gubben
    if (fel == 1) {
        ctx.arc(200, 600, 400, 0, 2 * Math.PI);
        ctx.stroke();
    } else if (fel == 2) {
        ctx.moveTo(200, 200);
        ctx.lineWidth = 1;
        ctx.lineTo(200, 100);
        ctx.stroke();
    } else if (fel == 3) {
        ctx.lineTo(250, 100);
        ctx.stroke();
    } else if (fel == 4) {
        ctx.moveTo(250, 100);
        ctx.lineTo(250, 150);
        ctx.stroke();
    } else if (fel == 5) {
        ctx.moveTo(275, 175);
        ctx.arc(250, 175, 25, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.font = "bold 50px sans-serif";
        ctx.fillText("Game over!", 50, 100);
    }
});