// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma



// const userWord = prompt("inserisci la parola")

// function reverserIsPal(word) {
//     const reverseWord = Array.from(word).reverse().join('');
//     console.log(`questa é la parola dell'utente ${word}`);
//     console.log(`questa é la parola rovesciata ${reverseWord}`);

//     if (reverseWord === word) {
//         return true
//     } else {
//         return false
//     }
// }
// // ho dichiarato la funzione prende la parola, la rigira


// const resultOfReverserIsPal = reverserIsPal(userWord)

// // uso la funzione e mi salvo il suo risultato in una variabile che poi posso richiamare

// console.log(resultOfReverserIsPal);

// ----------------------------------------------------------------------------------


const inputEl = document.getElementById('userInput');
const buttonEl = document.querySelector('button');

function isWordPalyndrome(word) {

    let reverseWordArr = word.split('').reverse().join('')
    console.log(reverseWordArr);
    //la divido in un array, lo rovescio, lo unisco rovesciato

    if (word === reverseWordArr) {
        console.log('pal');
        return true;
    } else {
        console.log('notpal');
        return false;
    }
}


buttonEl.addEventListener('click', function () {

    const userInput = inputEl.value


    if (isWordPalyndrome(userInput) && !userInput == '') {
        document.querySelector('body').insertAdjacentHTML("beforeend", `<div>your word ${userInput} is pal!</div>`)
    } else {
        document.querySelector('body').insertAdjacentHTML("beforeend", `<div>your word ${userInput} is NOT pal!</div>`)
    }





})
