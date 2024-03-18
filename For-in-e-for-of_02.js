import inputd from "readline-sync";

let array = [];
let array_sorteados = [];

console.log("Digite 5 números de 1 a 20 e caso um deles seja sorteado você será ganhador do desafio! Seráo 5 números sorteados ");

for (let n = 0; n < 5; n++) {
    let number = inputd.questionInt(`Digite o ${n+1}° número: `);
    array.push(number);
};

let n = 0;
while (n < 5) {
    let numero_sorteado = Math.round(Math.random() * 20);
    if (array_sorteados.includes(numero_sorteado)) {
    continue 
};

    array_sorteados.push(numero_sorteado);
    n++;
};

for (let element of array_sorteados) {
    if (array.includes(element)) {
        console.log("Parabens você acetou o número sorteado: " + element )
    }
};


for (let cont = 0; cont < array_sorteados.length; cont++) {
    if (cont === 0) {
        process.stdout.write("Os números sorteados foram: ")
    };
    process.stdout.write(`${array_sorteados[cont]} `)
};
