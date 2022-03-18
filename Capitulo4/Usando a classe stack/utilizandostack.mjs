/* Utilizando a classe Stack */
import Stack from "../stack-array.mjs";

// Declarando uma nova pilha
const stack = new Stack();

// Verificando se está vazia
console.log('pilha está vazia?', stack.isEmpty() ? 'sim' : 'nao');

// Adicionando elementos na pilha
stack.push(5)
stack.push(8)

// Retornando o valor do ultimo elemento adicionado a pilha
console.log(stack.peek());

// Adicionando outro elemento e verificando o size da pilha
stack.push(11)
console.log('tamanho da pilha', stack.size())
console.log('pilha está vazia?', stack.isEmpty() ? 'sim' : 'nao');

// Adicionando um último elemento
stack.push(15)

// Removendo elementos do topo da pilha
stack.pop()
stack.pop()
console.log(stack);