//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

//Valor de cada parcela
let valorParcela = (valorDoProduto / quantidadeDoParcelamento) / 100

//Valor restante do produto
let valorRestante = (valorDoProduto / 100) - valorPago

//Quantas parcelas faltam pagar
let parcelasRestantes = ((valorDoProduto / 100) - valorPago) / valorParcela

console.log(`Restam ${parcelasRestantes} parcelas de R$${valorParcela}`)

