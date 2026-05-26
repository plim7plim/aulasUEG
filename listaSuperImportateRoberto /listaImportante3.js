const prompt = require("prompt-sync")();

for (let i = 0; i < 101; i++) {

    let numeros = Number(prompt("Digite um número: "));
    let newNumero = Math.sqrt(numeros);

    console.log(newNumero);
}

