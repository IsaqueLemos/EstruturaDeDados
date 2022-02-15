/* Iterando com o método every */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function isEven(item) {
    console.log(item);
    return item % 2 === 0;
}

// 'every' itera pelos elementos até que a função seja falsa.
numbers.every(isEven);