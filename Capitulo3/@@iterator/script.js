/* Usando o objeto @@iterator */

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let iterator = numbers[Symbol.iterator](); // adicionando o objeto iterador à uma variável

/* Utilizando o iterator */

console.log(iterator.next().value);
console.log(iterator.next().value);