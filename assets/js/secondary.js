const userWord = prompt("inserisci la parola")

function reverser(word) {
    let reversedStr
    for (let i = word.length; i >= 0; i--) {
        reversedStr = reversedStr + word[i];
    }

    return reversedStr
}
// ho dichiarato la funzione prende la parola, la rigira


const resultOfReverser = reverserIsPal(userWord)

// uso la funzione e mi salvo il suo risultato in una variabile che poi posso richiamare

console.log(resultOfReverser);

