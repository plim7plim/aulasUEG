const prompt = require("prompt-sync")();

for (let  i = 0; i <=20; i++){
    let numeros = Number(prompt("Digite um número: ")); 

    if (numeros % 2 === 0 ){
        console.log("Par")
    }else{console.log("Impar")}
}