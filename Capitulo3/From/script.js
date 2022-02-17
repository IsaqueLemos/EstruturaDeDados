/* Utilizando o método from */
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// Array.from cria outro array a partir de um array existente
let numbers2 = Array.from(numbers);
console.log(numbers2);
// Passando uma função que mapea os valores;
let evens = Array.from(numbers, x => x % 2 == 0)
console.log(evens);