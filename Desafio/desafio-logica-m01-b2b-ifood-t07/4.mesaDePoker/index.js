function solucao(min, max, valores) {
    const resultado = valores.filter((valor) => {
        return valor >= min && valor <= max;
    });
    console.log(resultado);
}