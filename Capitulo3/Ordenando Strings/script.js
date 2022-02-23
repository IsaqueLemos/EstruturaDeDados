/* Ordenando Strings */
let names = ['Isaque', 'isaque', 'Milena', 'milena'];
console.log(names.sort());

// Resultado ['Isaque', 'Milena', 'isaque', 'Milena'];
// ASCII letras maiúsculas aparecem primeiro na tabela, consultar http://www.asciitable.com

// Consertando resultado
names = ['Milena', 'milena', 'Isaque', 'isaque'];
console.log(names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0
}));

// Utilizando o método LocaleCompare
const names2 = ['Jaime', 'jaime', 'arthur', 'Arthur'];
console.log(names2.sort((a, b) => a.localeCompare(b)));

const names3 = ['Mádson', 'Madson'];
console.log(names3.sort((a, b) => a.localeCompare(b)));