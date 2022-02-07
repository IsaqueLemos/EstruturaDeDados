/* Conhecendo Interfaces */
function printName(person) {
    console.log(person.name);
}
// Utilizando a função printName
var milena = { name: 'Milena', age: 17 };
var isaque = { name: 'Isaque', age: 18, phone: '8103-1641' };
printName(milena);
printName(isaque);
var MyObject = /** @class */ (function () {
    function MyObject() {
    }
    MyObject.prototype.compareTo = function (b) {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    };
    return MyObject;
}());
