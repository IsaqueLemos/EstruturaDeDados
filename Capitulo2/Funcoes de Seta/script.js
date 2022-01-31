/* Funções de Seta com a chegada do ECMAScript 2015/ES2015/ES6 */

// Forma anterior ao ES6 de declarar e atribuir uma função à uma váriavel ou propriedade.
var circleAreaES5 = function (r) {
    let PI = 3.14;
    let area = PI * Math.pow(r, 2); // r elevado ao quadrado
    return area;
}
console.log(circleAreaES5(4));

// Forma simplificada 
const circleArea = r => {
    const PI = 3.14;
    const area = PI * Math.pow(r, 2);
    return area
}
console.log(circleArea(4));

/* Se a função tiver apenas uma instrução, podemos usar uma versão mais simples, omitindo 
a palavra reservada RETURN e as chaves. */
const circleArea2 = r => 3.14 * Math.pow(r, 2);
console.log(circleArea2(4));

// Funções que não recebem argumentos
const hello = () => console.log('Hello');
hello()

// Funções que recebem mais de um argumentos
const sum = (n1, n2) => n1 + n2;
console.log(sum(30, 20));
