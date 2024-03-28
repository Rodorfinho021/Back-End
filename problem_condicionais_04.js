import inputd from "readline-sync";

let ben = inputd.question("Digito a categoria: ")

let salario = inputd.questionFloat("Digite o sálario atual: ")

switch (ben) {
    case "A":
        console.log((salario * 0.05) + salario)
        break;
    case "B":
        console.log((salario * 0.1) + salario)
        break;
    case "C":
        console.log((salario * 0.15) + salario)
        break;
    case "D":
        console.log((salario * 0.2) + salario)
        break;
    default:
        break;
}