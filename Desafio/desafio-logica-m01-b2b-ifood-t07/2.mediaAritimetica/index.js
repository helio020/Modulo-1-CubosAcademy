function solucao(lista) {
    let soma = 0;
    for (const valor of lista) {
        soma += valor;
    }
    let media = soma / lista.length;
    console.log(media);
}