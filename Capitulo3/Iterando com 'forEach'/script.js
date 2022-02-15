/* Iterando com o método forEach */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// 'forEach' faz a iteração em todo o array;
numbers.forEach(item => console.log(item, 'é divisível por 2?', item % 2 === 0));