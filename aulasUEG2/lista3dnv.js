const prompt = require("prompt-sync")();

function fazer1(){
    let numero = Number(prompt("Escolha um numero "));

    for(let i =1; i <= numero; i++){    //para uma variável I que começa em 1, enquanto I menor ou igual numero adicione +1
        if(numero%i===0){
            console.log(i)
        }
    }
}

fazer1()


//#####################################
