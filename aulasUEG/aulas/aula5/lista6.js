const prompt = require("prompt-sync")();

let tempoDeVida = Number(prompt("Qual a sua idade?"));
let tempoDeVidaDias = tempoDeVida * 365.25;
let tempoDeVidaHoras = tempoDeVidaDias * 24;
let tempoDeVidaMinutos = tempoDeVidaHoras * 60;
let tempoDeVidaSegundos = tempoDeVidaMinutos * 60;  //isso aqui da pra melhorar 

let batidaCoracao = tempoDeVidaSegundos;

console.log(batidaCoracao);

//###############################################################################################################################################################################

let temperaturaFahrenheit = Number(prompt("temperatura em Fahrenheit? "));

let temperaturaGraus = (temperaturaFahrenheit - 32) * 5/9 ; // o professor inverteu na lista de exerciocio esse

console.log(temperaturaGraus) 

//###############################################################################################################################################################################


let quantidadeChuvasPolegada = Number(prompt("Quantidade da chuva em polegadas? "));

let quantidadeChuvasMilimetro = quantidadeChuvasPolegada * 25.4;

console.log(quantidadeChuvasMilimetro);

//###############################################################################################################################################################################

let lado1 = Number(prompt("lado 1 do triangulo? "));

let lado2 = Number(prompt("lado 2 do triangulo? "));

let lado3 = Number(prompt("lado 3 do triangulo? "));

let tTrinangulo = (lado1 + lado2 + lado3)/2;

let areaTrianguloSemRaiz =   (tTrinangulo * (tTrinangulo - lado1) * (tTrinangulo - lado2) * (tTrinangulo - lado3) )

let areaTrianguloComRaiz = Math.sqrt(areaTrianguloSemRaiz);

console.log(areaTrianguloComRaiz);

//###############################################################################################################################################################################

let matriz = Number(prompt("qual o numero da Matriz? "));

let matriz11 = matriz **11;
let matriz12 = matriz ** 12;
let matriz21 = matriz ** 21;
let matriz22 = matriz ** 22;

let determinante = matriz11 * matriz22 - matriz21 * matriz12; //uma matriz sempre se zera

console.log(determinante);

//###############################################################################################################################################################################

let horas = Number(prompt("quantas horas foram passadas dentro da Locadora? "));
let blocos3horas = Math.floor(horas / 3); // pega apenas blocos completos de 3 horas 
let horasQuebradas = horas % 3; // pega oq sobra dividido por 3

let valorTotal = blocos3horas * 8.50 + horasQuebradas * 3.50;

console.log(valorTotal);

//###############################################################################################################################################################################
let dinheiro = Number(prompt("Qual o valor total? "));

let dinheiro100 = Math.floor(dinheiro / 100);
let sobraDinheiro100 = dinheiro % 100;

let dinheiro50 = Math.floor(sobraDinheiro100 / 50);
let sobraDinheiro50 = sobraDinheiro100 % 50;

let dinheiro10 = Math.floor(sobraDinheiro50 / 10);
let sobraDinheiro10 = sobraDinheiro50 % 10;

let dinheiro5 = Math.floor(sobraDinheiro10 / 5);
let sobraDinheiro5 = sobraDinheiro10 % 5;

let dinheiro1 = Math.floor(sobraDinheiro5 / 1);

console.log("Notas de 100:", dinheiro100);
console.log("Notas de 50:", dinheiro50);
console.log("Notas de 10:", dinheiro10);
console.log("Notas de 5:", dinheiro5);
console.log("Notas de 1:", dinheiro1);

//###############################################################################################################################################################################
let IPI = Number(prompt("Qual o valor do IPI? "));

let valor1 = Number(prompt("Qual o valor da peça 1? "));
let quantidade1 = Number(prompt("Quantas peças 1? "));


let valor2 = Number(prompt("Qual o valor da peça 2? "));
let quantidade2 = Number(prompt("Quantas peças 2? "));


let valorTotalPecas = ((valor1 * quantidade1) + (valor2 * quantidade2)) * (IPI/100+1);

console.log("Valor total a pagar:", valorTotalPecas);
