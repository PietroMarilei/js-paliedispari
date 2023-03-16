const userWord = prompt("inserisci la parola")

function reverser(word) {

    const reverseWord = Array.from(word).reverse().join();

    if (reverseWord == word) {
        return true
    }

    return false

}
// ho dichiarato la funzione 


const resultOfReverser = reverser(userWord)

// uso la funzione e mi salvo il suo risultato in una variabile che poi posso richiamare

console.log(resultOfReverser);



