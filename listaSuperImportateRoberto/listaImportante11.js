const prompt = require("prompt-sync")();

let soma1 = 0, cont1 = 0;
let soma2 = 0, cont2 = 0;
let soma3 = 0, cont3 = 0;
let soma4 = 0, cont4 = 0;

for (let i = 0; i < 20; i++) {

    let idade = Number(prompt("Digite idade: "));
    let peso = Number(prompt("Digite peso: "));

    if (idade >= 1 && idade <= 10) {
        soma1 += peso;
        cont1++;

    } else if (idade >= 11 && idade <= 20) {
        soma2 += peso;
        cont2++;

    } else if (idade >= 21 && idade <= 30) {
        soma3 += peso;
        cont3++;

    } else {
        soma4 += peso;
        cont4++;
    }
}

// médias
let media1 = cont1 > 0 ? soma1 / cont1 : 0;
let media2 = cont2 > 0 ? soma2 / cont2 : 0;
let media3 = cont3 > 0 ? soma3 / cont3 : 0;
let media4 = cont4 > 0 ? soma4 / cont4 : 0;

console.log("\nMédias de peso por faixa etária:");
console.log("1 a 10 anos: " + media1.toFixed(2));
console.log("11 a 20 anos: " + media2.toFixed(2));
console.log("21 a 30 anos: " + media3.toFixed(2));
console.log("Mais de 30 anos: " + media4.toFixed(2));