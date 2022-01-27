
// OPERADOR ==

console.log('Isaque' ? true : false);

console.log('Isaque' == true); // falso, toNumber('Isaque') é NaN e toNumber(true) é 1, logo NaN != 1

console.log('Isaque' == false); // falso, toNumber('Isaque') é NaN e toNumber(true) é 0, logo NaN != 0

console.log('3' == 3); // verdadeiro, toNumber('3') é 3, logo 3 é === 3

// OPERADOR ===
/* Valores de tipos diferentes será sempre false! */

console.log('Isaque' === true); // falso, tipos diferentes

console.log('Isaque' === 'Isaque'); // verdadeiro, tipo e caracteres idênticos

console.log(3 === '3'); // falso, tipos diferentes

console.log(3 === 3); // verdadeiro, tipo e número idêntico

console.log(true === 'true'); // falso, tipos diferentes

console.log(true === false); // falso, valor diferente

var person1 = {name: 'Isaque'};
var person2 = {name: 'Isaque'};

console.log(person1 === person2); // falso, objetos diferentes, conteúdo não importa. Um é o person1, o outro person2.

let x = person1
let y = person1

console.log(x === y); // verdadeiro, referenciam o mesmo objeto.