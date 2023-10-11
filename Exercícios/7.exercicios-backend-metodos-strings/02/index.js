const cpf = "12345678900";
const cnpj = "12345678000199";

function formatarNumeros(cpf, cnpj) {
    if (cpf.length < 11 || cpf.length > 11) {
        console.log("CPF Inválido");
    } else {
        let numeroQuebrado = cpf.slice(0, 3);
        numeroQuebrado = numeroQuebrado.padEnd(4, ".");
        let numeroQuebrado2 = cpf.slice(3, 6);
        numeroQuebrado2 = numeroQuebrado2.padEnd(4, ".");
        let numeroQuebrado3 = cpf.slice(6, 9);
        numeroQuebrado3 = numeroQuebrado3.padEnd(4, "-");
        let numeroQuebrado4 = cpf.slice(9, 11);
        let cpfFormatado = numeroQuebrado + numeroQuebrado2 + numeroQuebrado3 + numeroQuebrado4;
        console.log(cpfFormatado);
    }

    if (cnpj.length < 14 || cnpj.length > 14) {
        console.log("CNPJ Inválido");
    } else {
        let numeroQuebrado = cnpj.slice(0, 2);
        numeroQuebrado = numeroQuebrado.padEnd(3, ".");
        let numeroQuebrado2 = cnpj.slice(2, 5);
        numeroQuebrado2 = numeroQuebrado2.padEnd(4, ".");
        let numeroQuebrado3 = cnpj.slice(5, 8);
        numeroQuebrado3 = numeroQuebrado3.padEnd(4, "/");
        let numeroQuebrado4 = cnpj.slice(8, 12);
        numeroQuebrado4 = numeroQuebrado4.padEnd(5, "-");
        let numeroQuebrado5 = cnpj.slice(12, 14);
        let cnpjFormatado = numeroQuebrado + numeroQuebrado2 + numeroQuebrado3 + numeroQuebrado4 + numeroQuebrado5;
        console.log(cnpjFormatado);
    }
}
formatarNumeros(cpf, cnpj);