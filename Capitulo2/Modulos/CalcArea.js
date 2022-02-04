// Definindo funções para importação.

const circleArea = r => 3.14 * (r ** 2);
const squareArea = s => s * s;
// export {circleArea, squareArea};

// Pode exportar já definindo nomes para as funções
export {circleArea as circle, squareArea as sqaure}

// tambem pode exportar com a 'export' no ínicio da função ou variavel;
// export const pi = 3.14;
// export const person = 'Isaque'