/* Arrays em TypeScript */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// equivale à const numbers: number[];


interface Person {
    name: string;
    age: number;
}

const friends: {name: string, age: number}[] = [
    {name: 'John', age: 32},
    {name: 'Mary', age: 25},
    {name: 'Peter', age: 28}
];

function comparePerson(a: Person, b: Person) {
    // conteúdo da função
}