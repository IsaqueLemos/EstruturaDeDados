/* Iterando com o laço for...of */

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

for (const n of numbers) {
    console.log(n, n % 2 === 0 ? 'even' : 'odd');
}

// Função semelhante ao forEach.