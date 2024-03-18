import inputd from "readline-sync";

let array = []

console.log("Nome e salários: ");
for ( let cont = 0; cont < 2; cont++) {
    let nome = inputd.question(`Digite o nome da pessoa ${cont+1}: `);
    let salario = inputd.questionInt(`Digite o salário da pessoa: `);

    array.push([nome,salario]);
}

console.log("\nImposto:");

for ( let n = 0; n < 2; n++) {
    if (array[n][1] <= 2100) {
    console.log(`A pessoa de nome ${array[n][0]} com salario de $${array[n][1]}.00 é isento de imposto! `);
} else if (array[n][1] > 2100 && array[n][1] <= 2800) {
    console.log(`A pessoa de nome ${array[n][0]} com salario de $${array[n][1]}.00 terá que pagar $${array[n][1]*0.075} de imposto! `);
} else if (array[n][1] > 2800 && array[n][1] <= 3750) {
    console.log(`A pessoa de nome ${array[n][0]} com salario de $${array[n][1]}.00 terá que pagar $${array[n][1]*0.15} de imposto! `);
} else if (array[n][1] > 3750 && array[n][1] <= 4660) {
    console.log(`A pessoa de nome ${array[n][0]} com salario de $${array[n][1]}.00 terá que pagar $${array[n][1]*0.225} de imposto! `);
} else if (array[n][1] > 4660 ) {
    console.log(`A pessoa de nome ${array[n][0]} com salario de $${array[n][1]}.00 terá que pagar $${array[n][1]*0.275} de imposto! `);
    }
};