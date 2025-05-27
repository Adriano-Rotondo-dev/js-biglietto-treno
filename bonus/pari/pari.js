/* pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. 
 Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer.
 Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari. */

 // chiedere all'utente di scegliere tra pari o dispari

 const userChoice = (prompt("Pari o Dispari?"));
 console.log("Hai scelto " + userChoice);

 //chiedere all'utente un numero intero compreso tra 1 e 9

 const userNumber = Number(prompt("Scegli un numero intero compreso tra 1 e 9 "));
 console.log("Hai scelto " + userNumber);

 //Generare un numero casuale compreso tra 1 e 9 (giocata del computer)

 const rngPC = Math.floor(Math.random() * 9 ) + 1;
 console.log(userChoice, userNumber, rngPC);

 //Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari
// stabilire la somma tra userNumber ed rngPC

 const somma = (userNumber + rngPC);
 console.log(somma);

 //stabilire se la somma dei numeri è divisibile per 2
console.log( somma % 2)

// stabilire il vincitore secondo le condizioni di scelta del pari e dispari
//stampa il messaggio di vittoria o sconfitta

if ( (somma % 2) === 0 && userChoice == "Pari")  {
 console.log("Hai vinto!")
}
 else if ( (somma % 2) !== 0 && userChoice == "Pari" ) {
console.log("Hai perso!")
}
 else if (( somma % 2) === 0 && userChoice == "Dispari" ) {
  console.log("Hai perso!")
 }
 else if ((somma % 2) !== 0 && userChoice == "Dispari") {
    console.log("Hai vinto!")
 };
