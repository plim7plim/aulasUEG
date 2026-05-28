const prompt = require("prompt-sync")();

let maior = 0;
let etiquetaMaior = 0;

let menor = 0;
let etiquetaMenor = 0;

let media = 0;

for (let i = 1; i <= 19000; i++) {

    let etiqueta = Number(prompt("Numero da etiqueta: "));
    let peso = Number(prompt("Peso: "));

    media += peso;

    //eu atribui menor no primeiro boi, assim eu posso conmparar com outros ao inves de deixar ele no 0, pois não existe boi que pese menos que 0
    if (i == 1) {
        menor = peso;
        etiquetaMenor = etiqueta;
    }


    if (peso > maior) {
        maior = peso;
        etiquetaMaior = etiqueta;
    } //maior boi

    
    if (peso < menor) {
        menor = peso;
        etiquetaMenor = etiqueta;
    } //menor boi
}

let mediaFinal = media / 19000;

console.log("Maior peso:", maior);
console.log("Etiqueta do maior:", etiquetaMaior);

console.log("Menor peso:", menor);
console.log("Etiqueta do menor:", etiquetaMenor);

console.log("Media:", mediaFinal);