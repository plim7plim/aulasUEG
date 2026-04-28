const prompt = require("prompt-sync")();

let maria= Number(prompt("Digite nota Maria "));
let jose= Number(prompt("Digite nota jose "));
let godofredo= Number(prompt("Godofredo "));


function calculoNota(maria,jose,godofredo){
    let maior;
    if(jose> maria){
        maior = console.log("Jose");
    }else if(godofredo >maria){
        maior = console.log("Godofredo")
    }else{
        maior = console.log("Maria");
    }

}
calculoNota(maria,jose,godofredo);