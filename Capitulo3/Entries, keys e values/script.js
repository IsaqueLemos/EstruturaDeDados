/* Utilizando os métodos entries, keys e values */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// Entries -- retorna índice e valor
let aEntries = numbers.entries(); // retorna um @@iterator com pares chave/valor;
console.log(aEntries.next().value); // retorna [0, 1] - Posição, Valor
console.log(aEntries.next().value); // retorna [1, 2]
for (const n of aEntries) {
    console.log(n);
}

// Keys -- retorna índice
const aKeys = numbers.keys(); // retorna um @@iterator com as chaves do array;
console.log(aKeys.next().value); // retorna 0 - Posição
console.log(aKeys.next().value); // retorna 1 
for (const n of aKeys) {
    console.log(n);
}

// Values -- retorna valor
const aValues = numbers.values(); // retorna um @@iterator com os valores do array;
console.log(aValues.next().value); // retorna 1 - Valor
console.log(aValues.next().value); // retorna 2
for (const n of aValues) {
    console.log(n);
}