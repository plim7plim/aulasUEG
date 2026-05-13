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

calculaRaiz(n1);

//##############################


let n1 = Number(prompt("Digite um número: "));
let n2 = Number(prompt("Digite um número: "));

function cansado(n1, n2){

    let valor1 = n1;
    let valor2 = n2;

    while (n2 !== 0) { //enquanto for diferente de 0 
        let resto = n1 % n2; 
        n1 = n2;
        n2 = resto; //divide, pega o resto, troca os valores, repete, quando chega em 0 o valor em N1 é o mdc 
    }

    // aqui n1 virou o MDC
    let mmc = (valor1 * valor2) / n1; //n1=mdc -> mmc = n1*n2/mdc 

    console.log("MMC =", mmc);
}

cansado(n1, n2);

//##############################

let numero = Number(prompt("Digite um número:"));

let original = numero;
let invertido = 0;

while (numero > 0) { //enquanto o numero ainda existir

    let resto = numero % 10; // a gente cria uma variável chamada resto que divide numero por 10 (dividir por 10 remove o ultimo N 123 12,3 por ex)
 
    invertido = invertido * 10 + resto; //reordena os N 

    numero = parseInt(numero / 10); //retira o ultimo digito do N 
}

if (original == invertido) {
    console.log("É capicua");
} else {
    console.log("Não é capicua");
}

//##################################
let numero = 1;

while (numero <= 9) {

    console.log("Tabuada do " + numero);

    let soma = 1;

    while (soma <= 10) {

        let calculo = numero + soma;

        console.log(numero + " + " + soma + " = " + calculo);

        soma++; // da direita 
    }

    console.log("----------------");

    numero++; // numero ++ pra passar pra próx assim que chegar a 9, assim quando 1 chegar a 1+9 passa pra 2+1 
}*/
//##################################
for (let numero = 1; numero <= 1000; numero++) { //pra uma variavel q começa em 1 enquanto for menor q 100 ++

    let soma = 0;

    // procura divisores
    for (let i = 1; i < numero; i++) { //enquanto I for menor q N; I ++

        if (numero % i === 0) {
            soma += i; //soma os divisores ex 6 1+2+3
        }

    }

    // verifica se é perfeito
    if (soma === numero) {
        console.log(numero);
    }

}
