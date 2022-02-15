/* Usando os métodos 'map' e 'filter' */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function isEven(item) {
    return item % 2 === 0;
}

// 'map' retorna um array que armazena o resultado da função para cada item
const myMap = numbers.map(isEven);
console.log(myMap);

// 'filter' retorna um array que armazena os itens que devolverem true da função passada
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);