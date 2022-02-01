/* Usando Operador de Espelhamento (...) e Rest */

let sum = (x, y, z) => x + y + z;
let params = [2, 4, 6];
// Usando o operador de espelhamento para trazer os valores da array como parametros da função
console.log(sum(...params));
// Código relativo no ES5
console.log(sum.apply(undefined, params));

/* O operador de espelhamento (...), também pode ser usado como um parâmetro
rest em funções para substituir argumentos */
function restParameterFunction(x, y, ...a) {
    return (x + y) * a.length;
}
console.log(restParameterFunction(1, 2, 'hello', true, 7));

// Código anterior igual ao a seguir
function restParameterFunction2(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
}
console.log(restParameterFunction2(1, 2, 'hello', true, 7));