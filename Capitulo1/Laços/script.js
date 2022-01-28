/* Estruturas de Repetição: For e While e Do-While */

// FOR
for (let i = 0; i < 10; i++) { // recebe um valor ; compara ; incrementa/decrementa
    console.log('Number', i);
}

console.log('\n');

// WHILE, Condição é avaliada antes da execução do bloco de código.
let i = 1
while (i <= 10) {
    console.log('Grade', i);
    i++;
}

console.log('\n');

// DO - WHILE, Condição é avaliada depois de o bloco de código ter sido executado.
i = 0
do {
    console.log('Position', i);
    i++;
} while (i < 10);