const celular = 3198980419;
const celularString = `${celular}`;

function formatarNumeroDeCelular(celularString) {
    let celularFormatado = "";
    if (celularString.length === 10) {
        let ddd = celularString.slice(0, 2);
        let dddComParentese = ddd.padEnd(3, ")");
        let caractere = "(";
        let dddFormatado = caractere.concat(dddComParentese);
        let numeroPadrao = " 9 ";
        let dddComNumeroPadrao = dddFormatado.concat(numeroPadrao);
        let numerosAntesDoHifen = celularString.slice(2, 6);
        let celularQuaseCompleto = dddComNumeroPadrao.concat(numerosAntesDoHifen);
        let numerosDepoisDoHifen = celularString.slice(6, 10);
        let hifenComNumeros = numerosDepoisDoHifen.padStart(5, "-");
        celularFormatado += celularQuaseCompleto + hifenComNumeros;
    } else if (celularString.length === 8) {
        let numerosAntesDoHifen = celularString.slice(0, 4);
        let celularQuaseCompleto = numerosAntesDoHifen.padStart(6, "9 ");
        let numerosDepoisDoHifen = celularString.slice(4, 8);
        let hifenComNumeros = numerosDepoisDoHifen.padStart(5, "-");
        celularFormatado += celularQuaseCompleto + hifenComNumeros;
    } else {
        console.log("Celular inválido");
    }
    console.log(celularFormatado);
}
formatarNumeroDeCelular(celularString);


