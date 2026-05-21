const prompt = require("prompt-sync")();

let quantasNotas = Number(prompt("Quantas notas? "));
let resultado = 0;
let maior = 0;
for (let i = 0; i< quantasNotas; i ++ ){

    let valorNF = Number(prompt("Valor NF ? "));
    resultado += valorNF;
    
    if(valorNF > maior){
        maior = valorNF;
    }
    
}
console.log(resultado)
let media = resultado / quantasNotas;
console.log(media);
console.log(maior);