const prompt = require("prompt-sync")();



function fazIssoo(){
    let n = Number(prompt("Escolha um numero "));
    acumulador = 0 ; //armazena o valor de alguma coisa 
    for (let i=1; i <= n; i++){
        console.log(i);
        acumulador = acumulador +i;
    }
    console.log(acumulador)
}
fazIssoo() 
//####################################################

function fazIssoo2(){
    let n = Number(prompt("Escolha um numero "));
    acumulador = 1 ; //já tem que começar em 1 se não vai dar 0
    for (let i=1; i <= n; i++){
        console.log(i);
        acumulador = acumulador * i;
    }
    console.log(acumulador)
}
fazIssoo2() 

//###################################################

function calcular() {
    let n = Number(prompt("Escolha um numero "));
        for (let multi = 1; multi <= 10; multi++) { //esse que multiplica 1 2 3 4 5 6 7 8 9 10
            console.log(n + " x " + multi + " = " + (n * multi));
        }  
}
calcular();


//####################################################
let = Number(prompt("Escolha um angulo "));