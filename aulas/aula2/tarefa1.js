const variavel1 = 4;
const variavel2 = 8;

let soma = variavel1 + variavel2;
console.log(soma);

let subtracao = variavel1 - variavel2;
console.log(subtracao);

let multiplicacao = variavel1 * variavel2;
console.log(multiplicacao);

let divisao = variavel1 / variavel2;
console.log(divisao);

let divisao2 = variavel1 % variavel2;
console.log(divisao2);

let exponenciacao = variavel1 ** variavel2;
console.log (exponenciacao);

let quadrada = variavel1 ** (1/2);
console.log(quadrada);

let cubica = variavel2 ** (1/3);
console.log(cubica);


//exercicio 2

const kmPorLitro = 12.5;
const custoGasolina = 6.20;

const tempoViagem = 5;
const velocidadeMedia = 80;

let distanciaPercorrida =  tempoViagem * velocidadeMedia;
console.log(distanciaPercorrida);

let litros =  distanciaPercorrida / kmPorLitro;
console.log(litros);

let gasto = litros * custoGasolina;
console.log("A distancia percorrida foi: " + distanciaPercorrida + " gastando um total de " + litros + " dando " + gasto + " reais" );


//exercicio 3

const coeficienteA= 2;
const coeficienteB= 3;
const coeficienteC= 5;


const primeiraParte = coeficienteB ** 2 -4 * coeficienteA * coeficienteC
console.log(primeiraParte);