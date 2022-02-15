/* Utilizando o método reduce */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function isEven(item) {
    console.log(item);
    return item % 2 === 0;
}

numbersStr = numbers.map(item => item.toString())


console.log(
    numbers.reduce((previous, current) => 0 + previous + current, 40)
);

console.log(
    numbersStr.reduce((previous, current) => {
        return previous + current;
    }, 'Valor inicial ')
);
