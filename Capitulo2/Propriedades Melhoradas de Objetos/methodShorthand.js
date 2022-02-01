/* Usando Nomes de Métodos Melhorados */

// Declarando com MethodShorthand
const hello = {

    name: 'Isaque',
    printHello() {
        console.log('Hello', this.name);
    }
}
hello.printHello()

// Alternativa 
var hello2 = {
    name: 'Milena',
    printHello2: function printHello2() {
        console.log('Hello', this.name);
    }
}
hello2.printHello2()