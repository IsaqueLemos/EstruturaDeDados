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
import * as area from './CalcArea';
console.log(area.circle(2));
console.log(area.sqaure(2));

import Book from './Book';
const myBook = new Book('1984');
myBook.printTitle();