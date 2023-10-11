const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado) {
            console.log("Este carro já está ligado.");
        } else {
            this.ligado = true;
            console.log(`Carro ligado. Velocidade: ${carro.velocidade}.`);
        }
    },
    desligar: function () {
        if (!this.ligado) {
            console.log("Este carro já está desligado.");
        } else if (carro.velocidade === 0) {
            this.ligado = false;
            this.velocidade = 0;
            console.log(`Carro desligado. Velocidade: ${this.velocidade}.`);
        } else {
            console.log("Não é possível desligar um carro com velocidade acima de 0")
        }
    },
    acelerar: function () {
        if (!this.ligado) {
            carro.ligado = true;
            console.log(`Carro ligado. Velocidade: ${carro.velocidade}.`);
        } else {
            this.velocidade += 10;
            console.log(`Carro ligado. Velocidade: ${carro.velocidade}.`);
        }
    },
    desacelerar: function () {
        if (!this.ligado) {
            console.log("Não é possível desacelerar um carro desligado.");
        } else if (this.velocidade === 0) {
            this.ligado = false;
            console.log(`Carro desligado. Velocidade: ${this.velocidade}.`);
        } else {
            this.velocidade -= 10;
            console.log(`Carro ligado. Velocidade: ${carro.velocidade}.`);
        }
    }
};
carro.acelerar();
carro.acelerar();
carro.desligar();
carro.desacelerar();
carro.desacelerar();