const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

frutas.reverse();
const stringInvertida = frutas.join();
console.log(stringInvertida);

const arrayNormal = frutas.reverse();
arrayNormal.shift();
arrayNormal.splice(arrayNormal.length - 1, 1, 'Melão')
console.log(arrayNormal);