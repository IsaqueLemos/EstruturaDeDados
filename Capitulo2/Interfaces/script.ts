/* Conhecendo Interfaces */

// Conceito1: Atribuição de um tipo a uma variável.
interface Person {
    name: string,
    age: number
}

function printName(person: Person) {
    console.log(person.name);
}

// Utilizando a função printName
const milena = {name: 'Milena', age: 17};
const isaque = {name: 'Isaque', age: 18, phone: '8103-1641'};
printName(milena);
printName(isaque);

// Conceito2: utilização com a programação orientada a objetos
interface Comparable {
    compareTo(b): number;
}
class MyObject implements Comparable {
    age: number;
    compareTo(b): number {
        if (this.age === b.age) {
            return 0
        }
        return this.age > b.age ? 1 : -1;
    }
}