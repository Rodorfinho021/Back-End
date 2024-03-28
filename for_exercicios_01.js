import inputd from "readline-sync";

array = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765];

let cont = 0;
for (let elementos of array)  {
    console.log(`O número ${cont} da sequencia de fibo é ${elementos}`)
}