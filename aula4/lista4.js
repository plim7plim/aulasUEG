const prompt = require("prompt-sync")();

let vazao = Number(prompt("Qual a vazão? "));
let diametro = Number(prompt("Qual o diametro? "));
let rugosidade = Number(prompt("Qual a rugosidade? ")); 

let perdaCarga = (vazao ** 1.85) * 10.643 * ((diametro ** 4.87) * (rugosidade ** -1.85));

console.log(perdaCarga)

//######################################################################################################################################


let publicoTotal =  Number(prompt("Qual o público total do jogo? "));

let popular = (publicoTotal * 0.1) * 5;
let geral = (publicoTotal * 0.5) * 10;
let arquibancada = (publicoTotal * 0.3) * 20;
let cadeiras = (publicoTotal * 0.1) * 40;

let valorArrecadado = popular + geral + arquibancada + cadeiras;

console.log(valorArrecadado);

//######################################################################################################################################    

const aluminioLatinha = 155.0

let alturaLata = Number(prompt("Qual a altura da lata em m? ")) ;
let raioLata = Number(prompt("Qual o raio da lata em m ? ")) ;

areaBase = Math.PI * (raioLata ** 2) *2;
areaLado = 2 * Math.PI * raioLata * alturaLata

let areaLata = areaBase + areaLado;

precoLatinha = areaLata * aluminioLatinha;

console.log (precoLatinha);

//###################################################################################################################################################################

let valorA = Number(prompt("de um valor pra A ")) ;
let valorB = Number(prompt("de um valor pra B ")) ;

let newValorA = valorB;
let newValorB = valorA;

console.log("Trocando os valores, A agora vale: " + newValorA + " e B agora vale :" + newValorB );