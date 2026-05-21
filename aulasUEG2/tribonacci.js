let a = 0;

let b = 1;

let c = 1;

console.log(a);

console.log(b);

console.log(c);

for (let i = 0; i < 7; i++) { //vai printar 10 termos; 3 + quantidade dentro do loop 

    let proximo = a + b + c;

    console.log(proximo);

    a = b;

    b = c;

    c = proximo;

}
 
