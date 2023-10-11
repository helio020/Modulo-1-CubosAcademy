function solucao(lista) {
    const maioresDeIdade = lista.filter((idade) => {
        return idade >= 18;
    });

    let menorAteAgora = maioresDeIdade[0];
    for (const idade of maioresDeIdade) {
        if (idade < menorAteAgora) {
            menorAteAgora = idade;
        }
    }
    const todosMenores = lista.every((elemento) => {
        return elemento < 18;
    });

    if (todosMenores) {
        console.log('CRESCA E APARECA');
    } else {
        console.log(menorAteAgora);
    }
}