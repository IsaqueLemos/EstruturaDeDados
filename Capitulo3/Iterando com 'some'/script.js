/* Iterando com o método some */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function isEven(item) {
    console.log(item);
    return item % 2 === 0;
}

// 'some' itera pelos elementos do array até que a função devolva true;
numbers.some(isEven);