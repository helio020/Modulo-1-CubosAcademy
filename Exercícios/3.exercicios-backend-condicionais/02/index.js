const jogada1 = 6;
const jogada2 = 3;

let criterio = "par"

if (criterio === "par" && jogada1 % 2 === 0 && jogada2 % 2 === 0) {
    console.log("empate")

} else if (criterio === "ímpar" && jogada1 % 2 === 1 && jogada2 % 2 === 1) {
    console.log("empate")

} else if (criterio === "ímpar" && jogada1 % 2 === 1) {
    console.log("ímpar")

} else if (criterio === "ímpar" && jogada2 % 2 === 1) {
    console.log("ímpar")

} else if (criterio === "par" && jogada1 % 2 === 0) {
    console.log("par")

} else if (criterio === "par" && jogada2 % 2 === 0) {
    console.log("par")

} else {
    console.log("Nenhum venceu")
}