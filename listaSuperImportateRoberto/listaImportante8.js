const prompt = require("prompt-sync")();

let nome = prompt("Digite o nome: ");
let sexo = prompt("Digite o sexo (M/F): ").toUpperCase();

let peso = Number(prompt("Digite o peso: "));
let altura = Number(prompt("Digite a altura: "));

// cálculo do IMC
let imc = peso / (altura ** 2);

console.log("\nPaciente: " + nome);
console.log("IMC: " + imc.toFixed(2));

// classificação do IMC
if (imc < 20) {

    console.log("Abaixo do peso ideal");

} else if (imc >= 20 && imc <= 25) {

    console.log("Peso normal");

} else if (imc > 25 && imc <= 30) {

    console.log("Excesso de peso");

} else if (imc > 30 && imc <= 35) {

    console.log("Obesidade");

} else {

    console.log("Obesidade mórbida");
}

// cálculo do peso ideal
let pesoIdeal;

if (sexo == "M") {

    pesoIdeal = (72.7 * altura) - 58;

} else if (sexo == "F") {

    pesoIdeal = (62.1 * altura) - 44.7;

} else {

    console.log("Sexo inválido");
}

console.log("Peso ideal: " + pesoIdeal.toFixed(2) + " kg");