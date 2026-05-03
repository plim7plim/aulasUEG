const prompt = require("prompt-sync")();

function essaAQ1() {
  let acumulador = 0; // guarda a soma da série
  let posicao = 1; // controla se soma (+) ou subtrai (-)

  for (let denominador = 1; 4 / denominador >= 0.0001; denominador += 2) {
    let termo = 4 / denominador;

    if (posicao % 2 != 0) {
      acumulador = acumulador + termo;
    } else {
      acumulador = acumulador - termo;
    } //decide se soma ou subtrai

    posicao++;
  }

  console.log(acumulador);
}

essaAQ1();
/////////////////////////////////////////////////////////

function essaAQ2() {
  let s = 0;
  let denominador = 1;
  let posicao = 1;

  for (let i = 1; i <= 1000; i++) {
    let termo = 1 / denominador ** 3;

    if (posicao % 2 != 0) {
      s = s + termo;
    } else {
      s = s - termo;
    }

    denominador += 2;
    posicao++;
  }

  let pi = Math.cbrt(32 * s);
  console.log(pi);
}

essaAQ2();

/////////////////////////////////////////////////////////

function essaAQ3() {
  let x = Number(prompt("Escolha um numero "));
  let termo = 0;
  let acumulador = 0;
  let valorReal = Math.exp(x);
  let diferenca = Infinity;

  for (let n = 0; diferenca > 0.0001; n++) {
    let fatorial = 1;

    for (let i = 1; i <= n; i++) {
      fatorial *= i;
    }

    termo = (x ** n) / fatorial;

    acumulador += termo;

    diferenca = Math.abs(valorReal - acumulador);
  }

  console.log(acumulador);
}

/////////////////////////////////////////////////////////

// potência
function potencia(x, n) {
    let resultado = 1;
    for (let i = 0; i < n; i++) {
        resultado = resultado * x;
    }
    return resultado;
}

// fatorial
function fatorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado = resultado * i;
    }
    return resultado;
}

// série do cosseno (20 termos)
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

// PROGRAMA PRINCIPAL
let x = Number(prompt("Digite x (em radianos):"));

let cosCalc = cosSerie(x);
let cosReal = Math.cos(x);
let diferenca = cosCalc - cosReal;

// saída
console.log("Cosseno calculado:", cosCalc);
console.log("Cosseno real:", cosReal);
console.log("Diferença:", diferenca);

/////////////////////////////////////////////////////////

// potência
function potencia(x, n) {
    let resultado = 1;
    for (let i = 0; i < n; i++) {
        resultado = resultado * x;
    }
    return resultado;
}

// fatorial
function fatorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado = resultado * i;
    }
    return resultado;
}

// série do seno (20 termos)
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

// PROGRAMA PRINCIPAL
let x = Number(prompt("Digite x (em radianos):"));

let senCalc = senSerie(x);
let senReal = Math.sin(x);
let diferenca = senCalc - senReal;

// saída
console.log("Seno calculado:", senCalc);
console.log("Seno real:", senReal);
console.log("Diferença:", diferenca);