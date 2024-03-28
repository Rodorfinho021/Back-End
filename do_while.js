import inputd from "readline-sync";

let numero_sorte = Math.round(Math.random() * 100);

console.log(numero_sorte)

let numero_usuario = 0;

while (numero_usuario !== numero_sorte) {
    numero_usuario = inputd.questionInt(`Tente a advinhar o número da sorte: `);

    if (numero_usuario > numero_sorte) {
        console.log(`O número digitado é maior do que o sorteado! `)
    } else if (numero_usuario < numero_sorte) {
        console.log(`Ó número digitado é menor do qua o sorteado! `)
    }
};

console.log(`Parabéns você acertou o número sorteado, o número sorteado era ${numero_sorte}!`);
