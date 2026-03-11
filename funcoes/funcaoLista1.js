const prompt = require("prompt-sync")();

//##############################################################
// QUESTÃO 2

let tempo = 27;
let velocidade =  //recebe parametros 

function calcularCustoViagem (tempo, velocidade){ //usa parametros 
    const distancia = tempo * velocidade;
    const quantidadeDelitros = distancia / 12.5;
    const custo = quantidadeDelitros * 6.20;
    return custo;
}

let custoViagem = calcularCustoViagem(tempo,velocidade); //retorna chamando parametros 
console.log(custoViagem);
//##################################################################################

let coeficienteA= 2;
let coeficienteB= 3;
let coeficienteC= 5;

function calcular(coeficienteA, coeficienteB, coeficienteC){
   let delta = coeficienteB ** 2 -4 * coeficienteA * coeficienteC
   return delta;
}
let voltacalculo = calcular(coeficienteA, coeficienteB, coeficienteC);
console.log(voltacalculo);
//##################################################################################