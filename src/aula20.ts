//Herança

class Conta {
    numeroConta: number;
    titularConta: string;
    constructor(titularConta: string) {
        this.numeroConta = this.gerarNumeroConta();
        this.titularConta = titularConta;
    }
    gerarNumeroConta() {
        return Math.random() * 10000
    }
}

class ContaFisica extends Conta {
    cpf: number;
    constructor(cpf: number, titularConta: string) {
        super(titularConta);
        this.cpf = cpf;
    }
}

class ContaJuridica extends Conta {
    cnpj: number;
    constructor(cnpj: number, titularConta: string) {
        super(titularConta);
        this.cnpj = cnpj;
    }
}

const conta1 = new ContaFisica(111, "Danillo")

console.log(conta1.numeroConta);