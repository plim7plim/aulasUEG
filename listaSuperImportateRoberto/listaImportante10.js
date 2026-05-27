const prompt = require("prompt-sync")();



let funcionarios = Number(prompt("Digite numero de funcionarios: "));

for (let i = 0; i < funcionarios; i++) {

    let salario = Number(prompt("Digite salario: "));
    if (salario <= 2259.20){
        console.log(salario)
    }else if (salario > 2259.20 && salario <=2826.65){
        salario = salario * 0.925;
        console.log(salario)
    }else if (salario > 2826.66 && salario <=3751.05){
        salario = salario * 0.85;
        console.log(salario)
    }else if (salario > 3751.05 && salario <=4664.68){
        salario = salario * 0.775;
        console.log(salario)
    }else if (salario > 4664.68 ){
        salario = salario * 0.725;
        console.log(salario)
    }
}
