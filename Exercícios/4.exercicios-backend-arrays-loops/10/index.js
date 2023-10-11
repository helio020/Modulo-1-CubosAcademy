const numeros = [8, 20, 11, 4, 1, 0];

let max = numeros[0]
let min = numeros[0]

for (let numero of numeros) {
    if (numero > max) {
        max = numero

    } else if (numero < min) {
        min = numero
    }
}

console.log(max - min)