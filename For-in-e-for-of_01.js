/*Escreva um programa que itere sobre as propriedades
de um objeto e imprima suas chaves e valores. */


import inputd from "readline-sync";

let objeto = {
    nome: "Rodolfo",
    idade: 16,
    escola: "IFRO Vilhena",
    professor: "Douglas"
};

objeto.nome = inputd.question("Digite seu nome: ");
objeto.idade =  inputd.questionInt("Digite sua idade: ");
objeto.escola = inputd.question("Digite o nome da sua escola: ");
objeto.professor = inputd.question("Digite o nome do seu professor: ");

console.log("\n");

console.log("Nome: " + objeto.nome);
console.log("Idade: " + objeto.idade + " anos");
console.log("Escola: " + objeto.escola);
console.log("Professor: " + objeto.professor);
