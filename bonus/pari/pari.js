/* pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. 
 Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer.
 Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari. */

 // chiedere all'utente di scegliere tra pari o dispari

 const userChoice = (prompt("Pari o dispari?"));
 console.log("Hai scelto " + userChoice);

 //chiedere all'utente un numero intero compreso tra 1 e 9

 const userNumber = Number(prompt("Scegli un numero intero compreso tra 1 e 9 "));
 console.log("Hai scelto " + userNumber);

 //Generare un numero casuale compreso tra 1 e 9 (giocata del computer)

 const rng = Math.floor(Math.random() * 9 ) + 1;


 //Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari