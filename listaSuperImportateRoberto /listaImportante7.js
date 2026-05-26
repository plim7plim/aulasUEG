const prompt = require("prompt-sync")();
let impar = 0;
let par = 0;

for (let i = 0; i < 5; i++){
     let numero = prompt("Digite numero ");
    if(numero%2===0){
        par ++
    }else{
        impar ++
    }
    

}

console.log("impar " + impar + " par " + par )