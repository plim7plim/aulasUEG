const prompt = require("prompt-sync")();

let alunosSala = Number(prompt("Quantos alunos são ao total? "));


function calculoDeSala(alunosSala){
    let salasCheias = Math.floor(alunosSala/35);
    let sobraSala = alunosSala % 35;
    
    if (sobraSala > 0){
        salasCheias ++;
    }else{"Operação inválida!!!!"}
    return salasCheias;
 
}

let chamarAlunos = calculoDeSala(alunosSala);
console.log(chamarAlunos);


//##########################################################################################

let metros = Number(prompt("Quantos metros são? "));

function converter(metros){
    let metrosPraKm = Math.floor(metros / 1000);
    let sobraKm = metros % 1000;

    return {
        km: metrosPraKm,
        metros: sobraKm
    };
}

let saberMetros = converter(metros)
console.log(saberMetros);


//##########################################################################################

let caixas = Number(prompt("Quantas caixas temos? "));

function calcularPallet(caixas){
    let palletsInteiros = Math.floor(caixas / 50);
    let palletQuebrados = caixas % 50;

    if (palletQuebrados > 0){ //se sobrar qualquer caixa a +
        palletsInteiros ++;
    }

    return palletsInteiros;
}

let fazerPallets = calcularPallet(caixas);
console.log(fazerPallets); 

//##########################################################################################

let totalDeAgua = Number(prompt("Quantas L de agua temos? "));

function embalarGarrafas(totalDeAgua){
    let garrafinhas = Math.floor (totalDeAgua /1.5);
    let sobraAgua = totalDeAgua % 1.5;

    return {
        garrafinhas,
        sobraAgua
    }

}

let newGarrafa = embalarGarrafas(totalDeAgua);
console.log(newGarrafa);

//##########################################################################################

let notas = Number(prompt("Qual o valor?"));

function  sacarNotas(notas){
    let notas100 = Math.floor(notas /100);
    let sobra100 = notas % 100;

    let  notas50 = Math.floor(sobra100/50);
    let sobra50 = sobra100 % 50;

    let notas20 = Math.floor(sobra50/20);
    let sobra20 = sobra50 % 20;
    
    let notas10 = Math.floor(sobra20/10);

    console.log("Notas de 100 : " + notas100 + " notas de 50: " + notas50 + " notas de 20 " + notas20 + " notas de 10: " + notas10)

}

let fimSacarNotas = sacarNotas(notas);
console.log(fimSacarNotas);