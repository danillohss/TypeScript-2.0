"use strict";
//GENERICS
function f_teste(val) {
    return val;
}
console.log(f_teste(10));
class Cteste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const cteste1 = new Cteste("10");
