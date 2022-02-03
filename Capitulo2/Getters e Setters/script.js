/* Trabalhando com Getters e Setters */

// Declarando uma classe e incorporando funções get e set;
class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

let p = new Person('Isaque');
console.log(p.name);
p.name = 'José';
console.log(p.name);
p._name = 'Milena';
console.log(p.name);