"use strict";
//Herança
// Public - Podemos acessar de qualquer lugar
// private - podemos acessar somente dentro da classe pai
// protected - podemos acessar somente dentro da classe pai e classe filha
class Conta {
    numeroConta;
    titularConta;
    saldoConta;
    constructor(titularConta) {
        this.numeroConta = this.gerarNumeroConta();
        this.titularConta = titularConta;
        this.saldoConta = 0;
    }
    gerarNumeroConta() {
        return Math.random() * 10000;
    }
    info() {
        console.log(`Titular: ${this.titularConta}`);
        console.log(`Conta: ${this.numeroConta}`);
        console.log(`---------------------------`);
    }
    saldo() {
        return this.saldoConta;
    }
    depositar(valor) {
        if (valor < 0) {
            console.log('Valor invalido');
        }
        this.saldoConta += valor;
    }
    sacar(valor) {
        if (valor > this.saldoConta) {
            console.log('saldo insuficiente');
        }
        else if (valor < 0) {
            console.log('Valor invalido');
        }
        else {
            this.saldoConta -= valor;
        }
        console.log('novo saldo:', this.saldoConta);
    }
}
class ContaFisica extends Conta {
    cpf;
    constructor(cpf, titularConta) {
        super(titularConta);
        this.cpf = cpf;
    }
    info() {
        super.info();
        console.log('CPF: ', this.cpf);
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log('deposito invalido');
        }
        else {
            super.depositar(valor);
        }
    }
    saque(valor) {
        if (valor > 1000) {
            console.log('deposito invalido');
        }
        else {
            super.sacar(valor);
        }
    }
}
class ContaJuridica extends Conta {
    cnpj;
    constructor(cnpj, titularConta) {
        super(titularConta);
        this.cnpj = cnpj;
    }
    info() {
        super.info();
        console.log('CNPJ: ', this.cnpj);
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log('deposito invalido');
        }
        else {
            super.depositar(valor);
        }
    }
    saque(valor) {
        if (valor > 1000) {
            console.log('deposito invalido');
        }
        else {
            super.sacar(valor);
        }
    }
}
const conta1 = new ContaFisica(111, "Danillo");
const conta2 = new ContaJuridica(222, 'Joao');
conta2.deposito(999);
conta2.saque(121);
conta2.info();
