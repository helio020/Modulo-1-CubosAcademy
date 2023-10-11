const letras = ["A", "a", "B", "C", "E", "e"];
const letras2 = ["A", "a", "B", "C", "L", "z"]

let soma = 0
let encontrado = false

for (let letra of letras) {
    if (letra === "E" || letra === "e") {
        soma++
        encontrado = true
    }
}

if (encontrado) {
    console.log(`Foram encontradas ${soma} letras "E" ou "e".`)
}

if (!encontrado) {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`)
}