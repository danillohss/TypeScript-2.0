"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoa = void 0;
const coisas = ["CORDA", "PILHA", "LAMPADA", "CHAVE"];
class pessoa {
    nome;
    altura;
    constructor(nome, altura) {
        this.nome = nome;
        this.altura = altura;
    }
}
exports.pessoa = pessoa;
