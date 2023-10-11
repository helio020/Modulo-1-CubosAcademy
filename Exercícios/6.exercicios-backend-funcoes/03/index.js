const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total a pagar: R$ ${this.calcularTotalAPagar()}`);
    },
    addProduto: function (produto) {
        let contador = 0;
        for (let item of this.produtos) {
            if (produto.id === item.id) {
                item.qtd += produto.qtd;
                contador++;
            }
        }
        if (contador === 0) {
            this.produtos.push(produto);
        }
    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        for (const produto of this.produtos) {
            let totalDeCadaProduto = produto.qtd * produto.precoUnit / 100;
            console.log(`Item ${produto.id} - ${produto.nome} - ${produto.qtd}und - R$ ${totalDeCadaProduto.toFixed(2)}`);
        }
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total a pagar: R$ ${this.calcularTotalAPagar()}`)
    },
    calcularTotalDeItens: function () {
        let totalDeItens = 0;
        for (const produto of this.produtos) {
            totalDeItens += produto.qtd;
        }
        return totalDeItens;
    },
    calcularTotalAPagar: function () {
        let totalAPagar = 0;
        for (const produto of this.produtos) {
            totalAPagar += produto.qtd * produto.precoUnit / 100;
        }
        return totalAPagar.toFixed(2);
    },
    calcularDesconto: function () {
        let itemMaisBarato = (this.produtos[0].precoUnit / 100);
        let descontoValor = 0;
        let descontoItem = 0;
        for (const produto of this.produtos) {
            if (this.calcularTotalDeItens() > 4 && produto.precoUnit < itemMaisBarato) {
                itemMaisBarato = (produto.precoUnit / 100);
            }
            descontoItem = itemMaisBarato.toFixed(2);
        }
        if (this.calcularTotalAPagar() > 100) {
            descontoValor = (this.calcularTotalAPagar() * 10 / 100).toFixed(2);
        }
        return descontoItem > descontoValor ? console.log(descontoItem) : console.log(descontoValor);
    }
}
// carrinho.imprimirDetalhes();
// carrinho.imprimirResumo();
// carrinho.calcularDesconto();

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
carrinho.addProduto(novaBermuda);

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProduto(novoTenis);

// carrinho.imprimirResumo();
// carrinho.calcularDesconto();