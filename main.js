
let numeri = [];
let numeriUser = [];
let save = [];

let ul = document.getElementById("numeri-random");

//genero 5 numeri random 
for (let i = 0; i < 5; i++) {
    let numRandom  = Math.floor(Math.random() * 10) + 1;
    numeri.push(numRandom);
    ul.innerHTML += `<li>${numRandom}</li>`;
}

setTimeout (function() {
    ul.innerHTML = ``;
}, 2000);

setTimeout (function() {
    for (let i = 0; i < 5; i++) {
        let User = parseInt(prompt("Inserisci il numero "+(i+1)+": "));
        numeriUser.push(User);
    }
}, 3000);

console.log(numeri);

setTimeout (function() {
    
    for (let i = 0; i < 5; i++) {
        if (numeri[i] === numeriUser[i]) {
            save.push(numeriUser[i]);
        }
    }

    document.writeln(`hai indoviato ${save.length} numeri e sono: ${save}`);
}, 5000);

console.log(save);