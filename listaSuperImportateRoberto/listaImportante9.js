const prompt = require("prompt-sync")();

let funcionarios = Number(prompt("Digite numero de funcionarios: "));

for (let i = 0; i < funcionarios; i++) {

    let salario = Number(prompt("Digite salario: "));

    if (salario <= 1412) {
        salario = salario * 0.925;

    } else if (salario > 1412 && salario <= 2666.68) {
        salario = salario * 0.91;

    } else if (salario > 2666.68 && salario <= 4000.03) {
        salario = salario * 0.88;

    } else {
        salario = salario * 0.86;
    }

    console.log("Salário final: " + salario.toFixed(2));
}