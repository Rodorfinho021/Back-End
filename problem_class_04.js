class Veiculo {
    marca;
    modelo;
    ano;

    exebirDetalhes () {
        return `O veiculo é da marca ${this.marca} do modelo ${this.modelo} do ano ${this.ano} `
    }
}

const Carro = new Veiculo()
Carro.marca = "Toyota";
Carro.modelo = "Corolla";
Carro.ano  = 2022;

console.log(Carro.exebirDetalhes())

const Motocicleta = new Veiculo();
Motocicleta.marca = "Honda";
Motocicleta.modelo = "CBR 600RR";
Motocicleta.ano = 2021;

console.log(Motocicleta.exebirDetalhes())