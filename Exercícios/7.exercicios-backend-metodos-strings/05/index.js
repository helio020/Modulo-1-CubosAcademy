const numeroCartao = '1111222233334444';

function esconderCartaoDeCredito(numeroCartao) {
    const ultimos4Digitos = numeroCartao.slice(-4);
    const esconderNumero = ultimos4Digitos.padStart(numeroCartao.length - 4, "*");
    const esconderCartao = esconderNumero.padStart(numeroCartao.length, "1");
    console.log(esconderCartao);
}
esconderCartaoDeCredito(numeroCartao);