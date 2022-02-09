/* Acessando elementos e fazendo uma iteração em um array */

// Declarando um Array
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'];

// Acessando todos os elementos da Array
for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i]);
}

// Criando a sequência de Fibonacci
const fibonacci = [];
// Atribuindo os dois primeiros valores
fibonacci[0] = 1;
fibonacci[1] = 1;
// Atribuindo mais 18 valores
for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
// Mostrando cada elemento do array
for (let number of fibonacci) {
    console.log(number);
}
// Mostrando o Array
console.log('Fibonacci:', fibonacci);
console.log('Fibonacci items:', fibonacci.length);