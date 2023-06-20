
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

//     return number % 2 == 0

// }
// // ho fatto una funzione che mi dice se un numero é pari o dispari

// const resultOfIsEven = isEven(sumOfNumbers)
// // immagazzino il risulato in una const
// let flag

// if (resultOfIsEven == true) {
//     flag = "pari"
//     console.log(resultOfIsEven);
//     console.log("il risultato della somma dei due numeri é pari");

// } else {
//     flag = "dispari";
//     console.log(resultOfIsEven);
//     console.log("il risultato della somma dei due numeri é dispari");
// }

// //  fino a qua ho verifcato che la somma sia pari o dispari

// if (userChoice == flag) {
//     console.log("hai vinto");

// } else {
//     console.log("hai perso");
// }

const oddEl = document.getElementById('userOddEven');
const inputEl = document.getElementById('userInput');
const buttonEl = document.querySelector('button');

let even = false;

function randomNumbGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sum(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

function oddOrEven(numb) {
    (numb % 2) == 0 ? true : false;
}


buttonEl.addEventListener('click', function () {
    const enemyNumber = randomNumbGenerator(1, 5);
    const userInput = parseInt(inputEl.value);

    console.log('enemy numb', enemyNumber);
    console.log('user numb', userInput);

    // if (((userInput + enemyNumber) % 2) == 0) {
    //     console.log('pari');
    //     even = true
    // } else {
    //     console.log('dispari');
    //     even = false
    // }

    const sum = sum(enemyNumber, userInput);
    console.log(sum);


})
