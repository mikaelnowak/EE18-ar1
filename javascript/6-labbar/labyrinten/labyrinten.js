//Element
const elementNamn = document.querySelector('#namn');
const elementVerb = document.querySelector('#verb');
const elementKnapp = document.querySelector('button');
const elementOutput = document.querySelector('#output');

var rum = "entrén";

elementOutput.innerHTML = "Du är i entrén.<br>";

elementKnapp.addEventListener('click', function() {
    var namn = elementNamn.value;
    var verb = elementVerb.value;

    if (rum == "entrén") {
        if (verb == "fram") {
            rum = "kafeterian";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        } else if (verb == "höger") {
            rum = "biblioteket";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        } else if (verb == "vänster") {
            rum = "rum 1";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        }
    } else if (rum == "kafeterian") {
        if (verb == "tillbaka") {
            rum = "entrén";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        } else if (rum == "biblioteket") {
            if (verb == "tillbaka") {
                rum = "entrén";
                elementOutput.innerHTML += "Du är i " + rum + ".<br>";
            }
        }
    } else if (rum == "rum 1") {
        if (verb == "tillbaka") {
            rum = "entrén";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        } else if (verb == "fram") {
            rum = "rum 2";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        }
    } else if (rum == "rum 2") {
        if (verb == "tillbaka") {
            rum = "rum 1";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        } else if (verb == "fram") {
            rum = "rum 3";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        } else if (verb == "höger") {
            rum = "rum 4";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        }
    } else if (rum == "rum 3") {
        if (verb == "tillbaka") {
            rum = "rum 2";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        }
    } else if (rum == "rum 4") {
        if (verb == "tillbaka") {
            rum = "rum 2";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        } else if (verb == "vänster") {
            rum = "rum 5";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        }
    } else if (rum == "rum 5") {
        if (verb == "tillbaka") {
            rum = "rum 4";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        } else if (verb == "fram") {
            elementOutput.textContent += "Grattis! Du nåde utgångren.";
        }
    }
});