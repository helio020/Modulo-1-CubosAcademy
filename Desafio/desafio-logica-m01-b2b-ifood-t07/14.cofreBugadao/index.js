function processData(input) {
    const palavras = input.trim().split('\n');
    let senhaCorreta = palavras[0];
    let palavraDigitada = palavras[1];

    for (const letra of senhaCorreta) {
        const resultado = palavraDigitada.indexOf(letra);
        if (resultado === -1) {
            console.log('NAO');
            return;
        } else {
            palavraDigitada = palavraDigitada.slice(resultado + 1);
        }
    }
    console.log('SIM');
} 