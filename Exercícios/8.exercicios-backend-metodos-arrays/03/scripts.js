const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function agrupar(nomes, posicao) {
    let posicaoFinal = posicao + 3;
    const grupo = nomes.slice(posicao, posicaoFinal);
    const resultado = grupo.join(" - ");
    console.log(resultado);
}
agrupar(nomes, posicao);