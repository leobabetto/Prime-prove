//Generatore tabelle moltiplicazione

const user = prompt ('Insert a number between 1 and 10');
const userNumber = Number(user);
let multiplyVal = 1;
while(multiplyVal <= 10){
let multiplyResult = userNumber*multiplyVal;
console. log(userNumber + 'x' + multiplyVal + '=' + multiplyResult);
multiplyVal++;


// Sostitutore di parole

let userQuote = prompt('Write a quote');
let originalWord = prompt('Word you want to replace') ;
let newWord = prompt ('New word to use');
userQuote = userQuote. replaceAll(originalWord, newWord);
console.log (userQuote);


let userUrl = prompt("Type a URL");
if(userUrl.startsWith('http://') || userUrl.startsWith('https://') && userUrl.endsWith(".com") ){
    console. log('This is a valid URL');
} else {
    console. log('This isnn a valid URL');
}

` ` ` `