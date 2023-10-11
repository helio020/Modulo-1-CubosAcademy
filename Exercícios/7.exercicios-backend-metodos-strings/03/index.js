const texto = "Aprenda programar do zero na Cubos Academy";

function transformarEmUrl(texto) {
    const palavras = texto.trim().split(" ");
    let urlAmigavel = "";
    for (let i = 0; i < palavras.length; i++) {
        let palavraMinuscula = palavras[i].toLowerCase();
        if (i < palavras.length - 1) {
            let palavraFormatada = palavraMinuscula.padEnd(palavras[i].length + 1, "-");
            urlAmigavel += palavraFormatada;
        }
    }
    urlAmigavel += palavras[palavras.length - 1].toLowerCase();
    console.log(urlAmigavel);
}
transformarEmUrl(texto);