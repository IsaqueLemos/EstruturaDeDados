/* Uso das Funções */

// Sintaxe Básica
function sayHello() {
    console.log('Hello!');
}
sayHello();

// Passando Argumentos
function output(text) {
    console.log(text);
}
output('Hello!');
output('Arg1', 'Arg2'); // Nesse caso, apenas o primeiro será usado pela função; o segundo será ignorado.

// Retornando Valores
function sum(num1, num2) {
    return num1 + num2
}
var result = sum(2, 3);
output(result)