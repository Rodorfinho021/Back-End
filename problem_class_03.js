class Imovel {
    quartos;
    tipo;
    endereco;
    exebirInformacoes() {
        return (`${this.tipo} contém ${this.quartos} quartos na ${this.endereco}`)}
    }


const Casa = new Imovel()
Casa.quartos = 4;
Casa.tipo = "Casa";
Casa.endereco = "Rua da Amizade, 789 - Bairro Alegre";

console.log(` Problema da casa: ${Casa.exebirInformacoes()}`);

const Apartamento = new Imovel;
Apartamento.quartos = 2;
Apartamento.tipo = "Apartamento";
Apartamento.endereco = ("Avenida da Paz, 123 - Centro");

console.log(` Problema do apartamento : ${Apartamento.exebirInformacoes()}`);