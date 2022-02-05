const area = require('./lib/CalcArea');
const Book = require('./lib/Book');
console.log(area.circle(2));
console.log(area.square(2));
const myBook = new Book('Novo Amanhã');
myBook.printTitle();