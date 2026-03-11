const prompt = require("prompt-sync")();

const kmPorLitro2 = 12.5;
const custoGasolina2 = 6.20;

let tempoViagem2 = prompt("quanto tempo durou a viagem? ");
let velocidadeMedia2 = prompt("qual a velocidade media da viagem? ");

let distanciaPercorrida2 =  tempoViagem2 * velocidadeMedia2;

console.log("A distância percorrida foi de : " + distanciaPercorrida2 );

let litros2 =  distanciaPercorrida2 / kmPorLitro2;
console.log(litros2);

let gasto2 = litros2 * custoGasolina2;
console.log("A distancia percorrida foi: " + distanciaPercorrida2 + " gastando um total de " + litros2 + " dando " + gasto2 + " reais" ); 

//####################################################################################

let coeficienteA2 = prompt("coeficiente A? ");
let coeficienteB2= prompt("coeficiente B? ");
let coeficienteC2= prompt("coeficiente C? ");

let delta2= coeficienteB2 ** 2 -4 * coeficienteA2* coeficienteC2
console.log(delta2) 

//####################################################################################
let nota1 = prompt("nota 1?");
let nota2= prompt("nota 2? ");
let nota3= prompt("nota 3?");

let notaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10
console.log(notaFinal) 

//####################################################################################

let base = prompt("base?");
let altura = prompt("altura?");

let volume = 1/3 * (base * altura)
console.log(volume)