const prompt = require("prompt-sync")();

for (let i = 0; i < 10; i++) {

    let numero = Number(prompt("Digite um número: "));
    let metade = numero / 2;

    console.log("Metade:", metade);
}