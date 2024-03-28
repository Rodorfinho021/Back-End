import inputd from "readline-sync";

let n1 = inputd.questionInt("Digite o valor do número 1: ")
let n2 = inputd.questionInt("Digite o valor do número 2: ")
let op = inputd.questionInt("Digite a operação a ser realizada (1-Adição 2-Subtração 3-Multiplicação 4-Divisão): ")

switch (op) {
    case 1:
        console.log(n1 + n2)
        break;
    case 2:
        console.log(n1 - n2)
        break;
    case 3:
        console.log(n1 * n2)
        break;
    case 4:
        console.log(n1 / n2)
        break;
    default:
        break;
}