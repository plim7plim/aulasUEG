const prompt = require("prompt-sync")();


g = 2;

do {
    g ++;
    console.log(g)

}while(g<10); //exemplinho simples mas funciona enquanto I < 10 vai funfa

//#############################################################################
let i = 0;

while (i < 21) {
    i++; 

    if (i % 2 === 0) {
        console.log(i);
    }
} //somente numero impares 

//#############################################################################

let soma = 0;
let j = 1;

while (j <= 10) {
    soma += j; // soma = soma + i
    j++;
}

console.log(soma);

//#############################################################################
/*
let numeroTabuada = Number(prompt("Escolha um  numero para ser multiplicado de 1 até 10!! "));

let multiplicacao = 1;

while (multiplicacao <= 10){
    
    let calculo = numeroTabuada * multiplicacao;
    console.log(numeroTabuada + " x "+multiplicacao + " = " + calculo)
    multiplicacao ++;
} //dá conta do recado   

let opcao; //uma variavel chamada opcao 

while (opcao != 0) { //enquant opcaoo ser diferente de 0

    

    console.log("\nMENU");
    console.log("1 - Ver mensagem");
    console.log("2 - Somar dois números");
    console.log("3 - Contar de 1 até 5");
    console.log("0 - Sair");

    opcao = Number(prompt("Escolha uma opção: "));


    if(opcao == 1){
        console.log("Hello world!!! ")
    }else if(opcao==2 ){
        let n1 = Number(prompt("Numero 1? "));
        let n2 = Number(prompt("Numero 2? "));
        let resultadooo = n1 + n2;
        console.log(resultadooo);
    }else if (opcao == 3){
        let p = 0

        while (p<=5){
            console.log(p)
             p++;
        }
    }   
    else if (opcao == 0){
        console.log("Saindooooooo")
    }
    else{
        console.log("operação inválida")
    }
}*/

//################################################################
let senha = 1234;
let chuteSenha = Number(prompt("Digite sua senha!! "));

while (senha != chuteSenha) {
    console.log("Senha incorreta! Por favor tente outra vez.");
    chuteSenha = Number(prompt("Digite sua senha!! ")); //volta a repetir 
}

console.log("Acesso liberado!");

//################################################################

for (let i = 1; i <= 30; i++){
    if (i%3 === 0 && i%5 ===0 ) {
        console.log("FizzBuzz")
    }
    else if (i%3 === 0){
        console.log("Fizz")
    }else if (i%5 ===0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}
//################################################################

function calcular() {

    for (let tabuada = 1; tabuada <= 10; tabuada++) {

        for (let multi = 1; multi <= 10; multi++) {

            console.log(tabuada + " x " + multi + " = " + (tabuada * multi));

        }

        console.log("----------"); //executa a do 1 e para 2 e para 3 e para ........
}
}

calcular();





