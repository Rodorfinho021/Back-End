import inputd from "readline-sync";


console.log("Você deverá escrever seu nome e caso ele contenha 3 ou mais vogais, você será o ganhador!");

let nome = inputd.question("Escreve seu nome: ");

let vogais = ['a','e','i','o','u'];

let q_v = 0; 
for (let element of nome) {
    if (vogais.includes(element)){
        q_v++;
    };
};

if (q_v >= 3) {
    console.log("Você ganhou!\nSeu nome contém " + q_v + " vogais!");
} else {
    console.log("Você perdeu! Seu nome não contém vogais! ");
};
