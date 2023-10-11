const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const maiorString = cidades.reduce((acumulador, cidadeAtual) => {
    if (cidadeAtual.length > acumulador.length) {
        return acumulador = cidadeAtual;
    } else {
        return acumulador;
    }
});
console.log(maiorString);