/* Criando uma classe Stack baseada em array */
// Stack = Pilha

export default class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}


/* Como a pilha obedece ao princípio LIFO, limitaremos as funcionalidades que estarão
disponíveis à inserção e remoção de elementos */

// Métodos:
// push(element(s)) => adiciona um elemento (ou vários) no topo da pilha
// pop() => remove o elemento que está no topo da pilha. Também devolve o elemento.
// peek() => devolve o elemento que está no topo da pilha. Não remove.
// isEmpty() => retorna true para pilha vazia e false para > 0.
// clear() => remove todos os elementos da pilha.
// size() => número de elementos contidos na pilha.