const numeros = [54, 22, 14, 87, 10, 284];

let encontrado = false

for (let i of numeros) {
    if (i === 10) {
        console.log(numeros.indexOf(i))
        encontrado = true
        break
    }
}

if (!encontrado) {
    console.log(numeros.indexOf())
}