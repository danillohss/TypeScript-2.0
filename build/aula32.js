"use strict";
//namespace
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["preto"] = 0] = "preto";
        Cores[Cores["branco"] = 1] = "branco";
        Cores[Cores["vermelho"] = 2] = "vermelho";
        Cores[Cores["verde"] = 3] = "verde";
        Cores[Cores["azul"] = 4] = "azul";
        Cores[Cores["amarelo"] = 5] = "amarelo";
    })(Cores = Veiculos.Cores || (Veiculos.Cores = {}));
    class Carro {
        name;
        motor;
        cor;
        constructor(name, motor, cor) {
            this.name = name;
            this.cor = cor;
            this.motor = motor;
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
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
    class carroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), cor);
        }
    }
    Veiculos.carroEsportivo = carroEsportivo;
    class carroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(3, 100), cor);
        }
    }
    Veiculos.carroPopular = carroPopular;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
        get potencia() {
            return this.pot;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        _ligado;
        cilindros;
        pot;
        constructor(pot, cilindros, turbo) {
            this._ligado = false;
            this.pot = pot + (turbo ? turbo.potencia : 0);
            this.cilindros = cilindros;
        }
        set liga(ligado) {
            this._ligado = ligado;
        }
        get ligado() {
            return this._ligado;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
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
