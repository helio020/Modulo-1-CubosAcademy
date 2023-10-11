function processData(input) {
    const inputSemEspaco = input;

    if ((inputSemEspaco[0] === inputSemEspaco[0].toLowerCase()) && (inputSemEspaco.slice(1) === inputSemEspaco.slice(1).toUpperCase())) {
        const restanteDaPalavra = inputSemEspaco.substring(1);
        const palavraTratada = inputSemEspaco[0].toUpperCase() + restanteDaPalavra.toLowerCase();
        console.log(palavraTratada);
    } else if (inputSemEspaco === inputSemEspaco.toUpperCase()) {
        const palavraMinuscula = inputSemEspaco.toLowerCase();
        console.log(palavraMinuscula);
    } else {
        console.log(inputSemEspaco);
    }
} 