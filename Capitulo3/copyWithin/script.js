/* Utilizando o método copyWithin */

let copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(0, 3); // copia os elementos da posição 3-5 para a posição 0-2
console.log(copyArray); 
copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(1, 3, 5); // copia os elementos da posição 3:4 para a posição 1:2
console.log(copyArray);