const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function dividirEmGrupos(nomes, tamanhoDoGrupo) {
    let maxPessoasPorGrupo = tamanhoDoGrupo;
    let numero = 0;
    for (let i = 0; i < nomes.length; i += tamanhoDoGrupo) {
        const grupos = nomes.slice(i, maxPessoasPorGrupo);
        maxPessoasPorGrupo += tamanhoDoGrupo;
        numero++
        console.log(`Grupo ${numero}: ${grupos}.`);
    }
}
dividirEmGrupos(nomes, tamanhoDoGrupo);