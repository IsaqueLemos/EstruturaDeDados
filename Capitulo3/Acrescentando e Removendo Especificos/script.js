/* Adicionando e Removendo elementos de uma posição específica */
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Start Length:', numbers.length);

// Utilizando o método 'splice'
// splice(indice, quantidade de elementos, ...elementos)

numbers.splice(5, 3); // removerá os elementos numbers[5], numbers[6], numbers[7]
console.log(numbers, 'Current Length:', numbers.length);

numbers.splice(5, 0, 5, 6, 7); // adiciona 5 em numbers[5], 6 em numbers[6] e 7 em numbers[7]
console.log(numbers, 'Current Length:', numbers.length);

numbers.splice(5, 3, 'Isaque', 'Lemos', 'Barbosa') // remove os elementos numbers[5], numbers[6], numbers[7], e adiciona 'Isaque' em numbers[5], 'Lemos' em numbers[6] e 'Barbosa' em numbers[7]
console.log(numbers, 'Current Length:', numbers.length);