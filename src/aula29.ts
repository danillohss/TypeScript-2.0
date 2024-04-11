//GENERICS

function f_teste<T>(val: T) {
    return val;
}

console.log(f_teste<number>(10));


class Cteste<T> {
    valor: T;
    constructor(valor: T) {
        this.valor = valor;
    }
}

const cteste1 = new Cteste<string>("10");