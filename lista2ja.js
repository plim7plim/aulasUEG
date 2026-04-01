const prompt = require("prompt-sync")();

let digiteNumero = Number(prompt("Digite um numero pae! "));

function calculoPerfeito (digiteNumero){
    let raizNumero = Math.sqrt(digiteNumero); //aq pega raiz quadrada 

    if (Number.isInteger(raizNumero)) { //SE UM NUMERO É INTEIRO ()
        console.log("é quadrado pft")
    }else{console.log("não é")};
}
let newCalculopft = calculoPerfeito(digiteNumero);
console.log(newCalculopft);


//##################################################

let precoFabrica = Number(prompt("Preco de fábrica do carroo "));
let ar = prompt("Quer ar? (S/N) ");
let pintura = prompt("Pintura metálica? (S/N) ");
let vidro = prompt("Vidro Elétrico? (S/N) ");
let direcao = prompt("Direção Hidráulica? (S/N) ");

function calculoCompleto(ar,pintura,vidro, direcao){
    let precoFinal = precoFabrica;
    if(ar == "S" ){
        precoFinal = precoFabrica + 1750;
    }else if (pintura == "S"){
        precoFinal = precoFabrica + 800;
    }else if (vidro == "S"){
        precoFinal = precoFabrica + 1200;
    }else if (direcao == "S"){
        precoFinal = precoFabrica + 2000;
    }
    console.log(precoFinal.toFixed(2));
}
//switch n funfa 
let newPrecoFinal = calculoCompleto(ar,pintura,vidro, direcao);
console.log(newPrecoFinal);


//##################################################

let a = Number(prompt("valor A "));
let b = Number(prompt("valor B "));
let c = Number(prompt("valor C ")); 
// UM TRIANGULO SO EXISTE SE A SOMA DOS DOIS LADOS FOR MAIOR QUE UM LADO 
function verificaTriangulo(a, b, c) {
    if (a >= b + c || b >= a + c || c >= a + b) {
        return "Não forma triângulo";
    }else{console.log("Válido")}

    if (a === b && b === c) { //consequentemente A é igual a C
        return "Equilátero";
    } else if (a === b || a === c || b === c) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
} //OK 

let newTriangulo = verificaTriangulo(a, b, c);
console.log(newTriangulo);


//##################################################

let quantosDinheiros = Number(prompt("Quantos reais você tem? "));
let opcao = Number(prompt("Qual a opção? "));

function conversao(quantosDinheiros){
    switch(opcao){
        case 1 :
        let euro = quantosDinheiros / 5.418
        console.log("A opção selecionada foi Euro; seus " + quantosDinheiros + " viraram: " +euro.toFixed(2));
        break;
        case 2 :
        let libra = quantosDinheiros / 6.336 
        console.log("A opção selecionada foi libras; seus " + quantosDinheiros + " viraram: " +libra.toFixed(2));
        break;
        case 3 :
        let dolar = quantosDinheiros / 5.189
        console.log("A opção selecionada foi dolar; seus " + quantosDinheiros + " viraram: " +dolar.toFixed(2));
        break;
        default: 
         console.log("operacao inválida")
    
    }
}

conversao(quantosDinheiros, opcao);

//##################################################



let altura = Number(prompt("Qual sua Altura? "));
let sexo = prompt("Qual seu sexo? (H/M)");

function calculoPesoIdeal(altura,sexo){
    if (sexo == "H"){
        let pesoHome =  72.7 * altura - 58;
        console.log("Peso ideal: " + pesoHome.toFixed(2));
    } else if (sexo == "M"){
        let pesoMuie =  62.1 * altura - 44.7;
        console.log("Peso ideal: " + pesoMuie.toFixed(2));
    }else{
        console.log("Entrada inválida!")
    }
}
calculoPesoIdeal(altura,sexo);
// n precisa, tres valores exatos 