/* // L’utente sceglie pari o dispari, e io converto la stringa da lui
inserita in lowercase, per semplificare la successiva verifica. */
const parioDisp = (prompt("Scegli pari o dispari")).toLowerCase();

do {
    parioDisp = (prompt("Scegli pari o dispari")).toLowerCase();
} while (parioDisp != "pari" && parioDisp != "dispari")

if (parioDisp != "pari" && parioDisp != "dispari") {
    alert("Devi inserire un valore valido. Pari o Dispari.")
}
console.log(parioDisp);

// L'utente inserisce un numero da 1 a 5
let numIns = parseInt(prompt("Inserisci un numero da 1 a 5"));
// Validazione numero inserito dall'utente
if (numIns < 1 || numIns > 5 || isNaN(numIns)) {
    alert("Devi inserire un numero valido");
}

// Genero un numero random da 1 a 5
let numRandom = Math.floor(Math.random() * 5);
console.log(numRandom);

let somma = numIns + numRandom

// Creo la funzione che verifica se la somma è pari
function sommaPoD () {
    somma % 2;
}

/* Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e 
la somma è pari, ha vinto l’utente, altrimenti il computer. */

if (parioDisp == "pari" && somma % 2 == 0) {
    alert("Hai vinto!")
} else {
    alert("Hai perso!")
}

/* 

// L’utente inserisce anche un numero da 1 a 5
let numIns = parseInt(prompt("Inseirsci un numero da 1 a 5"));


// Genero un numero random da 1 a 5
let numRandom = Math.floor(Math.random() * 5);

let somma = numIns + numRandom;

if (somma % 2 == 0) {
    console.log("La somma è pari");
} else {
    console.log("La somma è dispari");
}
 */