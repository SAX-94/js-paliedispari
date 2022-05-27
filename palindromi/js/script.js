// L'utente inserisce una parola.
const parola = prompt("Inserisci una parola");

// La trasformo in una array composta dalle singole lettere
let parolaDivisa = parola.split("");
console.log(parolaDivisa);

// Inverto l'ordine deglie elementi dell'array
parolaDivisa = parolaDivisa.reverse();
console.log(parolaDivisa);

// Prendo gli elementi dell'array e li unisco a formare uan stringa
let parolaInvertita = parolaDivisa.join("");
console.log(parolaInvertita);

// verifico se la parola inserita è palindroma
if (parola == parolaInvertita) {
    alert("La parola inserita è palindroma");
} else {
    alert("La parola inserita non è palindroma");
}

// Transformo il processo in una funzione

function invertiParola(str){
    let strInversa = str.split("").reverse().join("");
    return strInversa;
}
/* Questa funzione prende una stringa e dà come risultato
una stringa con le lettere in ordine invertito */