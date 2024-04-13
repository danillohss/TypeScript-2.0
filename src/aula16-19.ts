//POO Classes

class computador {
    placa: string = "";
    private memoria: number = 0;
    private cpu: number = 0;
    private ligado: boolean = false;
    constructor(placa: string, memoria: number, cpu: number, ligado?: boolean) {
        this.placa = placa;
        this.memoria = memoria;
        this.cpu = cpu;
        this.ligado = false;
    };
    info() {
        console.log('----------------------------')
        console.log(`Placa: ${this.placa}`);
        console.log(`memoria: ${this.memoria}`);
        console.log(`cpu: ${this.cpu}`);
        console.log(`ligado: ${this.ligado ? "ligado" : "desligado"}`);
        console.log('----------------------------')
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRam(qtd: number) {
        if (qtd >= 0 && qtd <= 1000) {
            this.memoria = qtd;
        } else {
            console.log('Quantidade incorreta.')
        }
    }
}


//instancia
const c2 = new computador('PC 1', 10, 15);
const c3 = new computador('PC 2', 10, 15);
const c4 = new computador('PC 3', 10, 15);


c2.ligar()

c2.upRam(128);
c2.info();
