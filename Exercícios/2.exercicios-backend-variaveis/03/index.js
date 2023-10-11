const valor_total = 129.99
const meu_dinheiro = 80

const valor_do_desconto = valor_total - meu_dinheiro

const d = valor_do_desconto * 100 / valor_total

console.log(d.toFixed(2))