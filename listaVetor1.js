const prompt = require("prompt-sync")();


/*
let qtdNotas = Number(prompt("Digite quantas notas foram ")); // -1 pq é começo é vetor 

let vetor =  [];

let acumulador = 0;
for (i = 0; i<qtdNotas; i++){
    let Notas = Number(prompt(`Digite as notas ${i+1} `));

    acumulador = acumulador + Notas;

    vetor[i] = Notas; // ele preenche cada posição cada vez que passa 
}

let media = acumulador / vetor.length; //ou qtdNotas
///////////////////////////
let maior = 0;
let menor = vetor[0];  //ou Infinity;


for (let i = 0; i < vetor.length; i++) {

    if (vetor[i] > maior) {
        maior = vetor[i];
    }

    if (vetor[i] < menor) {
        menor = vetor[i];
    }

    if (vetor[i] < media) {
        console.log("Menores que a média: " + vetor[i]);
    }

    if (vetor[i] > media) {
        console.log("Maiores que a média: " + vetor[i]);
    }

    if (vetor[i] === media) {
        console.log("Igual à média: " + vetor[i]);
    }
}


console.log(media)
console.log("menor = " + menor);
console.log("maior = " + maior); */

for (let i = 1; i <= 9; i++) {

    let linha = "";

    for (let j = 1; j <= i; j++) {
        linha += j;
    }

    console.log(linha);
}

for (let i = 1; i <= 9; i++) {

    let linha = "";

    for (let j = 1; j <= i; j++) {
        linha += "*";
    }

    console.log(linha);
}


for (let i = 3; i<501; i ++){
    if (i%3 ==0 ){
        console.log(i)
    }
}