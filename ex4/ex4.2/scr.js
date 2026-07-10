// Seleciona os elementos
const titulo = document.querySelector("#titulo");
const subtitulo = document.querySelector("#subtitulo");
const caixa = document.querySelector("#caixa");

// Altera o texto do h1
titulo.textContent = "JavaScript no DOM!";

// Altera o subtítulo para seu nome
subtitulo.textContent = "Grazi"; // ou coloque seu nome completo

// Altera o conteúdo da div usando HTML
caixa.innerHTML = "<strong>Conteúdo alterado</strong>";