/* Acrescentando Elementos */
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

/* Inserindo um elemento no final do array */
numbers[numbers.length] = 10; // numero 10 adicionado no final da Array
console.log(numbers);

/* Utilizando o método push */
numbers.push(11);
numbers.push(12, 13); // Pode acrescentar quantos elementos quisermos como argumentos do método push
console.log(numbers);

/* Inserindo um elemento na primeira posição */
// Criando uma função que desloca cada elemento e insere um novo na primeira posição
Array.prototype.insertFirstPosition = function(value) { // OBS: Arrow Functions não se dão bem com 'this'
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
}
numbers.insertFirstPosition(-1);
console.log(numbers);

/* Utilizando o método unshift */
numbers.unshift(-2);
numbers.unshift(-4, -3);
console.log(numbers);