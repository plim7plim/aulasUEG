const prompt = require("prompt-sync")();    

let idade = Number(prompt("1,2,3 ou 4? "));

function calculoGota(idade){
    let tipo = "";
    let dosagemMg = 0;
    let ml = 0;
    let gotas = 0;

    if (idade == 1) {
        tipo = "Bebê";
        dosagemMg = 600;
    }

    else if (idade == 2){
        tipo = "adolescente";
        dosagemMg = 1600;
    }

    else if (idade == 3){
        tipo = "Adulto";
        dosagemMg = 4600;
    }

    else if (idade == 4){
        tipo = "Idoso";
        dosagemMg = 2450;
    }

    ml = dosagemMg / 400;
    gotas = ml * 14;

    console.log("Receita médica");
    console.log("Paciente: " + tipo);
    console.log("Dosagem em mg: " + dosagemMg + " mg");
    console.log("Dosagem em ml: " + ml.toFixed(2) + " ml");
    console.log("Quantidade de gotas: " + gotas.toFixed(2));
}

calculoGota(idade);


//##############################

let tipoConsumidor = prompt("Residencial, Comercial ou Industrial ? (R/C/I) ").toUpperCase(); //eu subo elas pra maiusculas, assim sempre vai funcionar se for minuscula ou maiuscula
let conta = Number(prompt("Qual numero da sua conta? "));
let m3 = Number(prompt("Quantos metros cubicos de agua? "));


function calculoAgua(tipoConsumidor,conta, m3){
    let taxaDoAmor = 0; 
    let gastoFinal = 0;
    if (tipoConsumidor == "R") {
        taxaDoAmor = 5;
        gastoFinal = m3*0.55 + taxaDoAmor;
    }
    else if (tipoConsumidor == "C"){
        taxaDoAmor = 150;
        gastoFinal = m3 * 1.25 + taxaDoAmor;
    }
    else if (tipoConsumidor == "I"){
        taxaDoAmor = 280;
        gastoFinal = m3 * 2.54 + taxaDoAmor;
    }

    console.log("Ola, sua conta n " + conta + " gastou um total de "  + m3 +" metros cubicos, dando um total de " + gastoFinal.toFixed(2) + " reais");

}

calculoAgua(tipoConsumidor,conta,m3)

//##################

let tipoFilme = prompt("O filme é lançamento? (S/N) ").toUpperCase();
let diaSemana = Number(prompt("Qual numero do dia semana (1,2,3,4,5,6,7)? "));
let valorFilme = Number(prompt("Qual valor do filme? "));

function temDesconto(diaSemana){
    let desconto = 0;

    if (diaSemana == 2 || diaSemana == 3 || diaSemana == 5){
        desconto = 0.4;
    }

    else if (diaSemana == 1 || diaSemana == 4 || diaSemana == 6 || diaSemana == 7){
        desconto = 0;
    }

    return desconto;
}

function calcularFilme(tipoFilme, valorFilme, diaSemana){
    let desconto = temDesconto(diaSemana); //chamando uma funcao na funcao, coisa de cabaço
    let valorFinal = valorFilme;

    // aplica desconto do dia
    valorFinal = valorFinal - (valorFinal * desconto);

    // aplica acréscimo se for lançamento
    if (tipoFilme == "S"){
        valorFinal = valorFinal * 1.15;
    }

    else if (tipoFilme == "N"){
        valorFinal = valorFinal;
    }

    console.log("Valor final do aluguel: R$ " + valorFinal.toFixed(2));
}

calcularFilme(tipoFilme, valorFilme, diaSemana);

//##################
let nome = prompt("Qual seu nome? ");
let tipoPulverizacao = Number(prompt("Qual tipo de pulverização? (1,2,3,4)? "));
let acres = Number(prompt("Quantos acres? "));

function precoFim(nome, tipoPulverizacao, acres) {
    let precoPorAcre = 0;
    let precoFinal = 0;
    let excedente = 0;
    let descontoExcedente = 0;

    
     if (tipoPulverizacao == 1) {
        precoPorAcre = 50;
    }

    else if (tipoPulverizacao == 2) {
        precoPorAcre = 100;
    }

    else if (tipoPulverizacao == 3) {
        precoPorAcre = 150;
    }

    else if (tipoPulverizacao == 4) {
        precoPorAcre = 250;
    }
    precoFinal = precoPorAcre * acres;

    if (acres > 350) {
        precoFinal = precoFinal * 0.95;
    }

    if (precoFinal > 10750) { //se for maior q 10750 excedente = preco final -10750 e calculamos o desconto 
        excedente = precoFinal - 10750;
        descontoExcedente = excedente * 0.10;
        precoFinal = precoFinal - descontoExcedente;
    }

    console.log("Fazendeiro: " + nome);
    console.log("Valor a pagar: R$ " + precoFinal.toFixed(2));
}

precoFim(nome, tipoPulverizacao, acres);


//#####################################


// aqui funciona o conceito de dividir pra somar, similar a QUICKSORT do livro entendendo algoritmos, onde eu escolho um como ''maior'' e comparo até achar o maior de vdd

let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));
let n3 = Number(prompt("Digite o terceiro número: "));
let n4 = Number(prompt("Digite o quarto número: "));

function somaTresMenores(n1, n2, n3, n4) {
    let maior = n1;

    if (n2 > maior) {
        maior = n2;
    }

    else if (n3 > maior) {
        maior = n3;
    }

    else if (n4 > maior) {
        maior = n4;
    }

    let soma = n1 + n2 + n3 + n4 - maior;

    console.log("A soma dos três menores é: " + soma);
}

somaTresMenores(n1, n2, n3, n4);