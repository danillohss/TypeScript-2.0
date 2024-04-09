"use strict";
//Herança
class Conta {
    numeroConta;
    titularConta;
    constructor(titularConta) {
        this.numeroConta = this.gerarNumeroConta();
        this.titularConta = titularConta;
    }
    gerarNumeroConta() {
        return Math.random() * 10000;
    }
}
class ContaFisica extends Conta {
    cpf;
    constructor(cpf, titularConta) {
        super(titularConta);
        this.cpf = cpf;
    }
}
class ContaJuridica extends Conta {
    cnpj;
    constructor(cnpj, titularConta) {
        super(titularConta);
        this.cnpj = cnpj;
    }
}
const conta1 = new ContaFisica(111, "Danillo");
console.log(conta1.numeroConta);
