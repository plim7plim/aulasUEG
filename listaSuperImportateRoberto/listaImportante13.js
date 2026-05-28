const prompt = require("prompt-sync")();

for (let i = 0; i < 20; i++) {

    let x = Number(prompt("Digite o valor de X: "));
    let y = Number(prompt("Digite o valor de Y: "));

    
    if (Math.abs(x) + Math.abs(y) <= 15) { // Verifica se está dentro do losango
        console.log("INTERIOR");
    } else {
        console.log("EXTERIOR");
    }
}