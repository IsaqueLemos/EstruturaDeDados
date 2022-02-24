/* ECMAScript2015 - os métodos find e findIndex */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// os métodos find e findIndex tem um callback como argumento.
function multipleOf13(element, index, array) {
    return (element % 13 == 0);
}

// find: devolve o primeiro elemento que satisfaça a condição
console.log(numbers.find(multipleOf13));

// findIndex: devolve o index do primerio elemento que satisfaça a condição
console.log(numbers.findIndex(multipleOf13));

// Caso valor não seja encontrado, undefined será devolvido