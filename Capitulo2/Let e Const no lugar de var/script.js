// Declarando variáveis com var
var framework = 'Angular';
var framework = 'React';
console.log(framework);

// Declarando variáveis com let
let language = 'JavaScript!';
let language = 'Ruby!'; // erro, variável já foi declarada. Com o let, variáveis com o mesmo nome não podem ser declaradas, evitando dessa forma erros.
language = 'Ruby!' // permitido, reatribuição e não declaração.
console.log(language);

// Declarando variáveis com const
const PI = 3.141593;
PI = 3.0; // erro, constantes não permitem reatribuição. O valor de uma constante é utilizado somente para leitura. 
console.log(PI); 

// Declarando um objeto como const
const jsFramework = {
    name: 'Angular'
}
jsFramework.name = 'React'; // para objetos, constantes permitem atualizar os valores das propriedades

// Forma que não funcionaria
jsFramework = {
    name: 'Vue' // assim estamos reatribuindo a constante em si, como se estivesse recebendo outro objeto, o que não é permitido
}
