//namespace
namespace Veiculos {
    export enum Cores { preto, branco, vermelho, verde, azul, amarelo }
    abstract class Carro {
        private name: string;
        private motor: Motores.Motor;
        private cor: Cores;
        constructor(name: string, motor: Motores.Motor, cor: Cores) {
            this.name = name;
            this.cor = cor;
            this.motor = motor;
        }
        public ligar() {
            this.motor.liga = true;
        }
        public desligar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return Cores[this.cor];
        }
        get nomeCarro() {
            return this.name;
        }
        get estouLigado() {
            return this.motor.ligado;
        }
        get potencia() {
            return this.motor.pot;
        }
    }
    export class carroEsportivo extends Carro {
        constructor(nome: string, cor: Cores) {
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), cor);
        }
    }
    export class carroPopular extends Carro {
        constructor(nome: string, cor: Cores) {
            super(nome, new Motores.Motor(3, 100), cor);
        }
    }
}

namespace Motores {
    export class Turbo {
        pot: number;
        constructor(pot: number) {
            this.pot = pot;
        }
        get potencia() {
            return this.pot;
        }
    }
    export class Motor {
        private _ligado: boolean;
        private cilindros: number;
        pot: number;
        constructor(pot: number, cilindros: number, turbo?: Turbo) {
            this._ligado = false;
            this.pot = pot + (turbo ? turbo.potencia : 0);
            this.cilindros = cilindros;
        }
        set liga(ligado: boolean) {
            this._ligado = ligado;
        }
        get ligado() {
            return this._ligado;
        }
    }
}

const carro1 = new Veiculos.carroEsportivo("Celtinha", Veiculos.Cores.azul);
const carro2 = new Veiculos.carroPopular("Corsinha", Veiculos.Cores.vermelho);

console.log(`Nome: ${carro1.nomeCarro}`);
console.log(`Cor: ${carro1.minhaCor}`);
console.log(`Potencia: ${carro1.potencia}`);
console.log(`Ligado: ${carro1.estouLigado}`);
console.log('-----------------------------');
console.log(`Nome: ${carro2.nomeCarro}`);
console.log(`Cor: ${carro2.minhaCor}`);
console.log(`Potencia: ${carro2.potencia}`);
console.log(`Ligado: ${carro2.estouLigado}`);