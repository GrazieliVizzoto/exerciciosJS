const frutas = ["Maçã", "Banana", "Laranja"];

// 1. Adiciona "Uva" ao final
frutas.push("Uva");
console.log(frutas);

// 2. Adiciona "Morango" ao início
frutas.unshift("Morango");
console.log(frutas);

// 3. Remove o último item
frutas.pop();
console.log(frutas);

// 4. Remove o primeiro item
frutas.shift();
console.log(frutas);

// 5. Imprime o tamanho final
console.log("Tamanho final:", frutas.length);