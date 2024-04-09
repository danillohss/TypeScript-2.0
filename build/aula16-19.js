"use strict";
//POO Classes
class computador {
    placa = "";
    memoria = 0;
    cpu = 0;
    ligado = false;
    constructor(placa, memoria, cpu, ligado) {
        this.placa = placa;
        this.memoria = memoria;
        this.cpu = cpu;
        this.ligado = false;
    }
    ;
    info() {
        console.log('----------------------------');
        console.log(`Placa: ${this.placa}`);
        console.log(`memoria: ${this.memoria}`);
        console.log(`cpu: ${this.cpu}`);
        console.log(`ligado: ${this.ligado ? "ligado" : "desligado"}`);
        console.log('----------------------------');
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRam(qtd) {
        if (qtd >= 0 && qtd <= 1000) {
            this.memoria = qtd;
        }
        else {
            console.log('Quantidade incorreta.');
        }
    }
}
//instancia
const c2 = new computador('PC 1', 10, 15);
const c3 = new computador('PC 2', 10, 15);
const c4 = new computador('PC 3', 10, 15);
c2.ligar();
c2.upRam(128);
c2.info();
