/* Utilizando a Abreviação de Propriedades */

// Declarando um obj com PropertyShorthand
let [x, y] = ['a', 'b'];
let obj = {x, y};
console.log(obj);

// Alternativa
var a = 'x';
var b = 'y';
var obj2 = {a: a, b: b};
console.log(obj2);