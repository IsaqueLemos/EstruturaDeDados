/* Entendendo o conceito de Genérico (Generic) */

// Definindo o tipo que o método compareTo deve receber como argumento. Utilizando o técnica de tipo genérico.
interface Comparable<T> {
    compareTo(b: T): number;
}
class MyObject implements Comparable<MyObject> {
    age: number;
    compareTo(b: MyObject): number {
        if (this.age === b.age) {
            return 0
        }
        return this.age > b.age ? 1 : -1;
    }
}
