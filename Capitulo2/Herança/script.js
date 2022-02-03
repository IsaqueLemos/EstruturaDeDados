/* Trabalhando com herança entre classes */

// Declarando uma classe
class Book {
    constructor(title, pages, version) {
        this.title = title;
        this.pages = pages;
        this.version = version;
    }
}

// Declarando (Estender) uma classe herdando propriedades (comportamento) de outra classe usando 'extends'
class ITBook extends Book {

    constructor(title, pages, version , technology) {
        super(title, pages, version); // Referenciar o construtor da superclasse utilizando 'super'
        this.technology = technology;
    }

    printTechnology() {
        console.log(this.technology);
    }
}

// Declarando um objeto
let jsBook = new ITBook('Learning JS Algorithms', '200', 'Second Version', 'JavaScript')
console.log(jsBook.title);
jsBook.printTechnology()