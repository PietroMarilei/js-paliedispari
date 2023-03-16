// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma



const userWord = prompt("inserisci la parola")

function reverserIsPal(word) {
    const reverseWord = Array.from(word).reverse().join();
    console.log(`questa é la rpola dell'utente ${word}`);
    console.log(`questa é la parola rovesciata ${reverseWord}`);

    if (reverseWord === word) {
        return true
    } else {
        return false
    }
}
// ho dichiarato la funzione prende la parola, la rigira


const resultOfReverserIsPal = reverserIsPal(userWord)

// uso la funzione e mi salvo il suo risultato in una variabile che poi posso richiamare

console.log(resultOfReverserIsPal);

// ----------------------------------------------------------------------------------

// // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione) Dichiariamo chi ha vinto.


// const userChoice = prompt("scegli pari o dispari");

// const userNumber = Number(prompt("scegli un numero da 1 a 5"));
// console.log(userNumber);
// // chiedo all'utente i dati

// function randomNumbGenerator(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// // funzione di W3S per generare un numero random in un intervallo definito

// const enemyNumber = randomNumbGenerator(1, 5)
// console.log(enemyNumber);

// // metto in una const il numero casuale del pc

// const sumOfNumbers = userNumber + enemyNumber;
// // sommo i due numeri

// function isEven(number) {
//     if (number % 2 == 0) {
//         return true
//     } else {
//         return false
//     }

// }
// // ho fatto una funzione che mi dice se un numero é pari o dispari

// let resultOfIsEven = isEven(sumOfNumbers)
// // immagazzino il risulato in una const

// if (resultOfIsEven == true) {
//     resultOfIsEven = "pari"
//     console.log(resultOfIsEven);
//     console.log("il risultato della somma dei due numeri é pari");

// } else {
//     resultOfIsEven = "dispari";
//     console.log(resultOfIsEven);
//     console.log("il risultato della somma dei due numeri é dispari");
// }

// //  fino a qua ho verifcato che la somma sia pari o dispari

// if (userChoice == resultOfIsEven) {
//     console.log("hai vinto");

// } else {
//     console.log("hai perso");
// }
// // ora siccome resultofisEven diventa una stringa chiamata pari o dispari a seconda del risultato se la userChoice corrisponde hai vinto, oppure hai perso. 