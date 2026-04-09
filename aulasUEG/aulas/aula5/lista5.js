const prompt = require("prompt-sync")();



//######################################################
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

console.log("Lado 1: " + lado1 + " Lado 2: " + lado2 + " Hipotenusa: " + hipotenusa);

//###################################################################################################################################################################//###################################################################################################################################################################
let numeroSeparado = Number(prompt("Escolha um número entre 100 e 999:"));

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
let digitoVerificador = somaPosicional % 10;

console.log("Dígito verificador:", digitoVerificador);