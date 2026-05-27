const prompt = require("prompt-sync")();


/*
let soma = 0;
let contador = 0;

for (;;) {
    let idade = Number(prompt("Digite a idade (0 para sair): "));

    if (idade === 0) {
        break;
    }

    soma += idade;
    contador++;
}

let media = soma / contador;

console.log("Idade média:", media); 
//#################

let maiorTermo = 0;
let menorTermo = Infinity;

let numeroMulheres = 0;
let alturaSoMulheres = 0; 
let numeroHomens = 0; 

for (let i = 1; i <= 50; i++) {

    let sexo = prompt(`Pessoa ${i} - Sexo (H ou M): `).toUpperCase();
    let altura = Number(prompt(`Pessoa ${i} - Altura: `));

    // Validação do sexo e contagem/soma
    if (sexo === "M") {
        numeroMulheres++;
        alturaSoMulheres += altura;
    } else if (sexo === "H") {
        numeroHomens++; // Conta os homens
    }

    // Verificação de maior e menor altura
    if (altura > maiorTermo) {
        maiorTermo = altura;
    }

    if (altura < menorTermo) {
        menorTermo = altura;
    }
}

// O cálculo da média deve ser feito APÓS o término do loop
// Usamos uma verificação simples para evitar divisão por zero caso não haja mulheres
let mediaMulheres = numeroMulheres > 0 ? (alturaSoMulheres / numeroMulheres) : 0;

// Exibição dos resultados solicitados
console.log("A maior altura do grupo é:", maiorTermo);
console.log("A menor altura do grupo é:", menorTermo);
console.log("A média de altura das mulheres é:", mediaMulheres.toFixed(2));
console.log("O número de homens é:", numeroHomens);

//#####################
let populacaoA = 90000000;
let populacaoB = 20000000;
let anos = 0;


while (populacaoB < populacaoA) {
    populacaoA += populacaoA * 0.03; 
    populacaoB += populacaoB * 0.015; 
    anos++;
}

console.log(`Serão necessários ${anos} anos para a população de A ultrapassar ou igualar a de B.`);*/

//#####################
let massaInicial = 1000; 
let tempoEmSegundos = 0;

for (let massaAtual = massaInicial; massaAtual >= 0.5; massaAtual *= 0.5) {
    tempoEmSegundos += 50; 
}
let horas = Math.floor(tempoEmSegundos / 3600);
let restoSegundos = tempoEmSegundos % 3600;
let minutos = Math.floor(restoSegundos / 60);
let segundos = restoSegundos % 60;


let passos = tempoEmSegundos / 50;
let massaFinal = massaInicial * Math.pow(0.5, passos);


console.log("Massa Inicial:", massaInicial + "g");
console.log("Massa Final:", massaFinal.toFixed(4) + "g");
console.log(`Tempo necessário: ${horas}h ${minutos}m ${segundos}s`); //usei IA mesmoooo