import inputd from "readline-sync";

let array = []

for ( let cont = 0; cont < 2; cont++) {
    let nome = inputd.question(`Digite o nome da pessoa ${cont+1}: `);
    let salario = inputd.questionInt(`Digite o salário da pessoa: `);

    array.push([nome,salario]);
}

for ( let n = 0; n < 2; n++) {
    if (array[n][1] < 2101) {
    
        console.log(`A pessoa de nome ${array[n][0]} com salario de $${array[n][1]}.00 é isento de imposto! `);
    
    }
    
    if (array[n][1] > 2100 && array[n][1] < 2801); {

    console.log(`A pessoa de nome ${array[n][0]} com salario de $${array[n][1]}.00 terá que pagar $${array[n][1]*0.15} de imposto! `);
    }
}


