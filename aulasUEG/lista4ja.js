const prompt = require("prompt-sync")();


let numeroA = prompt("Qual seu Numero? ");
let nota1 = Number(prompt("nota 1? "));
let nota2 = Number(prompt("nota 2? "));
let nota3 = Number(prompt("nota 3? "));
let mediaExercicio = Number(prompt("media dos exercicios? "));

function calculoNota(nota1, nota2, nota3, mediaExercicio){
    let mediaFinal = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicio) / 7;

    let conceito;
    let aprovado;

    if (mediaFinal >= 9){
        conceito = "A";
    }
    else if (mediaFinal >= 7.5){
        conceito = "B";
    }
    else if (mediaFinal >= 6){
        conceito = "C";
    }
    else if (mediaFinal >= 4){
        conceito = "D";
    } 
    else {
        conceito = "E";
    }

    // regra de aprovação
    if (conceito === "A" || conceito === "B" || conceito === "C"){
        aprovado = "Aprovado";
    } else {
        aprovado = "Reprovado";
    }

    return { mediaFinal, conceito, aprovado };
}

let resultado = calculoNota(nota1, nota2, nota3, mediaExercicio);

console.log(
    "Olá aluno nº " + numeroA +
    ", sua média foi: " + resultado.mediaFinal.toFixed(2) +
    ", conceito: " + resultado.conceito +
    ", situação: " + resultado.aprovado
);



//==========================================================================================

let oqCalcular = prompt("O que vamos calcular? (1)Cone (2)Cilindro (3)Esfera? (1,2,3?) ");
let raio = Number(prompt("Raio? "));
let alturaC = Number(prompt("Altura? "));

function calculoObjetos(opcao, raio, alturaC){
    let volume;
    let area;

    switch(opcao){
        case "1": // Cone
            volume = (Math.PI * raio ** 2 * alturaC) / 3;
            area = Math.PI * raio * (raio + Math.sqrt(raio**2 + alturaC **2));
            break;
        case "2": // Cilindro
            volume = Math.PI * raio **2 * alturaC;
            area = 2 * Math.PI * raio * (raio + alturaC);
            break;
        case "3": // Esfera
            volume = (4/3) * Math.PI * raio**3;
            area = 4 * Math.PI * raio **2;
            break;
        default:
            console.log("Operação Inválida.");
            return;
    }

    return {volume, area};
}

let calcularr = calculoObjetos(oqCalcular, raio, alturaC);
console.log(calcularr); 

//==========================================================================================

let pesoo = Number(prompt("Peso (kg)? "));
let alturaCm = Number(prompt("Altura (cm)? "));


let alturaM = alturaCm / 100;

function calculoImc(pesoo, alturaM){
    let imc = pesoo / (alturaM ** 2);

    if (imc > 35){
        console.log("Só desiste mesmo! ");
    }
    else if (imc > 30){
        console.log("Tá roliço");
    }
    else if (imc > 25){
        console.log("Excesso");
    }
    else if (imc > 20){
        console.log("Dentro do peso");
    }
    else{
        console.log("Abaixo do peso ideal");
    }

    return imc;
}

let resultadoo = calculoImc(pesoo, alturaM);
console.log("Seu IMC é:", resultadoo.toFixed(2)); 


//========================================================================================
let quantidadeProduto = Number(prompt("Quantos produtos foram comprados? "));
let valorUnitario = Number(prompt("Qual o valor unitário do produto? ")); 
let corEtiqueta = prompt("Qual a cor (Verde ou Amarelo)? ").trim().toUpperCase();

function calculoProduto(quantidadeProduto, valorUnitario, corEtiqueta) {
    let valorFinal = quantidadeProduto * valorUnitario; // começa com valor total sem desconto

    if (corEtiqueta === "VERDE") {
        if (quantidadeProduto <= 10) {
            valorFinal *= 0.95; // 5% de desconto
        } else {
            valorFinal *= 0.9;  // 10% de desconto
        }
    } else if (corEtiqueta === "AMARELO") {
        if (quantidadeProduto <= 5) {
            valorFinal *= 0.85; // 15% de desconto
        } else if (quantidadeProduto > 10) {
            valorFinal *= 0.8;  // 20% de desconto
        } // 6 a 10 produtos → sem desconto
    } else {
        console.log("Cor inválida! Use Verde ou Amarelo.");
        return null;
    }

    return valorFinal;
}

const valorFinal = calculoProduto(quantidadeProduto, valorUnitario, corEtiqueta);
if (valorFinal !== null) {
    console.log("Valor final a pagar: R$ " + valorFinal.toFixed(2));
};