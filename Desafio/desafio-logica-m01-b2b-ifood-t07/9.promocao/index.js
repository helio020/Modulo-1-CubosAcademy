function solucao(precos) {
    let total = 0;
    let menorValor = precos[0];
    for (const preco of precos) {
        if (preco < menorValor) {
            menorValor = preco;
        }
        total += preco;
    }
    let desconto = menorValor * 50 / 100
    if (precos.length < 3) {
        console.log(total);
    } else if (precos.length >= 3) {
        total -= desconto;
        console.log(total);
    }
}