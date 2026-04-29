const prompt = require("prompt-sync")();

let salario = Number(prompt("Digite seu salário! "));
let valorPrestacao = Number(prompt("Digite valor da prestação! "));

function calculoEmprestimo(salario, valorPrestacao){
    if(valorPrestacao >= salario * 0.31){
        console.log("Emprestimo negado")
    }else{
        console.log("Emprestimo concedido")
    }
}

calculoEmprestimo(salario,valorPrestacao);