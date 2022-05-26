/* // L’utente sceglie pari o dispari, e io converto la stringa da lui
inserita in lowercase, per semplificare la successiva verifica. */
let parioDisp = (prompt("Scegli pari o dispari")).toLowerCase();
console.log(parioDisp);

// L'utente inserisce un numero da 1 a 5
let numIns = parseInt(prompt("Inserisci un numero da 1 a 5"));
// Validazione numero inserito dall'utente
if (numIns < 1 || numIns > 5 || isNaN(numIns)) {
    alert("Devi inserire un numero valido");
}





/* 

// L’utente inserisce anche un numero da 1 a 5
let numIns = parseInt(prompt("Inseirsci un numero da 1 a 5"));


// Genero un numero random da 1 a 5
let numRandom = Math.floor(Math.random() * 5);
// Questa è la funzione  che fa la medesima cosa

let somma = numIns + numRandom;

if (somma % 2 == 0) {
    console.log("La somma è pari");
} else {
    console.log("La somma è dispari");
}
 */