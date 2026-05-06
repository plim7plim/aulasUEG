const prompt = require("prompt-sync")();

/*
let n1 = Number(prompt("Digite um número: "));
let n2 = Number(prompt("Digite um número: "));
function calcularMDC(n1, n2) {
    while (n2 !== 0) {  //enquanto não for = 0
        let resto = n1 % n2; //a gente cria uma variável chamada resto pega n1 e divide por n2 e oq sobrar 
        n1 = n2; // n1 tem o mesmo valor de n2
        n2 = resto; // n2 tem o valor de resto 
    }
    return n1;
}

let mdc = calcularMDC(n1, n2);
console.log("MDC =", mdc); 


//##############################

let n1 = Number(prompt("Digite um número: "));
let n2 = Number(prompt("Digite um número: "));

function sapoha(n1, n2){
    let guardaBloco = 0;
    let sobra;
    let acumulador;
    for(let i = n1; i >= n2; i = i - n2){      
        guardaBloco += 1;
    }
    acumulador = n2 * guardaBloco;
    sobra = n1 - acumulador;

    console.log(guardaBloco);
    console.log(sobra);

}
sapoha(n1,n2)

//##############################
let n1 = Number(prompt("Digite um número: "));

function calculaRaiz(n1){
    let bloco = 0;

    for (let i = 1; n1 > 0; i = i + 2){
        n1 = n1 - i;
        bloco = bloco + 1;
    }

    console.log("Raiz :", bloco);

    if(n1 === 0){
        console.log("Raiz exata");
    } else {
        console.log("Raiz aproximada");
    }
} 

calculaRaiz(n1);*/

//##############################


let n1 = Number(prompt("Digite um número: "));
let n2 = Number(prompt("Digite um número: "));

function cansado(n1,n2){
 while (n2 !== 0) {  //enquanto não for = 0
        let resto = n1 % n2; //a gente cria uma variável chamada resto pega n1 e divide por n2 e oq sobrar 
        n1 = n2; // n1 tem o mesmo valor de n2
        n2 = resto; // n2 tem o valor de resto 
    }
    return n1;

}