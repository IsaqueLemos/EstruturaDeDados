/* Usando os Templates Literais */

// Declarando uma constante
const book = {
    name: 'Learning JavaScript DataStructures and Algorithms'
}
console.log('You are reading ' + book.name + '.,\n and this is a new line\n and so is this.\n');

// Usando a saída com template literal
console.log(`You are reading ${book.name}.,
and this is a new line
and so is this.`);

// Não é necessário o uso de \n basta quebrar a linha com o 'ENTER'