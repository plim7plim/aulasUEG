
const prompt = require("prompt-sync")();


/*
function essaAQ1(){
    for (let i = 1000; i < 10000; i++){
        let parte1 = Math.floor(i / 100);
        let parte2 = i % 100;

        let soma = parte1 + parte2;
        let quadrado = soma * soma;

        if (quadrado === i){
            console.log(i);
        }
    }
}

essaAQ1(); 


//################################

function essaAQ2(){
    let n = Number(prompt("Digite um número: "));
    let encontrado = false;

    for (let i = 1; i * (i + 1) * (i + 2) <= n; i++) {
        if (i * (i + 1) * (i + 2) === n) {
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        console.log("Número Triangular");
    } else {
        console.log("Número não Triangular");
    }
}

essaAQ2()
*/
//###########################
function essaAQ3(){
    let n = Number(prompt("Digite um número p utilizarmos na série fibonachi: "));
    let a = 0;
    let b = 1;

      for (let i = 0; i < n; i++){
        console.log(a);
        let proximo = a + b;
        a = b;
        b = proximo;
    }
}


essaAQ3()