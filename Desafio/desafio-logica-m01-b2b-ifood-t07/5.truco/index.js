function solucao(carta) {
    const arrayCartas = ['Q', 'J', 'K', 'A', '2', '3'];
    const ultimoIndice = arrayCartas.length - 1;
    const indiceDaCarta = arrayCartas.indexOf(carta);

    if (indiceDaCarta === ultimoIndice) {
        console.log(arrayCartas[0]);
    } else {
        console.log(arrayCartas[indiceDaCarta + 1]);
    }
}