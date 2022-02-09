/* Acrescentando Elementos */
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

/* Inserindo elemento no final do array */
numbers[numbers.length] = 10; // numero 10 adicionado no final da Array
console.log(numbers);

/* Utilizando o método push */
numbers.push(11);
numbers.push(12, 13); // Pode acrescentar quantos elementos quisermos como argumentos do método push
console.log(numbers);