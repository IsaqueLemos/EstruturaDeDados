/* Utilizando o método includes */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// O método includes retorna true ou false se o valor está contido dentro do array
console.log(numbers.includes(14)); // retorna true

// Ainda pode ser utilizado um segundo argumento que trará a partir de qual posição o elemento deve ser buscado
console.log(numbers.includes(1, 5)); // retorna false