let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

function formatarDados(identificador, nome, email) {
    let identificadorFormatado = identificador.padStart(6, "0");
    console.log(identificadorFormatado);

    let arrayDeNomes = nome.split(" ");
    let primeiroNome = "";
    let sobrenome = "";
    for (let i = 0; i < arrayDeNomes.length; i++) {
        const nome = arrayDeNomes[i];
        if (i > 0) {
            let primeiraLetra = nome.slice(0, 1);
            let restanteDoNome = nome.slice(1);
            sobrenome += primeiraLetra.toUpperCase() + restanteDoNome + " ";
        } else {
            primeiroNome += nome
        }
    }
    let nomeFormatado = primeiroNome + " " + sobrenome;
    console.log(nomeFormatado.trim());

    let emailFormatado = email.trim();
    console.log(emailFormatado)
}
formatarDados(identificador, nome, email);