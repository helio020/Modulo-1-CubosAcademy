const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"];

for (let pedido = 0; pedido < filaDePedidos.length; pedido++) {
    filaDePedidos.push("pedido 15")
    filaDePedidos.shift()
    break
}

console.log(filaDePedidos)