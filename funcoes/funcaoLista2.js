const prompt = require("prompt-sync")();

//#################################################################################################
let tempo = Number(prompt("quanto tempo de viagem? "));
let velocidade = Number(prompt("qual velocidade media de viagem? ")); //recebe parametros 

function calcularCustoViagem (tempo, velocidade){ //usa parametros 
    const distancia = tempo * velocidade;
    const quantidadeDelitros = distancia / 12.5;
    const custo = quantidadeDelitros * 6.20;
    return custo;
}

let custoViagem = calcularCustoViagem(tempo,velocidade); //retorna chamando parametros 
console.log(custoViagem);
//#################################################################################################

let coeficienteA2 = Number(prompt("coeficiente A? "));
let coeficienteB2= Number(prompt("coeficiente B? "));
let coeficienteC2= Number(prompt("coeficiente C? "));

function calcular2 (coeficienteA2, coeficienteB2, coeficienteC2){
     let delta2 = coeficienteB2 ** 2 -4 * coeficienteA2 * coeficienteC2
   return delta2;
}

let voltacalculo2 = calcular2(coeficienteA2, coeficienteB2, coeficienteC2);
console.log(voltacalculo2);

//#################################################################################################

let nota11 = Number(prompt("nota 1?"));
let nota22 = Number(prompt("nota 2?"));
let nota33 = Number(prompt("nota 3?"));

function notaFinal (nota11, nota22, nota33){
    let calculoNotaFinal = (nota11 * 2 + nota22 * 3 + nota33 * 5) / 10;
    return calculoNotaFinal;
}

let resultadoNotaFinal = notaFinal (nota11, nota22, nota33);
console.log(resultadoNotaFinal);