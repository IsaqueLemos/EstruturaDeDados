/* Criando e Inicializando Arrays */

// Formas de declarar, criar e inicializar uma Array.
let daysOfWeek = new Array(); // Declarando e instanciando.
daysOfWeek = new Array(7); // Especificar o tamanho.
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'); // Passando elementos para o construtor.

// Melhor prática é adicionar colchetes vazios [];
let someMonthsOfYear = [];
someMonthsOfYear = ['January', 'December', 'November', 'June', 'October', 'March'];

// Caso queira saber o tamanho de uma array utiliza-se o comando 'length'.
console.log(daysOfWeek);
console.log(daysOfWeek.length);
console.log(someMonthsOfYear);
console.log(someMonthsOfYear.length);
