// Selecionando os elementos
const caixa = document.getElementById("caixa");
const alerta = document.getElementById("alerta");
const card = document.getElementById("card");

// Adicionando as classes
caixa.classList.add("destaque");
alerta.classList.add("oculto");
card.classList.add("erro");

// Verificando se as classes foram aplicadas
console.log("Caixa tem destaque?", caixa.classList.contains("destaque"));
console.log("Alerta está oculto?", alerta.classList.contains("oculto"));
console.log("Card tem erro?", card.classList.contains("erro"));