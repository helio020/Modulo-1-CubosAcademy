const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let soma = 0

for (const i of numeros) {
    if (i % 2 === 0) {
        soma += i
    }
}

console.log(soma)