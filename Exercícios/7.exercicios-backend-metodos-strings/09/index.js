const nome = 'Guido Cerqueira';

function gerarNickname(nome) {
    let arrayDeNomes = nome.split(" ");
    let nomeMinusculo = "";
    for (let i = 0; i < arrayDeNomes.length; i++) {
        const item = arrayDeNomes[i];
        let primeiraLetra = item.slice(0, 1);
        let restanteDoNome = item.slice(1);
        nomeMinusculo += primeiraLetra.toLowerCase() + restanteDoNome;
    }
    let maximoDeCaracteres = nomeMinusculo.slice(0, 12);
    let nomeFormatado = maximoDeCaracteres.padStart(maximoDeCaracteres.length + 1, "@");
    console.log(nomeFormatado)
}
gerarNickname(nome);