const prompt = require("prompt-sync")();

let anos = Number(prompt("Quantos anos você tem?"));
let meses = Number(prompt("Quantos meses você tem?"));
let dias = Number(prompt("Quantos dias você tem?"));

function calcularDias(anos,meses,dias){
    let diasTotais = (anos*365) + (meses * 30) + (dias); 
    return diasTotais;
}
let saberDias = calcularDias(anos, meses, dias)
console.log(saberDias);

//########################################################################################################
let tempoSegundo = Number(prompt("Quantos segundos durou o evento? "));

function saberTempo(tempoSegundo){
    let horas = Math.floor(tempoSegundo / 3600); 
    let restoHoras = tempoSegundo % 3600; 
    let minutos = Math.floor(restoHoras / 60); 
    let segundos = restoHoras % 60; 

    return {
        horas,
        minutos,
        segundos
    };
}
let resultado = saberTempo(tempoSegundo);
console.log(`${resultado.horas} horas, ${resultado.minutos} minutos e ${resultado.segundos} segundos`);

//########################################################################################################

let raioCilindro = Number(prompt("raio do cilindro? "));
let alturaCilindro = Number(prompt("altura do cilindro?"));

function calculoCilindro(raioCilindro,alturaCilindro){
    let areaCilindro = 2 * Math.PI * raioCilindro * (raioCilindro + alturaCilindro);
    let volumeCilindro = Math.PI * (raioCilindro ** 2) * alturaCilindro;

    let fimDoCalculo = console.log("A area do cilindro é :" + areaCilindro.toFixed(2) + " e o volume é : " + volumeCilindro.toFixed(2));
    return fimDoCalculo;
}    

let newCilindro = calculoCilindro(raioCilindro,alturaCilindro);
console.log(newCilindro);

//########################################################################################################

let numero1 = Number(prompt("valor para numero 1? "));
let numero2 = Number(prompt("valor para numero 2? "));

function pitagoras(numero1, numero2){
    let lado1 = numero1 ** 2 - numero2 ** 2;
    let lado2 = 2 * numero1 * numero2;
    let hipotenusa = numero1 ** 2 + numero2 ** 2;
    
    let triangulo = console.log("Lado 1: " + lado1 + " Lado 2: " + lado2 + " Hipotenusa: " + hipotenusa);
    return triangulo;
}

let fazerPitagoras = pitagoras(numero1, numero2);
console.log(fazerPitagoras);

//########################################################################################################

let numeroSeparado = Number(prompt("Escolha um número entre 100 e 999:"));

function digitoConfirmar(numeroSeparado){
    // separar os dígitos
    let centena = Math.floor(numeroSeparado / 100);
    let resto = numeroSeparado % 100;
    let dezena = Math.floor(resto / 10);
    let unidade = resto % 10;

    console.log("Centena:", centena);
    console.log("Dezena:", dezena);
    console.log("Unidade:", unidade);

    // inverter o número
    let numeroInvertido = Number(unidade.toString() + dezena.toString() + centena.toString());

    console.log("Número invertido:", numeroInvertido);

    // somar os números
    let soma = numeroSeparado + numeroInvertido;

    console.log("Soma:", soma);

    // separar os dígitos da soma
    let centenaSoma = Math.floor(soma / 100);
    let restoSoma = soma % 100;
    let dezenaSoma = Math.floor(restoSoma / 10);
    let unidadeSoma = restoSoma % 10;

    // multiplicação posicional
    let mult1 = centenaSoma * 1;
    let mult2 = dezenaSoma * 2;
    let mult3 = unidadeSoma * 3;

    let somaPosicional = mult1 + mult2 + mult3;

    console.log("Multiplicações:", mult1, mult2, mult3);
    console.log("Soma posicional:", somaPosicional);

    // dígito verificador
    let digitoVerifi954cador = somaPosicional % 10;
    
    return digitoVerificador;
}
let newDigitoVerificador = digitoConfirmar(numeroSeparado);
console.log(newDigitoVerificador);

//########################################################################################################