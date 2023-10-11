const numeros = [3, 24, 1, 8, 11, 7, 15];

let maiorNumero = numeros[0]

for (const numero of numeros) {
    if (numero > maiorNumero) {
        maiorNumero = numero
    }
}

console.log(maiorNumero)