const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const filtrarCidades = cidades.filter((cidade) => {
    return cidade.length <= 8;
});

const resultadoFormatado = filtrarCidades.join(', ');

console.log(resultadoFormatado);