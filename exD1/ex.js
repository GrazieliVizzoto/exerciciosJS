// Constantes: Valores que não mudam (o nome e a classe inicial do personagem)
const nome = "Grate";
const classe = "guerreira";

// Let: Valores que vão mudar conforme o jogo avança (subir de nível, levar dano, trocar de arma)
let nivel = 5;
let pontosDeVida = 84;
let estaVivo = true;
let armaEquipada = "Machado de Batalha";

// Operador ternário para transformar o booleano 'estaVivo' no texto "Vivo" ou "Morto"
const status = estaVivo ? "Vivo" : "Morto";

// Imprimindo a apresentação usando Template Literal (com a crase `)
console.log(`${nome} é uma ${classe} nível ${nivel} com ${pontosDeVida} HP. Arma: ${armaEquipada}. Status: ${status}`);
