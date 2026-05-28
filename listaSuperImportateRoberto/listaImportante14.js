const prompt = require("prompt-sync")();

let qtsProdutos = Number(prompt("Digite quantos produtos serão inseridos: "));

let lucroBaixo = 0;
let lucroMedio = 0;
let lucroAlto = 0;

let totalCompra = 0;
let totalVenda = 0;
let lucroTotal = 0;

for (let i = 0; i < qtsProdutos; i++) {

    let nomeProduto = prompt("Digite o nome do produto: ");
    let precoCompra = Number(prompt("Digite o preco de compra: "));
    let precoVenda = Number(prompt("Digite o preco de venda: "));

    let lucro = precoVenda - precoCompra;

    let percentual = (lucro / precoCompra) * 100;

    // Verifica faixa de lucro
    if (percentual < 10) {
        lucroBaixo++;

    } else if (percentual <= 20) {
        lucroMedio++;

    } else {
        lucroAlto++;
    }


    totalCompra += precoCompra;
    totalVenda += precoVenda;
    lucroTotal += lucro;
}

console.log("Lucro abaixo de 10%:", lucroBaixo);
console.log("Lucro entre 10% e 20%:", lucroMedio);
console.log("Lucro acima de 20%:", lucroAlto);

console.log("Total de compras:", totalCompra);
console.log("Total de vendas:", totalVenda);
console.log("Lucro total:", lucroTotal);