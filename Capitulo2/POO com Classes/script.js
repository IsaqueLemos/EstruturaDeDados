/* Programação Orientada a Objetos com Classes */

// Declarando uma classe antes da ES2015 (ES6)
function Book(title, pages, version) {
    this.title = title;
    this.pages = pages;
    this.version = version;
}

Book.prototype.printVersion = function() {
    console.log(this.version);
}

// Com a chegada do ES5 podemos simplificar a sintaxe e usar o código a seguir:
class Book2 {
    constructor(title, pages, version) {
        this.title = title;
        this.pages = pages;
        this.version = version;
    }
    printPages() {
        console.log(this.pages);
    }
}

let book = new Book2('Clean Code', 407, 'Portuguese Version')
book.printPages()