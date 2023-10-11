const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorNumero = numeros.reduce((acumulador, elementoAtual) => {
    if (elementoAtual > acumulador) {
        return acumulador = elementoAtual;
    } else {
        return acumulador;
    }
});
console.log(maiorNumero);