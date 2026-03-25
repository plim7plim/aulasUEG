//1. Fazer um algoritmo que leia um número inteiro positivo e mostre umamensagem indicando se este número é par ou ímpar.

const prompt = require("prompt-sync")();


/* let digiteNumero = Number(prompt("Digite um numero pae! "));

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

let salarioo = Number(prompt("Digite seu salário!"));

function reajuste(salarioo){
    if(salarioo < 1412){
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
console.log(newQuebraNumero); */

//############################################################################################################

let eleitor = Number(prompt("qual sua idade?"))

function eleitorUrna (eleitor){
    if(eleitor >17 || eleitor <66){
        console.log("Obrigatório")
    }if(eleitor << 16){
        console.log("Não pode")
    }if(eleitor >15 && eleitor <18 ||eleitor >65 ){
        console.log("Se quiser sim")
    }
}

let boraVotar = eleitorUrna(eleitor);
console.log(boraVotar);