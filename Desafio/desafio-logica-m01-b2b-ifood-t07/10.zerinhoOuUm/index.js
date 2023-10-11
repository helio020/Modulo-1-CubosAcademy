function solucao(jogadores) {
    let jogadoresCom1 = [];
    let jogadoresCom0 = [];
    for (const jogador of jogadores) {
        if (jogador.jogada === 1) {
            jogadoresCom1.push(jogador);
        } else if (jogador.jogada === 0) {
            jogadoresCom0.push(jogador);
        }
    }
    if (jogadoresCom1.length === 1) {
        console.log(jogadoresCom1[0].nome);
    } else if (jogadoresCom0.length === 1) {
        console.log(jogadoresCom0[0].nome);
    } else {
        console.log('NINGUEM');
    }
}