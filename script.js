// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che
  maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la 
spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito
 per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e'
 / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50

let utenteCheEffettuaLAcquisto = marco //cambia il valore qui per provare se il tuo algoritmo funziona!
let sale = prices [0];
var finalPrice= sale;

// let array= [ marco, paul, amy ];

// console.log(prices[0])



// Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la 
// spedizione (anche gli utenti speciali pagano le spedizioni).
// Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
// In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito
//  per coprire il costo della spedizione.
 

if (marco.isAmbassador) {
  console.log("Ambassador");
   finalPrice= (sale - (sale * 30) / 100);
  console.log(finalPrice);
}
if  ( finalPrice >= 100 ) {
    console.log (sale + "" + "spedizione gratuita");
} else {
    console.log(finalPrice + shippingCost);
}



// console.log(array);


// if (paul.isAmbassador) {
//   console.log("Utente paul ha uno sconto del 30%");
// } else {
//   console.log("Utente paul non ha sconto");
// }

// if (amy.isAmbassador) {
//   console.log("Utente amy ha uno sconto del 30%");
// } else {
//   console.log("Utente amy non ha sconto");
// }

// if (marco.price >= 100 ) {
//   console.log("spedizione gratuita!");
// } else {
//   console.log(marco.price + 50 + " " + "è il tuo prezzo finale");
// }

// if (paul.price >= 100 ) {
//   console.log("spedizione gratuita!");
// } else {
//   console.log(paul.price + 50 + " " + "è il tuo prezzo finale");
// }
//   if (amy.price >= 100 ) {
//     console.log("spedizione gratuita!");
//   } else {
//     console.log(amy.price + 50 + " " + "è il tuo prezzo finale");
//   }
  
// // }
// for ( let array.isAmbassador ;  < .length; index++) {
//   const element = array[index];
  
// }

// if (amy.isAmbassador) {
//   console.log("Ambassador");
//   finalPrice= (sale - (sale * 30) / 100);
//   console.log(finalPrice);
// }
// if  ( finalPrice >= 100 ) {
//     console.log (sale + "" + "spedizione gratuita");
// } else {
//     console.log(finalPrice + shippingCost);
// }

