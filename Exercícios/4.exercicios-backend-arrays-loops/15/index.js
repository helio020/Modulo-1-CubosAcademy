const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

// let i = 0

// while (i < original.length) {
//     if (original[i] % 2 === 0) {
//         pares.push(original[i])

//     } else if (original[i] % 2 === 1) {
//         impares.push(original[i])
//     }
//     i++
// }

// ----------------------------------------------------------------------------

// for (let index = 0; index < original.length; index++) {
//     const element = original[index];

//     if (element % 2 === 0) {
//         pares.push(element)

//     } else if (element % 2 === 1) {
//         impares.push(element)
//     }
// }

// ----------------------------------------------------------------------------

for (let number of original) {
    if (number % 2 === 0) {
        pares.push(number)

    } else if (number % 2 === 1) {
        impares.push(number)
    }
}

console.log(pares)
console.log(impares)