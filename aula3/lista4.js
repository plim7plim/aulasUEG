const prompt = require("prompt-sync")();

let vazao = Number(prompt("Qual a vazão? "));
let diametro = Number(prompt("Qual o diametro? "));
let rugosidade = Number(prompt("Qual a rugosidade? ")); 

let perdaCarga = (vazao ** 1.85) * 10.643 * ((diametro ** 4.87) * (rugosidade ** -1.85));

console.log(perdaCarga)

//######################################################################################################################################


let publicoTotal =  Number(prompt("Qual o público total do jogo? "));

let popular = (publicoTotal * 0.1) * 5;
let geral = (publicoTotal * 0.5) * 10;
let arquibancada = (publicoTotal * 0.3) * 20;
let cadeiras = (publicoTotal * 0.1) * 40;

let valorArrecadado = popular + geral + arquibancada + cadeiras;

console.log(valorArrecadado);

//######################################################################################################################################    

const custoLatinha = 155.0

