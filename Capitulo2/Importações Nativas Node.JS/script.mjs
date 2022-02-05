/* Utilizando Módulos */

/* importando de um arquivo externo. */
// import { circleArea, squareArea} from './CalcArea';
// console.log(circleArea(2));
// console.log(squareArea(2));

/* Outra maneira de importar */
// import { circleArea } from './CalcArea';

/*  Outra forma */
// import { circleArea as circle } from './CalcArea';

// import com nomes alterados no módulo
// import { circle, square } from './CalcArea';

/* Formas diferentes de importar funções */
import * as area from './CalcArea.mjs';
console.log(area.circle(2));
console.log(area.square(2));

import Book from './Book.mjs';
const myBook = new Book('1984');
myBook.printTitle();

// Executar da seguinte forma: node --experimental-modules script.mjs