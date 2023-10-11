const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const verificarPalavras = (arrayPalavras) => {
    const resultado = arrayPalavras.some((palavra) => {
        return palavra.length > 5;
    });

    if (resultado) {
        console.log('existe palavra inválida');
    } else {
        console.log('array validado');
    }
}

verificarPalavras(palavras);