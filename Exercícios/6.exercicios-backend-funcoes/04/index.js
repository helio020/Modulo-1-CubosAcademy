const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;
        this.historicos.push({ tipo: "Depósito", valor: `${valor}` });
        return console.log(`Deposito de R$${valor / 100} realizado para o cliente: ${this.nome}`);
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            return console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
        } else {
            this.saldo -= valor;
            this.historicos.push({ tipo: "Saque", valor: `${valor}` });
            return console.log(`Saque de R$${valor / 100} realizado para o cliente: ${this.nome}`);
        }
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo / 100}`);
        console.log("Histórico:");
        console.log(`Depósito de R$${this.historicos[0].valor / 100}`);
        console.log(`Saque de R$${this.historicos[1].valor / 100}`);
    }
}
contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();
