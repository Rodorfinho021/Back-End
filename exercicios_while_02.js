import inputd from "readline-sync";



let n = 0;
let media = 0;
let cont = 0;
let media_bimestral = 0;

let aluno = inputd.questionInt(`Quantidade de alunos da sala: `)

while (cont < aluno) {


    while (n < 4) {
        let nota = inputd.questionInt(`Nota do bimestre ${n+1}° do aluno ${cont + 1}: `)
        media = media + nota;
        n++;
    }
    
    console.log(`Á media bimestral do aluno é ${media/4}!`);
    media_bimestral = media_bimestral + (media/4);
    media = 0;
    n = 0;
    cont++;
}


console.log(`Á média bimestral dos alunos dala sala é: ${media_bimestral/aluno}!`)