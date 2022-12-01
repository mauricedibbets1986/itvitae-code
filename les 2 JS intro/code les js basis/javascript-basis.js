/*
VARIABELEN
*/

//optellen aftrekken
var number1 = 12;
var number2 = 13;
console.log(number1 + number2);
console.log(number1 - number2);

//getal + string = een string
var number3 = 12;
var number4 = "3";
console.log(number3 + number4);

//stap 5 zin maken
var naam = "Maurice";
var taal = "javascript";
console.log(naam + " leert bij code-cafe de taal " + taal)


//verschil var let. let leeft in een scope. var niet
{
    var variabele1 = "ik ben een variabele VAR"
    let variabele2 = "ik ben een variabele LET"
}
console.log(variabele1);
//console.log(variabele2); geeft een fout. kan wel als je een nieuwe variabele2 aanmaakt buiten de scope van de 1e

//verschil var let. scope voorbeeld 2
var x = 1;
let y = 1;
for (var x = 0; x < 5; x++) { }
console.log(x); // geeft 5
for (let y = 0; y < 5; y++) { }
console.log(y); // geeft 1

//verschil var let. declareren (uitleggen declareren instantieren)
var i;
i = 1;
var i = 2;
console.log(i);

let w;
w = 1;
//let w = 2; //mag niet opnieuw declareren
console.log(w);

//verschil let en const. let mag je opnieuw een waarde geven. const blijft zelfde
let getalLet = 1;
getalLet = 10;
console.log(getalLet);

const getalConst = 2;
//getalConst = 20; // mag niet opnieuw een waarde assignen
console.log(getalConst);


/*
INPUT OUTPUT
*/

// console log en alert
console.log("informatie in console");
alert("dit is een waarschuwing");

// prompt
var antwoord = prompt("hoeveel is 2 x 5?");
console.log("gegeven antwoord: " + antwoord);
alert("gegeven antwoord: " + antwoord);

// confirm
var confirm = confirm("wil je verder met de les? OK of cancel");
console.log(confirm)

/*
TYPE CONVERSION
*/

//string naar int
var string5 = "5";
var getal5 = Number(string5);
console.log(getal5)

/*
IF STATEMENTS
*/
var antwoord = prompt("hoeveel is 2 x 5?");
console.log("gegeven antwoord: " + antwoord);
alert("gegeven antwoord: " + antwoord)

if(antwoord != 10) {
    alert(antwoord + " is niet juist probeer nog een keer!")
    antwoord = prompt("hoeveel is 2 x 5?");
    if(antwoord != 10) {
        console.log("gegeven antwoord 2e ronde: " + antwoord);
        alert(antwoord + " is ook fout. Helaas dit was je laatste poging")
    } else {
        alert(antwoord + " is goed!")
    }
} else {
    alert(antwoord + " is goed!")
}

/*
LOOP
*/
for (let i = 1; i <= 5; i++) {
    console.log("I love javascript " + 1)
}

let snoepjes = ["Mars", "Snickers", "Bounty"]
let string = "De snoepmachine heeft: \n"
for (let i = 0; i<snoepjes.length; i++) {
    string+=(i+1) + ": " + snoepjes[i] + "\n";
}
alert(string)
keuze = prompt("Welk snoepje wil je? 1 2 of 3")
alert("Je hebt gekozen voor: " + snoepjes[keuze-1])

/*
FUNCTIONS
*/

function function1() {
    alert("simpele functie")
}
function1()
// zie ook button in html

function function2(ruimte,lengte,breedte,hoogte) {
    let m3 = Math.round(lengte*breedte*hoogte);
    alert(ruimte + " heeft een inhoud van " + m3 + " m3")
}
function2("woonkamer",12,6,2.4)

function returnSomething(val1, val2) {
    if (val1 > val2) {
        return val1
    } else if (val2 > val1) {
        return val2;
    } else {
        return "equal"
    }
}

let sum1 = 4*12;
let sum2 = 32+9;

console.log("som 1 vs som2. de hoogste uitkomst: " + returnSomething(sum1,sum2))


/*
MANIPULEREN HTML
*/

function veranderen() {
    document.getElementById("verandermij").innerHTML="GELUKT"
}

function veranderalles() {
    let tekst = prompt("voer iets in");
    let divjes = document.getElementsByClassName("veranderen");
    for (d = 0; d < divjes.length; d++) {
        divjes[d].innerHTML=tekst;
    }
}