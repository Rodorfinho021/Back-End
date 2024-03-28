import inputd from "readline-sync";

let dia = inputd.questionInt("Digite o dia da semana (1 á 7)")


switch (dia) {
    case 1:
        console.log("Segunda-Feira")
        break;
    case 2:
        console.log("Terça-Feira")
        break;
    case 3:
        console.log("Quarta-Feira")
        break;
    case 4:
        console.log("Quinta-Feira")
        break;
    case 5:
        console.log("Sexta-Feira-Feira")
        break;
    case 6:
        console.log("Sábado")
        break;
    case 7:
        console.log("Domingo")
        break;
    default:
        console.log("Número inválido")
        break;
}
