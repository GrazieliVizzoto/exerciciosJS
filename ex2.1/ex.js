function verificarParOuImpar(numero) {
    // Se o resto da divisão por 2 for 0, o número é par
    if (numero % 2 === 0) {
        console.log(`${numero} é par`);
    } 
    else 
    {
        console.log(`${numero} é ímpar`);
    }
}

// Teste 1: Um número ímpar
let numero1 = 7;
verificarParOuImpar(numero1);

// Teste 2: Um número par
let numero2 = 4;
verificarParOuImpar(numero2); 

// Teste 3: Outro número (exemplo: zero ou um número grande)
let numero3 = 102;
verificarParOuImpar(numero3); 