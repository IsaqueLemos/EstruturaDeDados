/* Removendo Elementos do Array */
let numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(numbers.length);

/* Removendo um elemento do final do array */
// Utilização do método 'pop'
numbers.pop();
console.log(numbers, 'Length:', numbers.length);

/* Removendo elemento da primeira posição */
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1];
}
console.log(numbers, 'Length:', numbers.length); // Entretando o tamanho da array continua 17;

// Criando nova array sem o elemento undefined
Array.prototype.reIndex = array => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] != undefined) {
            newArray.push(array[i])
        } 
    }
    return newArray;
}

// Juntando a estrutura de repetição que remove o elemento com a função reIndex e criando uma nova função;
Array.prototype.removeFirstPosition = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    return this.reIndex(this);
}
numbers = numbers.removeFirstPosition();
console.log(numbers, 'Length:', numbers.length);