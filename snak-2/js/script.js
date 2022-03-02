/**
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera N array, ognuno formato da 10 numeri casuali tra 4 e 4532.
    Ogni volta che ne crei uno, stampalo a schermo.
 */

//TODO Inizializzo cosante con valore del numero inserito dal utente
let number = parseInt(prompt("Inserisci un numero"));
//TODO Finche NUMBER non è un numero continuo a chiedere all'utente di inserire un numero
while (isNaN(number)){
    number = parseInt(prompt("Inserisci un numero"));
}
//TODO Inizializzo variabile con array vuoto
const wrapArray = [];
//TODO Scorro fino a qaundo i è minore di number e a ogni ciclo incremento di i di 1
for (let i = 0; i < number; i = i + 1){
    let firstarray = [];                                       //TODO Ad ogni giro creo un array vuoto
    while (firstarray.length < 10){                            //TODO Finchè la lunghezza di questo array vuoto è inferiore a 10
        firstarray.push(Math.floor(Math.random() * 4528) + 4); //TODO Genero un numero randomico tra 4 e 4532 e lo inserisco(.push) in firstArray
    }                                                          //TODO USciremo dal while quando avremo creato 10 numeri random. E il for creerà un altro array che verra popolato dal while con altri 10 numeri random
                                                               //TODO Usciremo anche dal for quando i avrà creato gli array corrispondenti al numero inserito dal utente nel prompt
    console.log(firstarray);     //TODO Stampiamo gli N firstarray
    wrapArray.push(firstarray);   //ToDO e aggiungiamo gli N array all'interno di un Array, avremo così N array contenuti in un array

}

console.log(wrapArray); //TODO Stampiamo in console l'array finale