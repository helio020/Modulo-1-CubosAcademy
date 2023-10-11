function solucao(texto) {
    const textoSemEspacos = texto.trim();
    const arrayPalavras = textoSemEspacos.split(' ');
    const filtrarPalavras = arrayPalavras.filter((palavra) => {
        return palavra.length > 0;
    });
    const resultado = filtrarPalavras.length;
    console.log(resultado);
}