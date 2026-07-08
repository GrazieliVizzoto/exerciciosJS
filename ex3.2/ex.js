// Função de saudação
const saudacao = (nome) => "Olá, " + nome + "! Bem-vindo ao sistema.";

// Função para verificar se o número é positivo
const ehPositivo = (numero) => numero > 0;

// Função para calcular a área de um retângulo
const calcularArea = (largura, altura) => largura * altura;

// Testes
console.log(saudacao("Grazi"));
console.log(saudacao("João"));

console.log(ehPositivo(10));
console.log(ehPositivo(-5));

console.log(calcularArea(5, 8));
console.log(calcularArea(10, 4));