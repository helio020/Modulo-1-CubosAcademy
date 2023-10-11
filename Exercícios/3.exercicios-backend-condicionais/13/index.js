//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
    let desconto = 0.05
    let valorFinal = (valorDoProduto - (valorDoProduto * desconto)) / 100
    console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`)

} else if (tipoDePagamento === "cheque") {
    let desconto = 0.03
    let valorFinal = (valorDoProduto - (valorDoProduto * desconto)) / 100
    console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`)

} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    let desconto = 0.1
    let valorFinal = (valorDoProduto - (valorDoProduto * desconto)) / 100
    console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`)
}

