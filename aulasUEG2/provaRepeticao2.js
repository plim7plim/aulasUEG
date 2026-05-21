const prompt = require("prompt-sync")();

let numero = Number(prompt("Escolha um numero  "));
function tabuadaa(numero){
    for (let i = 0; i<21; i++){
        tabuada = numero * i;
        console.log(tabuada)
    }

}

tabuadaa(numero);