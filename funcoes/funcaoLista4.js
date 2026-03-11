const prompt = require("prompt-sync")();

let vazao = Number(prompt("Qual a vazão? "));
let diametro = Number(prompt("Qual o diametro? "));
let rugosidade = Number(prompt("Qual a rugosidade? ")); 

function calcularPerdaCarga (vazao, diametro, rugosidade){
    let perdaCarga = (vazao ** 1.85) * 10.643 * ((diametro ** 4.87) * (rugosidade ** -1.85));
    return perdaCarga;
}
let saberPerdaCarga = calcularPerdaCarga(vazao, diametro, rugosidade);
console.log(saberPerdaCarga);

//######################################################################################################################################
let publicoTotal =  Number(prompt("Qual o público total do jogo? "));

function calcularValorArrecadado (publicoTotal){
    let popular = (publicoTotal * 0.1) * 5;
    let geral = (publicoTotal * 0.5) * 10;
    let arquibancada = (publicoTotal * 0.3) * 20;
    let cadeiras = (publicoTotal * 0.1) * 40; 
    let valorArrecadado = popular + geral + arquibancada + cadeiras;
    return valorArrecadado;
}  
let saberValorArrecadado = calcularValorArrecadado(publicoTotal);
console.log(saberValorArrecadado);
//######################################################################################################################################

const aluminioLatinha = 155.0
let alturaLata = Number(prompt("Qual a altura da lata em m? ")) ;
let raioLata = Number(prompt("Qual o raio da lata em m ? ")) ;

function calcularPrecoLatinha (alturaLata, raioLata, aluminioLatinha){
    let areaBase = Math.PI * (raioLata ** 2) *2;
    let areaLado = 2 * Math.PI * raioLata * alturaLata;
    let areaLata = areaBase + areaLado;
    let precoLatinha = areaLata * aluminioLatinha;
    return precoLatinha;
}
let saberPrecoLatinha = calcularPrecoLatinha(alturaLata, raioLata, aluminioLatinha);
console.log (saberPrecoLatinha);

//###################################################################################################################################################################
let precoFabrica = Number(prompt("Qual o valor do seu carro a preço de fábrica?")) ;

function calcularValorCarro (precoFabrica){
    let porcentagemDistribuidor= precoFabrica * 0.12;
    let impostos = precoFabrica * 0.3;
    const carroNovo = porcentagemDistribuidor + impostos;
    return carroNovo + precoFabrica;
}   
let saberValorCarro = calcularValorCarro(precoFabrica);
console.log(saberValorCarro);
//###################################################################################################################################################################//###################################################################################################################################################################      
let valorA = Number(prompt("de um valor pra A ")) ;
let valorB = Number(prompt("de um valor pra B ")) ; 

function inverterValores (valorA, valorB){
    let provisoria = valorA;
    let newValorA = valorB;
    let newValorB = provisoria;
    return `O novo valor de A é ${newValorA} e o novo valor de B é ${newValorB}`;
}
let saberInverterValores = inverterValores(valorA, valorB);
console.log(saberInverterValores);