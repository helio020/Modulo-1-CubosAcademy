function solucao(numeros) {
    const soma = numeros.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
    });
    const tamanhoDoArray = numeros.length;
    let restoDaDivisao = soma % tamanhoDoArray;

    if (restoDaDivisao === 0) {
        console.log(tamanhoDoArray);
    } else {
        console.log(restoDaDivisao);
    }
}