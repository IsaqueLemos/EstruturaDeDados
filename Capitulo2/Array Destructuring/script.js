/* Inicializando variáveis de uma só vez */

// Usando o Destructuring
let [x, y] = ['a', 'b'];
console.log(x, y);
// Alternativa
let xAlt = 'a';
let yAlt = 'b';
console.log(xAlt, yAlt);

// Fazendo SWAP (troca de valores), sem a necessidade de uma variável temp
[x, y] = [y, x]
console.log(x, y);
// Alternativa
var temp = xAlt;
xAlt = yAlt;
yAlt = temp;
console.log(xAlt, yAlt);