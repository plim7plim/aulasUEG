const prompt = require("prompt-sync")();

let salarioMinmo = Number(prompt("Qual o salario minimo? "));
let quilowwat = Number(prompt("Quantos killowats foram consumidos? "));

function calculaEnergia(salarioMinmo, quilowwat){
    let umkillowat = salarioMinmo * 0.2;
    let calculoKillowat = umkillowat * quilowwat;
    let desconto = calculoKillowat * 0.85;

    let retornoEnergia = console.log("Valor do quilowatt  R$" + umkillowat.toFixed(2))
        console.log("Valor a ser pago pelo consumidor: R$" + calculoKillowat.toFixed(2))
        console.log("Valor com 15% de desconto: R$" + desconto.toFixed(2))

    return retornoEnergia;
   
   
}

let saberEnergia = calculaEnergia(salarioMinmo,quilowwat); 
console.log(saberEnergia) 
    

//####################################################################################

let nomePessoa = prompt("Qual o seu nome? ");
let peso = Number(prompt("Qual o seu peso? "));

function calcularPeso(nomePessoa, peso){
    let pesoJupiter = (peso * 2.64) / 9.87;

    let retorno = (nomePessoa + " seu peso em Júpiter é de: " + pesoJupiter.toFixed(4));

    return{retorno}
  
}

let fazerCalculo = calcularPeso(nomePessoa, peso);
console.log(fazerCalculo);

//####################################################################################

let diaSemAcidente = Number(prompt("A quantos dias estamos sem acidentes? "));

function calculoDias(diaSemAcidente){
    let anoSemAcidente = Math.floor(diaSemAcidente /365);
    let sobraAno = diaSemAcidente % 365;

    let meseSemAcidente = Math.floor(sobraAno/30);
    let sobraMes = sobraAno % 30;

    let diass = sobraMes;

    console.log (anoSemAcidente + " anos")
    console.log (meseSemAcidente + " meses")
    console.log( diass + " dias")    
}

let calcularOsdias = calculoDias(diaSemAcidente);
console.log(calcularOsdias)