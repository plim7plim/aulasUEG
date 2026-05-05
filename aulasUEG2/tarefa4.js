
const prompt = require("prompt-sync")();


function essaAQ1(){
    for (let i = 1000; i < 10000; i++){ // para uma variavel I que começa em 1000 enquanto for menor que 10000 ++
        let parte1 = Math.floor(i / 100); //50 32 27 por exe 
        let parte2 = i % 100; // oq sobra de i/100
 
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

    for (let i = 1; i * (i + 1) * (i + 2) <= n; i++) { //para uma variável I que começa em 1, enquanto I * (i + 1) * (i + 2) (5,6,7 por ex), I ++ 
        if (i * (i + 1) * (i + 2) === n) { //se um I * (i + 1) * (i + 2) === n a gente acha oq tá procurando 
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

//###########################
function essaAQ3(){
    let n = Number(prompt("Digite um número p utilizarmos na série fibonachi: "));
    let a = 0;
    let b = 1;

      for (let i = 0; i < n; i++){ //para uma variavel I que começa em 0 enquanto I for menor q N, I ++ 
        console.log(a);
        let proximo = a + b;
        a = b;
        b = proximo;
    }
}


essaAQ3()