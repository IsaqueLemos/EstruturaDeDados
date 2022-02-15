/* Utilizando outros métodos para Arrays  */

// join
let namesNumbers = ['Isaque', 'Miguel', 'Milena', 4, 'Miguel', 'Alice', 2, 7];
console.log(namesNumbers.join('~..~'));

// indexOf
console.log(namesNumbers.indexOf('Miguel'));
console.log(namesNumbers.indexOf(2));

// lastIndexOf
console.log(namesNumbers.lastIndexOf('Miguel'));

// reverse 
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.reverse());

// sort
let winners = ['João', 'Abel', 'Marcos', 'Danilo', 'Thiago', 'Pedro'];
console.log(winners.sort());
let list = [22, 1, 13, 2];
console.log(list.sort((a, b) => a - b));

// toString
console.log(winners.toString());