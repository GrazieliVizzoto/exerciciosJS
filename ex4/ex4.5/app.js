// Selecionando a lista
const lista = document.getElementById("lista");

// Linguagens estudadas
const linguagens = ["HTML", "CSS", "JavaScript", "C#"];

// Criando e adicionando os itens
for (let linguagem of linguagens) {
  const item = document.createElement("li");
  item.textContent = linguagem;
  lista.appendChild(item);
}