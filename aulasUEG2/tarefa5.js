const prompt = require("prompt-sync")();

/////////////////////////////////////////////////////////
// QUESTÃO 1

function essaAQ1() {
    let acumulador = 0;
    let posicao = 1;

    for (let denominador = 1; 4 / denominador >= 0.0001; denominador += 2) {

        let termo = 4 / denominador;

        if (posicao % 2 != 0) {
            acumulador = acumulador + termo;
        } else {
            acumulador = acumulador - termo;
        }

        posicao++;
    }

    console.log("Valor aproximado de PI:", acumulador);
}

essaAQ1();

/////////////////////////////////////////////////////////
// QUESTÃO 2

function essaAQ2() {

    let s = 0;
    let denominador = 1;
    let posicao = 1;

    for (let i = 1; i <= 1000; i++) {

        let termo = 1 / (denominador ** 3);

        if (posicao % 2 != 0) {
            s = s + termo;
        } else {
            s = s - termo;
        }

        denominador += 2;
        posicao++;
    }

    let pi = Math.cbrt(32 * s);

    console.log("Valor aproximado de PI:", pi);
}

essaAQ2();

/////////////////////////////////////////////////////////
// QUESTÃO 3

function essaAQ3() {

    let x = Number(prompt("Escolha um numero: "));

    let acumulador = 0;
    let valorReal = Math.exp(x);
    let diferenca = Infinity;

    for (let n = 0; diferenca > 0.0001; n++) {

        let fatorial = 1;

        for (let i = 1; i <= n; i++) {
            fatorial *= i;
        }

        let termo = (x ** n) / fatorial;

        acumulador += termo;

        diferenca = Math.abs(valorReal - acumulador);
    }

    console.log("Valor calculado:", acumulador);
    console.log("Valor real:", valorReal);
}

essaAQ3();

/////////////////////////////////////////////////////////
// FUNÇÕES AUXILIARES

function potencia(x, n) {

    let resultado = 1;

    for (let i = 0; i < n; i++) {
        resultado = resultado * x;
    }

    return resultado;
}

function fatorial(n) {

    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado = resultado * i;
    }

    return resultado;
}

/////////////////////////////////////////////////////////
// QUESTÃO 4 - COSSENO

function cosSerie(x) {

    let soma = 0;

    for (let n = 0; n < 20; n++) {

        let sinal;

        if (n % 2 == 0) {
            sinal = 1;
        } else {
            sinal = -1;
        }

        let termo = sinal * potencia(x, 2 * n) / fatorial(2 * n);

        soma = soma + termo;
    }

    return soma;
}

let xCos = Number(prompt("Digite x para o cosseno (radianos): "));

let cosCalc = cosSerie(xCos);
let cosReal = Math.cos(xCos);
let diferencaCos = cosCalc - cosReal;

console.log("Cosseno calculado:", cosCalc);
console.log("Cosseno real:", cosReal);
console.log("Diferença:", diferencaCos);

/////////////////////////////////////////////////////////
// QUESTÃO 5 - SENO

function senSerie(x) {

    let soma = 0;

    for (let n = 0; n < 20; n++) {

        let sinal;

        if (n % 2 == 0) {
            sinal = 1;
        } else {
            sinal = -1;
        }

        let termo = sinal * potencia(x, 2 * n + 1) / fatorial(2 * n + 1);

        soma = soma + termo;
    }

    return soma;
}

let xSen = Number(prompt("Digite x para o seno (radianos): "));

let senCalc = senSerie(xSen);
let senReal = Math.sin(xSen);
let diferencaSen = senCalc - senReal;

console.log("Seno calculado:", senCalc);
console.log("Seno real:", senReal);
console.log("Diferença:", diferencaSen);