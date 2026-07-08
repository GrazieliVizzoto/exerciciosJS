function criarPersonagem(nome, classe, nivel) {
    return {
        nome: nome,
        classe: classe,
        nivel: nivel,
        hp: nivel * 10,

        apresentar() {
            console.log(`${this.nome} é um(a) ${this.classe} nível ${this.nivel} com ${this.hp} HP`);
        }
    };
}

// Criando personagens
const personagem1 = criarPersonagem("Aria", "Maga", 8);
const personagem2 = criarPersonagem("Leon", "Guerreiro", 12);

// Chamando o método apresentar()
personagem1.apresentar();
personagem2.apresentar();