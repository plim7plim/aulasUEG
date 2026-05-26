const prompt = require("prompt-sync")();

let inferior = Number(prompt("Digite o limite inferior: "));
let superior = Number(prompt("Digite o limite superior: "));
let decremento = Number(prompt("Digite o decremento: "));

console.log("\nFahrenheit | Celsius");
console.log("----------------------");

for (let i = superior; i >= inferior; i -= decremento) {

    let conversao = 5 * (i - 32) / 9;

    console.log(i + "°F -> " + conversao.toFixed(2) + "°C");
}