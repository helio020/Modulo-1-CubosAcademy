const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

//ordem crescente
numeros.sort((a, b) => {
    return a - b;
});
console.log(numeros);

//ordem decrescente
numeros.sort((a, b) => {
    return b - a;
});
console.log(numeros);

//ordem crescente Unicode
numeros.sort();
console.log(numeros);

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

//ordem alfabética
frutas.sort((a, b) => {
    return a.localeCompare(b);
});
console.log(frutas);

//ordem alfabética decrescente
frutas.sort((a, b) => {
    return b.localeCompare(a);
});
console.log(frutas);

//ordem crescente,de acordo com a quantidade de caracters
frutas.sort((a, b) => {
    if (a.length < b.length) {
        return -1;
    }
    if (a.length > b.length) {
        return 1;
    }
    return 0;
});
console.log(frutas);