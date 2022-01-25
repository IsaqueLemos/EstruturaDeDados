var num = 0;

// Operadores Aritméticos
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;

// Operadores de Atribuição
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

// Operadores de Comparação ou Relacionais
console.log('Número:', num);
console.log('num == 1:', num == 1);
console.log('num === 1:', num === 1);
console.log('num != 1:', num != 1);
console.log('num > 1:', num > 1);
console.log('num < 1:', num < 1);
console.log('num >= 1:', num >= 1);
console.log('num <= 1:', num <= 1, '\n');

// Operadores Lógicos
console.log('true && true:', true && true);
console.log('true || false:', true || false);
console.log('!true:', !true, '\n');

// Operadores Bit a Bit ou Bitwise
console.log('5 & 1:', 5 & 1); // 'e' 
console.log('5 | 1:', 5 | 1); // 'ou'
console.log('~5:', ~5); // 'negação'
console.log('5 ^ 1:', 5 ^ 1); // 'ou' exclusivo
console.log('5 << 1:', 5 << 1); // deslocamento para esquerda
console.log('5 >> 1:', 5 >> 1, '\n'); // deslocamento para direita

// Operador typeof 'Retorna o tipo do dado'
console.log('typeof num:', typeof num);
console.log('typeof Isaque:', typeof 'Isaque');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1,2,3]);
console.log("typeof {name:'Milena'}:", typeof {name: 'Mielena'}, '\n');

// Operador delete 'Deleta uma propriedade de um objeto'
var myObj = {name: 'Cristiana', age: 41}
delete myObj.age;
console.log(myObj);