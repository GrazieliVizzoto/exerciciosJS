const produto = {
    nome: "Notebook",
    preco: 4500,
    categoria: "Informática",
    emEstoque: true
};

// Acessando as propriedades
console.log(produto.nome);
console.log(produto.preco);
console.log(produto.categoria);
console.log(produto.emEstoque);

// Alterando o preço
produto.preco = 4000;

// Adicionando a propriedade desconto
produto.desconto = 0.1;

// Calculando o preço final
let precoFinal = produto.preco - (produto.preco * produto.desconto);

// Exibindo o preço final
console.log(`Preço final com desconto: R$ ${precoFinal.toFixed(2)}`);