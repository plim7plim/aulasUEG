const prompt = require("prompt-sync")();

let x = Number(prompt("Escolha um numero X "));
let n = Number(prompt("Escolha um numero Y "));

function potencia(x, n) {

    let resultado = 1;

    for (let i = 0; i < n; i++) {
        resultado = resultado * x;
        console.log(resultado)
    }

}

potencia(x,n)

//****************************************************** 
