const prompt = require("prompt-sync")();


/*
let planeta = Number(prompt("Qual o planeta? (1 - Jupiter) (2 - Saturno) (3 -Urano ) "));
let peso = Number(prompt("Quanto você pesa na terra? "));

function calculoPlaneta(planeta){
    let gravidade;
    if (planeta ===1 ){
        gravidade = (peso * 2.64)/10
        console.log("Olá estamos em Jupiter e seu peso é de: " + gravidade.toFixed(2)) + " KG.";
    }else if (planeta ==2){
        gravidade = (peso * 1.15)/10
        console.log("Olá estamos em Saturn e seu peso é de: " + gravidade.toFixed(2)) + " KG.";
    }else if (planeta ==3){
        gravidade = (peso * 1.17)/10
        console.log("Olá estamos em Urano e seu peso é de: " + gravidade.toFixed(2)) + " KG.";
    }else{
        console.log("Entrada inválida!")
    }
}

calculoPlaneta(planeta);

//###############################################################################################

let codProduto = Number(prompt("Qual o cod. do produto? "));
let quantProduto = Number(prompt("Qual a quantidade do produto? "));

function mercadinho(codProduto,quantProduto){
    let valUnit;
    if(codProduto == 1 || codProduto ==2){
        valUnit = 15;
    }else if(codProduto == 3|| codProduto == 4 || codProduto == 5){
        valUnit = 25;
    }else if (codProduto == 6|| codProduto ==7){
        valUnit = 40;
    }else if (codProduto == 8 || codProduto == 9){
        valUnit = 50;
    }

    let valorTotal = quantProduto * valUnit;
    let valorDesc;


    if(valorTotal <=350){
        valorDesc = valorTotal * 0.08;
    }else if (valorTotal > 350 && valorTotal <= 650){
        valorDesc = valorTotal * 0.15;
    }else if (valorTotal > 650 && valorTotal <= 950){
        valorDesc = valorTotal * 0.20;
    }else{
        valorDesc = valorTotal * 0.25;
    }

    let valorFinal = valorTotal - valorDesc;

    console.log("Olá! o preco unitário do produto é: " + valUnit + " O preço sem desconto fica: " + valorTotal + " o desconto é de: " + valorDesc + " Ficando : " + valorFinal + " Reais!")

}


mercadinho(codProduto,quantProduto) */
//############################################

let x = Number(prompt("Qual o valor de x? "));
let y = Number(prompt("Qual o valor de y? "));

function cartesiano(x,y){
    if (x==0 && y==0){
        console.log("X e Y estão em 0, o que nos leva ao ponto central")
    }else if(y == 0){
        console.log("Y está em 0")
    }else if (x == 0) {
        console.log("X está em 0")
    }else{
        console.log("Nem X nem Y estão em 0")
    }


}
function quadrante(x,y){
    if (x>0 && y>0  || x>0 && y==0){
        console.log("Primeiro quadrante!")
    }else if (x<0 && y>0 || x<0 && y ==0){
        console.log("Segundo quadrante!")
    }else if (x<0 && y<0|| x==0 && y<0){
        console.log("Terceiro quadrante!")
    }else if (x>0 && y<0 || x ==0 && y>0){
        console.log("Quarto Quadrante!")
    }else if (x ==0 && y == 0){
        console.log("Na raiz")
    }
}
cartesiano(x,y);
quadrante(x,y);