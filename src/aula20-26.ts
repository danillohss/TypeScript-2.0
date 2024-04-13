//Herança
// Public - Podemos acessar de qualquer lugar
// private - podemos acessar somente dentro da classe pai
// protected - podemos acessar somente dentro da classe pai e classe filha

abstract class Conta {
    private readonly numeroConta: number;
    protected titularConta: string;
    protected saldoConta: number;
    constructor(titularConta: string) {
        this.numeroConta = this.gerarNumeroConta();
        this.titularConta = titularConta;
        this.saldoConta = 0;
    }
    private gerarNumeroConta() {
        return Math.random() * 10000
    }
    info() {
        console.log(`Titular: ${this.titularConta}`)
        console.log(`Conta: ${this.numeroConta}`)
        console.log(`---------------------------`)
    }
    get saldo() {
        return this.saldoConta;
    }

    set saldo(saldoConta: number) {
        this.saldoConta = saldoConta;
    }

    protected depositar(valor: number) {
        if (valor < 0) {
            console.log('Valor invalido')
        }
        this.saldoConta += valor;
    }
    protected sacar(valor: number) {
        if (valor > this.saldoConta) {
            console.log('saldo insuficiente')
        } else if (valor < 0) {
            console.log('Valor invalido')
        } else {
            this.saldoConta -= valor;
        }
        console.log('novo saldo:', this.saldoConta)
    }
}

class ContaFisica extends Conta {
    cpf: number;
    constructor(cpf: number, titularConta: string) {
        super(titularConta);
        this.cpf = cpf;
    }
    info() {
        super.info();
        console.log('CPF: ', this.cpf);
    }
    deposito(valor: number) {
        if (valor > 1000) {
            console.log('deposito invalido');
        } else {
            super.depositar(valor);
        }
    }
    saque(valor: number) {
        if (valor > 1000) {
            console.log('deposito invalido');
        } else {
            super.sacar(valor);
        }
    }
}

class ContaJuridica extends Conta {
    cnpj: number;
    constructor(cnpj: number, titularConta: string) {
        super(titularConta);
        this.cnpj = cnpj;
    }
    info() {
        super.info();
        console.log('CNPJ: ', this.cnpj);
    }
    deposito(valor: number) {
        if (valor > 1000) {
            console.log('deposito invalido');
        } else {
            super.depositar(valor);
        }
    }
    saque(valor: number) {
        if (valor > 1000) {
            console.log('deposito invalido');
        } else {
            super.sacar(valor);
        }
    }
}


const conta1 = new ContaFisica(111, "Danillo")
const conta2 = new ContaJuridica(222, 'Joao')

console.log(conta1.saldo)
conta2.deposito(999);
conta2.saque(121);
conta2.info();
