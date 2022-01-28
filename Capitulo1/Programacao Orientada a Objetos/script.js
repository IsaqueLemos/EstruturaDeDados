/* Programação Orientada a Objetos */

// Formas de criar um objeto
var obj = new Object();
var obj = {};
obj = {
    name: {
        first: 'Isaque',
        last: 'Lemos'
    },
    address: 'Brazil'
}
console.log(obj.name.first);
console.log(obj.address);


// Criando um cronstrutor (Classe) e instânciando ( Atribuindo o objeto construido em uma variável )
function Book(title, pages, version) {
    this.title = title;
    this.pages = pages;
    this.version = version;
}
var book = new Book('1984', 459, 'Second Version');
console.log(book.title);
book.title = 'Revolução dos Bichos'
console.log(book.title);

// Adicionando funções/metódos
Book.prototype.printPages = function () { // com o prototype é decladrado funções/métodos públicos, acessado por qualquer objeto instânciado pela classe construtora mãe;
    console.log(this.pages);
}

function Book2(title, pages, version) {
    this.title = title;
    this.pages = pages;
    this.version = version;
    this.printVersion = function () {
        console.log(this.version);
    }
}

var book2 = new Book2('Margarida', 724, 'Times Square');
var book3 = new Book('Bíblia Sagrada', 1576, 'ARA');
book2.printVersion() // versao do livro, função/método 'private'
book3.printPages() //  paginas no livro, função/método 'public'
book.printPages() // paginas do livro, feito pelo construtor 'Book', logo aceita a função 'printPages'
book2.printPages() // erro, construtor mãe não possui a função 'printPages'