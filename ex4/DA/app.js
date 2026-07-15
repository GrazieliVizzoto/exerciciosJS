const personagens = [
  { nome: "Aragorn", classe: "Guerreiro", nivel: 15 },
  { nome: "Gandalf", classe: "Mago", nivel: 20 },
  { nome: "Legolas", classe: "Arqueiro", nivel: 12 },
  { nome: "Gimli", classe: "Bárbaro", nivel: 14 }
];

const container = document.getElementById("container");

personagens.forEach(personagem => {
  const card = document.createElement("div");

  card.innerHTML = `
    <h2>${personagem.nome}</h2>
    <p>Classe: ${personagem.classe}</p>
    <p>Nível: ${personagem.nivel}</p>
    <p>HP: ${personagem.nivel * 10}</p>
  `;

  container.appendChild(card);
});