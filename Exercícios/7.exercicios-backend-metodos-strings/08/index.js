const cpf = "011.022.033-44";
const cnpj = "12.345.678/0001-99"

function removerPontuacao(cpf, cnpj) {
    let cpfSemPonto = cpf.replaceAll(".", "");
    let cpfSemHifen = cpfSemPonto.replace("-", "");
    let cpfFormatado = cpfSemHifen
    console.log(cpfFormatado);
    let cnpjSemPonto = cnpj.replaceAll(".", "");
    let cnpjSemHifen = cnpjSemPonto.replace("-", "");
    let cnpjSemBarra = cnpjSemHifen.replace("/", "")
    let cnpjFormatado = cnpjSemBarra
    console.log(cnpjFormatado);
}
removerPontuacao(cpf, cnpj);