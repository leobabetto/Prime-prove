/* *La Sfida del Lancio del Dado*: Scrivi un programma che simula un gioco di lancio del dado tra l'utente e il computer. 
Sia l'utente che il computer lanciano un dado a sei facce, e quello con il tiro più alto vince. 
BONUS: Ripeti il gioco fino a quando l'utente decide di smettere. 
Tieni traccia di quanti giochi l'utente e il computer vincono ciascuno, e mostra i punteggi dopo ogni partita. */

/*let domanda = prompt('Vuoi iniziare il gioco?')
let punteggioUtente = 0;
let punteggioComputer = 0;
while (domanda == 'si' || domanda == 'SI') {
    let valMin = 1
    let valMax = 6
    let totNum = (valMax - valMin) + 1
    let random = Math.random() * totNum
    let risultato = Math.floor(random) + valMin
    let risultatoN = Number(risultato)
    console.log('Hai tirato ' + risultato)

    let valMin1 = 1
    let valMax1 = 6
    let totNum1 = (valMax1 - valMin1) + 1
    let random1 = Math.random() * totNum1
    let risultato1 = Math.floor(random1) + valMin1
    let risultato1N = Number(risultato1)
    console.log('Il computer ha tirato ' + risultato1)

    if (risultatoN > risultato1N){
        punteggioUtente ++;
    }else if (risultatoN == risultato1N){
        console.log('Siete pari. Nessuno ha preso punto');
    }else if(risultatoN < risultato1N){
        punteggioComputer ++;
    }
    console.log('Utente = ' + punteggioUtente + ' ' + 'Computer = ' + punteggioComputer)

    domanda = prompt('Vuoi continuare a giocare? (Si o No)');
} 

/* *Il Gioco dell'Indovinello*: Genera un numero casuale tra 1 e 10. Chiedi all'utente di indovinare il numero. 
Se indovinano troppo alto, dì loro di indovinare più basso. Se indovinano troppo basso, dì loro di indovinare più alto. 
Se indovinano il numero, congratulati con loro. 
BONUS: all'inizio del gioco, l'utente sceglie la difficoltà, inserendo il numero più alto per il gioco. 
Genera un numero casuale tra 1 e il numero scelto. */


let valMin = 1
let valMax = 10
let totNum = (valMax - valMin) + 1
let random = Math.random() * totNum
let risultato = Math.floor(random) + valMin
let risultatoN = Number(risultato)
let numUtente = prompt('Inserisci un numero da 1 a 10')
let numUtenteN = Number(numUtente)


let num = prompt('Inserisci un numero da 1 a 10');
let moltiplicatore = 1;
let numN = Number(num);
while(moltiplicatore <= 10) {
    let result = numN * moltiplicatore;
    console.log(numN + ' x ' + moltiplicatore + ' = ' + result);
    moltiplicatore ++;
}

/* Il Sostitutore di Parole*: Chiedi all'utente una frase e due parole: una da trovare e una con cui sostituirla. Sostituisci tutte le occorrenze della parola specificata nella frase. */
/*let frase = prompt('Scrivi una frase');
let parola1 = prompt('Scrivi la parola da trovare');
let parola2 = prompt('Scrivi la parola con cui sostituire la precedente');
let frase2 = frase.replaceAll(parola1, parola2);
console.log(frase2)


/* *Il Validatore di Siti Web*: Chiedi all'utente un URL di un sito web. Controlla se l'URL inizia con "http://" o "https://", e se termina con ".com". 
Se non lo fa, informa l'utente che potrebbe non essere un URL valido. */
/*let sito = prompt('Inserisci un sito web')
if (!(sito.startsWith('http' || 'https') && sito.endsWith('.com')))  {
   console.error('URL non valido')
}