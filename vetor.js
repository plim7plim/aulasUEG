const prompt = require("prompt-sync")();


/*
let vetor = [10,9,8,7,6] 
const array2= ["Maca", "Pera", "Banan", "Uva"]

console.log(vetor[1]);

array2[2] = "abacate"; //troquei banan por abacate 

array2.push("limão"); //adicion um item no FINAL do array 

array2.unshift("mamão"); //adiciona um item no COMEÇO


array2.pop();//remove o ultimo item no array 


console.log(array2);



const arrayRoberto = ["R", "o", "b", "e", "r", "t", "o"];

console.log(arrayRoberto); */

//===================================================================


const array = [1,2,3,4,5,6,7,8,9,10]
let str1 = "Array = | ";
for(let pos1= 0; pos1 < array.length; pos1++){ //enquanto for menor que o array pos1 percorre +1 até chegar no indice 
    str1 += array[pos1] + " | ";
    console.log(str1); //mostra 1 por 1

}

const array2 = [1,2,3,4,5,6,7,8,9,10]
let str2 = "Array = | ";
for(const elementinho of array2){
    str2 += elementinho + " | ";
}
console.log(str2) // de fora ele so mostra o print final 