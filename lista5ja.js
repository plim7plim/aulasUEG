const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Digite um numero pae! "));
let numero2 = Number(prompt("Digite um de novo numero pae! "));

let operacaoo = prompt("Digite a operação a ser feita!( + - / *) ");

function calculadora (numero1, numero2,operacaoo){
    let newNumero = null;
    if (operacaoo == "+"){
       newNumero = numero1 + numero2;
        console.log("Seu número é: " + newNumero);
    }else if (operacaoo == "-"){
        newNumero = numero1 - numero2;
        console.log("Seu número é: " + newNumero);
    }else if (operacaoo == "/"){
        newNumero = numero1 / numero2;
        console.log("Seu número é: " + newNumero);
    }else{
        newNumero = numero1 * numero2;
         console.log("Seu número é: " + newNumero);
    }
    return newNumero;
}

let chamarCalculado = calculadora(numero1, numero2, operacaoo);
console.log(chamarCalculado); // ja tinha feito :) 

//==========================================================================================

let A1 = Number(prompt("Lado A?  "));
let B2 = Number(prompt("Lado B? "));
let C3 = Number(prompt("Lado C? "));

function saberTriangulo(A1,B2,C3){
    if(A1**2 === B2**2 + C3**2){
        console.log("É um triângulo retangulo")
    }else if (A1**2 > B2**2 + C3**2){
        console.log("É um triângulo Obtusângulo")
    }else if (A1**2 < B2**2 + C3 **2){
        console.log("É um octuângulo!")
    }else{
        console.log("Neh nada!")
    } 
}

saberTriangulo(A1,B2,C3);


//==========================================================================================

let numero = prompt("Digite um número de 5 dígitos:"); //assim eles assumem String 

function verificarPalindromo(numero) {
    if (numero.length !== 5) {
        console.log("Digite exatamente 5 dígitos!");
        return;
    }

    let invertido = numero.split('').reverse().join(''); // isso aqui economiza muito tempo viu split vira array, reverse inverte, join volta pra string 

    if (numero === invertido) {
        console.log("É palíndromo");
    } else {
        console.log("Não é palíndromo");
    }
}

verificarPalindromo(numero);

//==========================================================================================

let bairro = prompt("Digite seu bairro:").trim().toUpperCase();
let telefone = prompt("Digite seu telefone (8 dígitos):").trim();

let prefixo = telefone.substring(0, 4);

if (bairro === "OESTE") {
    if (prefixo === "3223" || prefixo === "3225" || prefixo === "3212") {
        console.log("Telefone válido");
    } else {
        console.log("Telefone inválido para o bairro Oeste");
    }

} else if (bairro === "CENTRO") {
    if (prefixo === "3223" || prefixo === "3224" || prefixo === "3212") {
        console.log("Telefone válido");
    } else {
        console.log("Telefone inválido para o bairro Centro");
    }

} else if (bairro === "SUL") {
    if (prefixo === "3241" || prefixo === "3242" || prefixo === "3243" || prefixo === "3281") {
        console.log("Telefone válido");
    } else {
        console.log("Telefone inválido para o bairro Sul");
    }

} else if (bairro === "BUENO") {
    if (prefixo === "3251" || prefixo === "3285") {
        console.log("Telefone válido");
    } else {
        console.log("Telefone inválido para o bairro Bueno");
    }

} else if (bairro === "CAMPINAS") {
    if (prefixo === "3233" || prefixo === "3291") {
        console.log("Telefone válido");
    } else {
        console.log("Telefone inválido para o bairro Campinas");
    }

} else {
    console.log("Bairro inválido");
}