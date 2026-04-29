const prompt = require("prompt-sync")();


function essaAQ1(){
    let n = Number(prompt("Escolha um numero "));
    for(let i =1; i <= n; i++){
        if (n%i ===0){
            console.log(i)
        }   
    }
}

essaAQ1()


//##################################################
function essaAQ2(){
    let n = Number(prompt("Escolha um numero "));
    let ehPrimo = true;

    if(n <= 1){
        ehPrimo = false;
    }else{
        for (let i = 2; i < n; i++){
            if (n % i === 0){
                ehPrimo = false;
                break;
            }
        }
    }

    if(ehPrimo){
        console.log("É primo");
    }else{
        console.log("Não é primo");
    }
}

essaAQ2();

//################################################################

function essaAQ3(){
   let n = Number(prompt("Escolha um numero "));
   let somar = 0;

    for (let i = 1; i<=n/2; i++){ //acima de 0.5 nenhum é divisor perfeito 
        if (n%i === 0){
        somar += i;
        }

    }
    console.log(somar === n ? "é um número perfeito" : "Não é perfeito");

}

essaAQ3();

//##################################################
function essaAQ4(){
    let n = Number(prompt("Escolha um numero "));   
    let resultado = 1;

    for (let i = n; i > 0; i--){
        resultado *= i;
    }

    console.log(resultado);
}

essaAQ4();

