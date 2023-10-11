const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

const arrayC = [1, 3, 3, 44, 11];
const arrayD = [57, 4, 21, 32, 13];

for (let index = 0; index < arrayA.length; index++) {
    const elementA = arrayA[index];
    const elementB = arrayB[index];

    if (elementA < elementB) {
        console.log(elementA)

    } else if (elementB < elementA) {
        console.log(elementB)
    }
}