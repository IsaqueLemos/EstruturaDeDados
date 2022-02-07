/* Verificando a inferência de tipo */

// Declarando variável e especificando o tipo
let age: number = 20;
let existsFlag: boolean = true;
let language: string = 'JavaScript';

// O código anterior é verboso, o typescript verifica e aplica automaticamente o tipo da variavel 
let age1 = 20; // number
let existsFlag2 = true // boolean
let language2 = 'JavaScript' // string

// É recomendável atribuir um tipo à uma váriavel quando ela é declarada e não inicializada:
let favoriteLanguage: string;
let langs = ['JavaScript', 'Ruby', 'Python'];
favoriteLanguage = langs[0];

// Se não especificássemos o tipo a variável seria tipada como 'any'