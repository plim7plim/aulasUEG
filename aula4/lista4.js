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

let areaBase = Math.PI * (raioLata ** 2) *2;
let areaLado = 2 * Math.PI * raioLata * alturaLata

let areaLata = areaBase + areaLado;

let precoLatinha = areaLata * aluminioLatinha;

console.log (precoLatinha); 

//###################################################################################################################################################################

let valorA = Number(prompt("de um valor pra A ")) ;numeroInvertido = Number(numeroInvertido);
let valorB = Number(prompt("de um valor pra B ")) ;

let provisoria = valorA; //provisoria armazena o valor de A 
let newValorA = valorB // invertemos os valores 
let newValorB = provisoria; // novo valor de B passa a ser provisoria 

console.log("Trocando os valores, A agora vale: " + newValorA + " e B agora vale :" + newValorB ); 

//###################################################################################################################################################################//###################################################################################################################################################################

let precoFabrica = Number(prompt("Qual o valor do seu carro a preço de fábrica?")) ;

let porcentagemDistribuidor= precoFabrica * 0.12;
let impostos = precoFabrica * 0.3;

const carroNovo = porcentagemDistribuidor + impostos;

console.log(carroNovo + precoFabrica); 

//###################################################################################################################################################################//###################################################################################################################################################################


let numeroSeparado = Number(prompt("Escolha um numero entre 100 a 999!!"));

let centenaSeparado = Math.floor(numeroSeparado / 100); //separa centena
let restoCentena = numeroSeparado % 100; //pega o que resta da centena 
let dezenaSeparado = Math.floor(restoCentena / 10); //o que sobra da centena divide pra 10
let unidadeSeparado = restoCentena % 10; // quociente do que sobra da dezena 

console.log(centenaSeparado);  
console.log(dezenaSeparado);   
console.log(unidadeSeparado)

let numeroInvertido = unidadeSeparado.toString() + dezenaSeparado.toString() + centenaSeparado.toString();
numeroInvertido = Number(numeroInvertido);

console.log(numeroInvertido);
