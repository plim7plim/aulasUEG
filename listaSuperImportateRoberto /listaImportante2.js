const prompt = require("prompt-sync")();

for (let i = 0; i < 16; i++){

    let numeros = Number(prompt("Digite numeros "));
    newNumero = numeros * numeros;
    console.log(newNumero);
} 
