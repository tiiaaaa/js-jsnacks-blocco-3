/**
 *
 *
    Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
    Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 200.
 *
 */

//! Creo variabile con Array vuoto
const emptyArray = [];

//! Inizializzo una variabile per sommare che è uguale a 0
let sum = 0
//! Finche sum è inferiore a 200
while (sum < 200){
    let userNumber = parseInt(prompt("Inserisci un numero"));//! Chiedo all'utente di inserire un numero e lo salvo in una varibile
    
    emptyArray.push(userNumber); //! Aggiungo il numero all'interno del mio array
    console.log(emptyArray);

    sum += userNumber; //! Sum che era = 0 somma a se stessa i numeri inseriti dall'utente finchè è minore di 200, poi uscirà dal ciclo
}

//!Stampo il valore di sum finale
console.log(sum);