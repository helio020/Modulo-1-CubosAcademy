const email = "aluno@cubos.academy";

function validarEmail(email) {
    if (!email.includes("@") || !email.includes(".") || email.startsWith(".") || email.endsWith(".")) {
        console.log("E-mail inválido");
    } else {
        console.log("E-mail válido");
    }
}
validarEmail(email);