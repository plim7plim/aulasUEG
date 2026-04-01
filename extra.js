const prompt = require("prompt-sync")();

/*
let numero1 = Number(prompt("Digite um numero pae! "));
let numero2 = Number(prompt("Digite um de novo numero pae! "));

let operacaoo = prompt("Digite a operação a ser feita!( + - / *) ");

function calculadora (numero1, numero2,operacaoo){
    let newNumero = null;
    if (operacaoo == "+"){
       newNumero = numero1 + numero2;
        console.log("Seu número é: " + newNumero);
    }else if (operacaoo == "-"){
        newNumero = numero1 - numero2;
        console.log("Seu número é: " + newNumero);
    }else if (operacaoo == "/"){
        newNumero = numero1 / numero2;
        console.log("Seu número é: " + newNumero);
    }else{
        newNumero = numero1 * numero2;
         console.log("Seu número é: " + newNumero);
    }
    return newNumero;
}

let chamarCalculado = calculadora(numero1, numero2, operacaoo);
console.log(chamarCalculado); */


//---------------------------------------------------------------------------------------------------------

let velocidade = Number(prompt("A quantos KM a velocidade? "));
let limite = Number(prompt("Limite da via? "));

function limiteVelocidade (velocidade,limite){
    if(velocidade <= limite){
        console.log("Sem multa! ")
    }else if (velocidade >= limite * 1.0 && velocidade  <=  limite * 1.2){ //tem q colocar limites :) 
        console.log("multa leve! ")
    }else if (velocidade > limite * 1.21 && velocidade <= limite * 1.5){
        console.log("Multa grave! ")
    }else if (velocidade > limite * 1.5){
        console.log("multa gravissima! ")
    }

}

let newVelocidade = limiteVelocidade(velocidade, limite);
console.log(newVelocidade);
//##########################################################################################################

let pesoKG = Number(prompt("peso em kg! "));
let alturaMetro = Number(prompt("altura em metros! "));

function calculoImc (pesoKG,alturaMetro){
    let imc = pesoKG / alturaMetro **2;

    if (imc < 18.5){
        console.log("Abaixo do peso! ")
    }else if (imc >= 18.5 && imc <= 25 ){
        console.log("Peso normal! ")
    }else if (imc > 25 && imc <= 30){
        console.log("Tá roliço! ")
    }else if (imc > 30){
        console.log("Ta enormeeeee! ")
    }

}       
let calculoIMCC = calculoImc(pesoKG,alturaMetro)
console.log(calculoIMCC);
