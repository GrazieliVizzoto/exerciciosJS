function verificarSituacao(nota) {
    if (nota >= 9) {
        console.log("Nota:", nota, "- Excelente");
    } else if (nota >= 7) {
        console.log("Nota:", nota, "- Aprovado");
    } else if (nota >= 5) {
        console.log("Nota:", nota, "- Recuperação");
    } else {
        console.log("Nota:", nota, "- Reprovado");
    }
}

verificarSituacao(9.5); 
verificarSituacao(8);   
verificarSituacao(6);   
verificarSituacao(3);   