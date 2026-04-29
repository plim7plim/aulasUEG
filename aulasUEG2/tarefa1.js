const prompt = require("prompt-sync")();



function fazIsso (){
    let n = Number(prompt("Escolha um numero "));
    for (let i = 1; i <= n;i++){
        console.log(i) // a gente volta I não N 
    }
}
fazIsso() 

//-------------------------

function fazIsso2 (){
    let n = Number(prompt("Escolha um numero "));
    for (let i = n; i <= 0, i--;){ //enquanto i for > 0 i --
        console.log(i) // a gente volta I não N 
    }
}
fazIsso2()

//-------------------------
function fazIsso3(){
    let n = Number(prompt("Escolha um numero "));
    for (let i = 1; i <= n;i++){
        if (i % 2 === 0){ //se o quociente for 0
        console.log(i) }
    }
}
fazIsso3() 

//--------------------------
function fazIsso4(){
    let n = Number(prompt("Escolha um numero "));
    for (let i = 1; i <= n;i++){
        if (i % 2 > 0){ //se o quociente for maior que 0
        console.log(i) }
    }
}
fazIsso4() 

























