const prompt = require("prompt-sync")();

let pontoAx1 = prompt("Valor de X para A? ");
let pontoAy1 = prompt("Valor de Y para A? ");

let pontoBx2 = prompt("Valor de X para B? ");
let pontoBy2 = prompt("Valor de Y para B? ");

function distanciaa (pontoAx1, pontoAy1, pontoBx2, pontoBy2){
    let calculoDistancia = (Math.sqrt((pontoBx2 - pontoAx1)**2 + (pontoBy2 - pontoAy1)**2));
    return calculoDistancia;
}
let saberDistancia = distanciaa(pontoAx1, pontoAy1, pontoBx2, pontoBy2);
console.log(saberDistancia);


//#############################################################################################################


const salarioFixo = 1500;

let televisoesLCD = prompt ("Quantas Tv's LCD foram vendidas por você ? ");
let televisoesLED = prompt ("Quantas Tv's LED foram vendidas por você ? ");
let televisoesPlasma = prompt("Quantas Tv's de Plasma foram vendidas por você ? ");

function salarioTotal(televisoesLCD, televisoesLED, televisoesPlasma, salarioFixo){
    let calculoSalarioFinal = televisoesLCD * 50 + televisoesLED * 60 + televisoesPlasma * 55 + salarioFixo;
    return calculoSalarioFinal;
}
let saberSalarioTotal = salarioTotal(televisoesLCD,televisoesLED,televisoesPlasma, salarioFixo);
console.log(saberSalarioTotal);

//#############################################################################################################

let aplicacaoMensal = Number(prompt("Digite o valor da aplicação mensal: "));
let taxa = Number(prompt("Digite o valor da taxa (%): ")) / 100; //esse lixo aqui tem q ir pra decimal 
let numeroMeses = Number(prompt("Digite o numero de meses: "));

function aplicacaoProgramada2 (aplicacaoMensal, taxa, numeroMeses){
    let calcularAplicacaoProgramada2 = aplicacaoMensal *(((1 + taxa) ** numeroMeses - 1) / taxa);
    return calcularAplicacaoProgramada2
}
let saberTaxa = aplicacaoProgramada2(aplicacaoMensal, taxa, numeroMeses);
console.log(saberTaxa);

//#############################################################################################################
let prestacaoAtrasada = Number(prompt("Digite o valor da prestacao "));
let juros = Number(prompt("Digite o valor da prestacao % ")) / 100; //esse lixo foi pra decimal dnv 
let tempoAtraso = Number(prompt("o tempo atrasado "));

function valorPrestacaoAtrasada (prestacaoAtrasada, juros, tempoAtraso){
    let calcularValorPrestacaoAtrasada = prestacaoAtrasada * (1 + juros * tempoAtraso);
    return calcularValorPrestacaoAtrasada;
}

let saberValorPrestacaoAtrasada = valorPrestacaoAtrasada(prestacaoAtrasada, juros, tempoAtraso);
console.log(saberValorPrestacaoAtrasada);   
