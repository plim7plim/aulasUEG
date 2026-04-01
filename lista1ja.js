//1. Fazer um algoritmo que leia um número inteiro positivo e mostre umamensagem indicando se este número é par ou ímpar.

const prompt = require("prompt-sync")();

//CONFORME 
let digiteNumero = Number(prompt("Digite um numero pae! "));

function calcularNumero(digiteNumero){
    if(digiteNumero%2 !== 0){
        console.log("impar");
    } else{
        console.log("par");
    } 
}

let chamarNumero = calcularNumero(digiteNumero);
console.log(chamarNumero)


//############################################################################################################

//CONFORME
let salarioo = Number(prompt("Digite seu salário!"));

function reajuste(salarioo){
    if(salarioo <= 1412){
        let salarioMenor = Number (salarioo * 0.5 + salarioo);
        console.log(salarioMenor);
        return salarioMenor.toFixed(2);
    }else{
        let salarioMaior = Number (salarioo * 0.4 + salarioo) ;
        console.log(salarioMaior);
        return salarioMaior.toFixed(2);
    }
    
}

let saberReajuste =  reajuste(salarioo);
console.log(saberReajuste) 

//############################################################################################################
let quebraNumero = Number(prompt("Digite um numero de 1000 a 9999! "));

//CONFORME
function quebrarNumero (quebraNumero){
    let milhar = Math.floor(quebraNumero/1000).toString();
    let sobraMilhar = quebraNumero % 1000;

    let centena = Math.floor(sobraMilhar / 100).toString();
    let sobraCentena = sobraMilhar % 100;

    let dezena = Math.floor(sobraCentena/10).toString();
    let sobraDezena = sobraCentena % 10;

    let unidade = sobraDezena.toString();

    let parte1 = Number(milhar + centena);
    let parte2 = Number(dezena + unidade);

    let somaPartes = parte1 + parte2;
    let elevaPartes = somaPartes ** 2 ;

    if(quebraNumero !== elevaPartes){
        console.log("Não possui");
    } else {
        console.log("Possui");
    }

    return elevaPartes;
}

let newQuebraNumero = quebrarNumero(quebraNumero);
console.log(newQuebraNumero); 

//############################################################################################################

let eleitor = Number(prompt("qual sua idade?"))

//TEM Q AJUSTAR 
function eleitorUrna (eleitor){
    if(eleitor >17 || eleitor <66){
        console.log("Obrigatório")
    }else if (eleitor << 16){
        console.log("Não pode")
    }if(eleitor >15 && eleitor <18 ||eleitor >65 ){
        console.log("Se quiser sim")
    }
}

let boraVotar = eleitorUrna(eleitor);
console.log(boraVotar);

//############################################################################################################

let coeficienteA = Number(prompt("qual valor de A?"));
let coeficienteB = Number(prompt("qual valor de B?"));
let coeficienteC =  Number(prompt("qual valor de C?"));

function calculoDelta(coeficienteA, coeficienteB, coeficienteC){
    let delta = coeficienteB ** 2 - 4 * coeficienteA * coeficienteC;

//CONFORME
    if(delta<0){
        console.log("Possuí uma raiz imaginária")
    }else if(delta == 0){
        console.log("Raiz unica")
    }else{
        console.log("Raizer distintas")
    }

}

let newCalculoDelta= calculoDelta(coeficienteA,coeficienteB,coeficienteC);
console.log(newCalculoDelta);

//############################################################################################################

let nomeA = prompt("Qual seu nome?");
let numeroConta = Number(prompt("Qual número da sua conta?"));
let saldo = Number(prompt("Qual o saldo semestral da conta?"));

function definirSaldo(nomeA, numeroConta, saldo) {
    let mediaMensal = saldo / 6;
    let tarifa = 0;
    let tipo = "";

    if (mediaMensal < 1000) {
        tarifa = 25;
        tipo = "Básica";
    } else if (mediaMensal <= 2000) {
        tarifa = 20;
        tipo = "Prata";
    } else if (mediaMensal <= 3500) {
        tarifa = 13;
        tipo = "Ouro";
    } else {
        tarifa = 0;
        tipo = "Prêmio (Isento)";
    }

    console.log("Olá, " + nomeA);
    console.log("Conta: " + numeroConta);
    console.log("Saldo médio mensal: R$ " + mediaMensal.toFixed(2));
    console.log("Categoria: " + tipo);
    console.log("Tarifa: R$ " + tarifa);
}

definirSaldo(nomeA, numeroConta, saldo);
//############################################################################################################
let precoEtiqueta = Number(prompt("Qual o preço? "));
let codigo = Number(prompt("Qual o código da operação? "));

function calculoDePreco(precoEtiqueta, codigo) {
    let tipo = "";

    switch (codigo) {
        case 1:
            precoEtiqueta = precoEtiqueta * 0.90;
            tipo = "À vista, dinheiro ou cheque";
            console.log(tipo + " - Total: R$ " + precoEtiqueta.toFixed(2));
            break;

        case 2:
            precoEtiqueta = precoEtiqueta * 0.95;
            tipo = "À vista no cartão";
            console.log(tipo + " - Total: R$ " + precoEtiqueta.toFixed(2));
            break;

        case 3:
            tipo = "2 vezes sem juros";
            let precoDividido2 = precoEtiqueta / 2;
            console.log(tipo + " - Total: R$ " + precoEtiqueta.toFixed(2) + " | 2x de: R$ " + precoDividido2.toFixed(2));
            break;

        case 4:
            tipo = "3 vezes com 10% de juros";
            let total = precoEtiqueta * 1.10;
            let precoDividido3 = total / 3;
            console.log(tipo + " - Total com juros: R$ " + total.toFixed(2) + " | 3x de: R$ " + precoDividido3.toFixed(2));
            break;

        default:
            console.log("Código inválido.");
    }
}

calculoDePreco(precoEtiqueta, codigo);


//############################################################################################################}

let combustivel = Number(prompt("Qual o código do combustível? "));
let valor = Number(prompt("Quanto em reais? "));

function calculoDeCombustivel(combustivel, valor) {
    let tipo = "";
    let litros = 0;

    switch (combustivel) {
        case 1:
            tipo = "Álcool";
            litros = valor / 4.805;
            break;

        case 2:
            tipo = "Diesel";
            litros = valor / 5.953;
            break;

        case 3:
            tipo = "Gasolina";
            litros = valor / 6.565;
            break;

        default:
            tipo = "Código inválido";
            litros = 0;
    }

    console.log("Combustível: " + tipo);
    console.log("Litros abastecidos: " + litros.toFixed(2));
}

calculoDeCombustivel(combustivel, valor);