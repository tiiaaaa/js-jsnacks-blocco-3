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
//!Creo i miei 2 Div dove all' interno stamperò i numeri
const redDiv = document.createElement("div");
const greenDiv = document.createElement("div");

//!Aggiungo l'ID ai 2 div creati
redDiv.id = "red";
greenDiv.id = "green";

//!Li inserisco nell'HTML con .append
document.querySelector("main").append(redDiv, greenDiv);

//!Array con N numeri
let numberArray = [12,3,40,67,52,89,1,3,23,16,77,31,33,54,122];

for (let i = 0; i < numberArray.length; i = i + 1){
    if (isEven(numberArray[i])){
        redDiv.innerHTML += numberArray[i] + ", ";
    } else{
        greenDiv.innerHTML += numberArray[i] + ", ";
    }
}

//!Funzione che fa il check del numero se è pari o dispari 
//!Se è PARI torna TRUE se è DISPARI torna FALSE
function isEven(number){
    if(number % 2 == 0){
        return true;
    }else{
        return false;
    }
}