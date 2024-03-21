import inputd from "readline-sync";

let idade = inputd.question("Digite uma idade: ");

idade > 18 ? console.log("A pessoa é maior idade") : console.log("A pessoa é menor idade!")
