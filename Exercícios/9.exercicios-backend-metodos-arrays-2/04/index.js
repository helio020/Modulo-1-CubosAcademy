const numeros = [0, 122, 4, 6, 7, 8, 44];

const validarNumerosPares = (arrayNumeros) => {
    const resultado = arrayNumeros.every((numero) => {
        return numero % 2 === 0;
    });

    if (resultado) {
        console.log('array válido');
    } else {
        console.log('array inválido');
    }
}

validarNumerosPares(numeros);