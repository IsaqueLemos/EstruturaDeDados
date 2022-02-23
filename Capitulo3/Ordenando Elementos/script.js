/* Ordenando elementos */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// Invertendo os valores
numbers.reverse();
console.log(numbers);

// Ordenando os valores
numbers.sort();
console.log(numbers); 

// Ordenando os valores corretamente
numbers.sort((a, b) => a - b)
console.log(numbers);