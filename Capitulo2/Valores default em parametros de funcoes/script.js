/* Valores default para parâmetros de funções */
// Possível com a chegada da versão 6 do ECMAScript

// Definindo valores default
function sum(x = 1, y = 2, z = 3) {
    return x + y + z
}
console.log(sum(4, 2)); // Exibe 9, pois foram alterados os valores de x e y
console.log(sum()); // Exibe 6, valores padrões.

// Versão alternativa antes da ES6
function sum2(x, y, z) {
    if (x === undefined) x = 1;
    if (y === undefined) y = 2;
    if (z === undefined) z = 3;
    return x + y + z;
}
console.log(sum2());

// Outra versão alternativa
function sum3(x, y, z) {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1; // usando operador ternário para atribuir o valor à variável.
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    return x + y + z;
}
console.log(sum3());

/* As funções JavaScript tem um Objeto embutido "arguments". Este objeto é uma array dos 
argumentos usados quando função é chamada */