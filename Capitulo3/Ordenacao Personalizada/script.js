/* Ordenação personalizada com objetos */

const friends = [
    {name: 'Hulk', age: 18},
    {name: 'Loki', age: 21},
    {name: 'Thor', age: 20}
]

friends.sort(compare);
console.log(friends);

function compare(a, b) {
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
    return 0
}