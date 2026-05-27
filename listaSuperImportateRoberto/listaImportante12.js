const prompt = require("prompt-sync")();

let somaIdadeExcelente = 0;
let contExcelente = 0;

let contRegular = 0;
let contBom = 0;

for (let i = 0; i < 20; i++) {

    let idade = Number(prompt("Digite idade: "));
    let opiniao = Number(prompt("Opinião (3-Excelente, 2-Bom, 1-Regular): "));

    if (opiniao === 3) {
        somaIdadeExcelente += idade;
        contExcelente++;

    } else if (opiniao === 2) {
        contBom++;

    } else if (opiniao === 1) {
        contRegular++;
    }
}

// média das idades do excelente
let mediaExcelente = contExcelente > 0 ? somaIdadeExcelente / contExcelente : 0;

// porcentagem de bom
let percentualBom = (contBom / 20) * 100;

console.log("\nRESULTADOS:");
console.log("Média idade (Excelente): " + mediaExcelente.toFixed(2));
console.log("Quantidade Regular: " + contRegular);
console.log("Percentual Bom: " + percentualBom.toFixed(2) + "%");