/* Estruturas Condicionais: If-Else e Switch-Case */

// Usando apenas IF
var num = 1;
if (num === 1) {
    console.log('Num is equal to 1');
}

// Usando IF e ELSE
var person = 'Isaque'
if ( person === 'João') {
    console.log('Your name is João');
} else {
    console.log('Your name is not João, your name is', person);
}

// Usando o Operador Ternário ( CONDIÇÃO ? INSTRUÇÃO PARA TRUE : INSTRUÇÃO PARA FALSE )
var number = 1;
console.log( number ? 'TRUE' : 'FALSE' );

// Usando IF - ELSE IF - ELSE
var month = 5;
if (month === 1) {
    console.log('January');
} else if (month === 2) {
    console.log('February');
} else if (month === 3) {
    console.log('March');
} else {
    console.log('Month is not January, February or March');
}

// Usando SWITCH - CASE 
month = 2
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('Month is not January, February or March');
}