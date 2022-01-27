function testTruthy(val) {
    return val ? console.log('Truthy') : console.log('Falsy');
}

testTruthy(true); // true
testTruthy(false); // false
testTruthy(new Boolean(false)); // true (objeto sempre é true)
testTruthy(''); // false (string vazia é false)
testTruthy('Isaque'); // true (string não vazia)
testTruthy(new String('')); // true (objeto sempre é true)
testTruthy(1); // true
testTruthy(-1); // true
testTruthy(NaN); // false (+0, -0 e NaN é falso para valores numéricos
testTruthy(new Number(NaN)); // true (objeto sempre é true)
testTruthy({}); // true (objeto sempre é true)

var obj = {name: 'Isaque'};
testTruthy(obj); // true
testTruthy(obj.name); // true 
testTruthy(obj.age); // false (propriedade não existe)