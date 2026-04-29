const prompt = require("prompt-sync")();
const anoAtual = new Date().getFullYear();

let nome = prompt("Qual seu nome? ")
let idade = Number(prompt("Qual seu ano de nascimento? "));
let tempoDeVida = anoAtual - idade;



function calculoTaxa(anoAtual,nome,tempoDeVida){
    let taxa;
    if (tempoDeVida <= 10){
        taxa = 130;
    }else if (tempoDeVida >10 && tempoDeVida<=30){
        taxa = 230;
    }else if (tempoDeVida >30 && tempoDeVida<=50){
        taxa = 345;
    }else if (tempoDeVida >50 && tempoDeVida<=65){
        taxa = 490;
    }else if (tempoDeVida > 65){
        taxa = 1120;
    }

    console.log("Olá " + nome + " Sua taxa é de R$: " + taxa);

    
}

calculoTaxa(anoAtual,nome,tempoDeVida)