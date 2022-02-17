/* Utilizando o método Array.of */
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8]

// Cria um array a partir dos argumentos passados.
let numbers1 = Array.of(1);
let numbers2 = Array.of(1, 2, 3, 4, 5);

// Igual
let numbers3 = [1];
let numbers4 = [1, 2, 3, 4, 5];

// Usando o operador de espelhamento
let numbersCopy = Array.of(...numbers);
console.log(numbersCopy);
