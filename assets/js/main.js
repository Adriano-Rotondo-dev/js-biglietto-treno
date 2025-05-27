/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
TIP: per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:
100km, 10 anni => prezzo corretto: €16.80
100km, 70 anni => prezzo corretto: €12.60
*/

// chiedere all'utente il numero di chilometri

const userKms = Number(prompt("Quanti km vuoi percorrere?"));
console.log("Hai inserito " + userKms + " chilometri.");

// chiedere all'utente l'età del passeggero

const userAge = Number(prompt("Quanti anni hai?"));
console.log("Hai dichiarato " + userAge + " anni.")

//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//stampa il prezzo del biglietto prima di effettuare una scontistica

const ticketPrice = Number(userKms * 0.21 );
//  console.log(ticketPrice + "€");
// console.log("Il tuo biglietto costa " + ticketPrice + "€")

//calcola la scontistica sulla base dell'età dell'utente

if (userAge <= 18 ) {
    console.log( "Il tuo biglietto scontato costa " + (ticketPrice * 0.8).toFixed(2) + "€" )
} else if (userAge >= 65) {
    console.log( "Il tuo biglietto scontato costa " + (ticketPrice * 0.6).toFixed(2) + "€" ) 
} else {
    console.log("il tuo biglietto costa " + ticketPrice + "€" )
};

