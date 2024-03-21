import inputd from "readline-sync";

let numero = inputd.question("Digite um número: ");

numero % 2 == 0 ? console.log("Numero é par") : console.log("O número é ímpar!");
