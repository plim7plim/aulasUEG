const prompt = require("prompt-sync")();

let acumulador = 0;

for (let i = 0; i < 15; i++) {

    let nomeAluno = prompt("Digite o nome do aluno: ");

    let nota1 = Number(prompt("Digite a nota da Prova 1: "));
    let nota2 = Number(prompt("Digite a nota da Prova 2: "));

    let media = (nota1 + nota2) / 2;

    // arredondando a média
    let mediaArredondada = Math.round(media);

    acumulador = acumulador + media;

    console.log(
        "Aluno: " + nomeAluno +
        " | Prova1: " + nota1 +
        " | Prova2: " + nota2 +
        " | Média: " + mediaArredondada
    );
}

// média geral da turma
let mediaFinal = acumulador / 15;

console.log("\nMédia geral da turma: " + mediaFinal.toFixed(2));