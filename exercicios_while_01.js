import inputd, { questionInt } from "readline-sync";


let tabuad = questionInt("Escolha o número da tabuada: ");

for (let cont = 0; cont <=10; cont++) {
    console.log(`${tabuad} * ${cont} = ${cont * tabuad}`)
}