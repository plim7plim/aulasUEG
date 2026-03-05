const prompt = require("prompt-sync")();

/*

let anos = Number(prompt("Quantos anos você tem?"));
let meses = Number(prompt("Quantos meses você tem?"));
let dias = Number(prompt("Quantos dias você tem?"));


let diasTotais = (anos*365) + (meses * 30) + (dias); 

console.log(diasTotais);  // vai dar uma diferença por conta dos bissextos 31 dias e 366 dias 
//###################################################################################################################################################################//###################################################################################################################################################################

let tempoSegundo = Number(prompt("Quantos segundos durou o evento? "));
let horas = Math.floor(tempoSegundo / 3600); // usa Math.floor pra retornar horas inteiras 
let restoHoras = tempoSegundo % 3600; // quociente de que sobra 
let minutos = Math.floor(restoHoras / 60); // da os minutos 
let segundos = restoHoras % 60; //quociente doq sobra (já é segundos )
console.log(`${horas} hora(s), ${minutos} minuto(s) e ${segundos} segundo(s)`); 

//###################################################################################################################################################################//###################################################################################################################################################################

let raioCilindro = Number(prompt("raio do cilindro? "));
let alturaCilindro = Number(prompt("altura do cilindro?"));

let areaCilindro = 2 * Math.PI * raioCilindro * (raioCilindro + alturaCilindro);
let volumeCilindro = Math.PI * (raioCilindro ** 2) * alturaCilindro;

console.log("A area do cilindro é :" + areaCilindro.toFixed(2) + " e o volume é : " + volumeCilindro.toFixed(2)); //so 2 casas decimais dps da virgula 

//###################################################################################################################################################################//###################################################################################################################################################################

let numero1 = Number(prompt("valor para numero 1? "));
let numero2 = Number(prompt("valor para numero 2? "));

if (numero2 > numero1){
    console.log("Dados inválidos");
} else {
    console.log("Dados válidos, vamos prosseguir");
}

let lado1 = numero1 ** 2 - numero2 ** 2;
let lado2 = 2 * numero1 * numero2;
let hipotenusa = numero1 ** 2 + numero2 ** 2;

console.log("Lado 1: " + lado1 + " Lado 2: " + lado2 + " Hipotenusa: " + hipotenusa); */

//###################################################################################################################################################################//###################################################################################################################################################################

let contaCorrente = Number(prompt("Digite os três digitos de sua conta corrente ! "));

let inversorContaCentena = Math.floor(contaCorrente / 100);
let restoContaDezena = contaCorrente % 100;
let inversorContaDezena = Math.floor(restoContaDezena / 10);
let inversorContaUnidade = restoContaDezena % 10;

let numeroInvertidoConta = inversorContaUnidade.toString() + inversorContaDezena.toString() + inversorContaCentena.toString();
numeroInvertidoConta = Number(numeroInvertidoConta);

console.log(numeroInvertidoConta);

let somaNumeros = contaCorrente + numeroInvertidoConta;
console.log(somaNumeros);

let centenaSoma = Math.floor(somaNumeros / 100);
let restoSoma = somaNumeros % 100;
let dezenaSoma = Math.floor(restoSoma / 10);
let unidadeSoma = restoSoma % 10;

let somaPosicional = centenaSoma * 1 + dezenaSoma * 2 + unidadeSoma * 3; // 7 + 12 + 21 = 40
let digitoVerificador = somaPosicional % 10; // 40 % 10 = 0

console.log(digitoVerificador);
