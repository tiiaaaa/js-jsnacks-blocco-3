/**
 *
 *
Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l'altro di verde.
Partendo da un array di numeri, creo una funzione che controlla se siano pari o dispari.
Se sono pari li stampo nell'div "rosso",
se sono dispari li stampo nell'div "verde".
 *
 */

const firstDiv = document.createElement("div");

firstDiv.classList.add("red");

document.querySelector("main").append(firstDiv);

// console.log(firstDiv);

const secondDiv = document.createElement("div");

secondDiv.classList.add("green");

document.querySelector("main").append(secondDiv);

