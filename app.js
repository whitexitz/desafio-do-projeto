// Desafio 4: Contagem Progressiva Personalizada
console.log("--- Desafio 4: Contagem Progressiva Personalizada ---");
// Solicita um número ao usuário para ser o limite da contagem
let numeroFinalProgressivo = parseInt(prompt("Digite um número para ser o limite da contagem progressiva (começando do 0):"));
let contadorProgressivo = 0; // O contador começa em 0

// Verifica se a entrada do usuário é um número válido e não negativo
if (!isNaN(numeroFinalProgressivo) && numeroFinalProgressivo >= 0) {
    console.log(`Iniciando contagem progressiva de 0 até ${numeroFinalProgressivo}:`);
    // O loop continua enquanto o contador for menor ou igual ao número final
    while (contadorProgressivo <= numeroFinalProgressivo) {
        console.log(contadorProgressivo); // Exibe o número atual
        contadorProgressivo++;           // Incrementa o contador
    }
    console.log("Contagem progressiva concluída!");
} else {
    console.log("Entrada inválida. Por favor, digite um número positivo ou zero para a contagem progressiva.");
}
console.log("------------------------------------");