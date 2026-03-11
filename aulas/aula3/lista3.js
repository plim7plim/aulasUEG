const prompt = require("prompt-sync")();

let pontoAx1 = prompt("Valor de X para A");
let pontoAy1 = prompt("Valor de Y para A");

let pontoBx2 = prompt("Valor de X para B");
let pontoBy2 = prompt("Valor de Y para B");

let distancia = (Math.sqrt((pontoBx2 - pontoAx1)**2 + (pontoBy2 - pontoAy1)**2));

console.log(distancia);

//##############################################################################################################

const salarioFixo = 1500;

let televisoesLCD = prompt ("Quantas Tv's LCD foram vendidas por você ?") ;
let valorTelevisoesLCD = televisoesLCD * 50;

let televisoesLED = prompt ("Quantas Tv's LED foram vendidas por você ?") ;
let valorTelevisoesLED = televisoesLED * 60;

let televisoesPlasma = prompt("Quantas Tv's de Plasma foram vendidas por você ? ");
let valorTelevisoesPlasma= televisoesPlasma * 55;

let salarioTotal = salarioFixo + valorTelevisoesLCD + valorTelevisoesLED + valorTelevisoesPlasma;
console.log(salarioTotal); 

//##############################################################################################################


let aplicacaoMensal = Number(prompt("Digite o valor da aplicação mensal: "));
let taxa = Number(prompt("Digite o valor da taxa (%): ")) / 100; //esse lixo aqui tem q ir pra decimal 
let numeroMeses = Number(prompt("Digite o numero de meses: "));

let aplicacaoProgramada =
    aplicacaoMensal *
    (((1 + taxa) ** numeroMeses - 1) / taxa);

console.log("Resultado:", aplicacaoProgramada); 


//##############################################################################################################

let prestacaoAtrasada = Number(prompt("Digite o valor da prestacao "));
let juros = Number(prompt("Digite o valor da prestacao % ")) / 100; //esse lixo foi pra decimal dnv 
let tempoAtraso = Number(prompt("o tempo atrasado "));


novoValorPrestacao = prestacaoAtrasada + (prestacaoAtrasada * juros * tempoAtraso);

console.log(novoValorPrestacao);