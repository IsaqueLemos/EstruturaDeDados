/* Utilizando o método FILL */

let numbersCopy = Array.of(1,2,3,4,5,6);
numbersCopy.fill(0);
console.log(numbersCopy); // todos as posições terá valor 0
numbersCopy.fill(2, 1);
console.log(numbersCopy); // completará todas as posíções a partir da posição 1 com o número 2
numbersCopy.fill(1, 3, 5)
console.log(numbersCopy); // completará todas as posições entre a posição 3 e 5 (não incluído) com o número 1

let ones = new Array(6).fill(1);
console.log(ones);