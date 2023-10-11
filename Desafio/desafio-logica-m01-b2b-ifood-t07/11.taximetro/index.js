function solucao(min, km) {
    let valorPorMin = 0;
    let minAdicional = 0;
    let minSemDesconto = 0;
    let valorPorKm = 0;
    let kmAdicional = 0;
    let kmSemDesconto = 0;

    if (min > 20) {
        minAdicional = min - 20;
        minSemDesconto = min - minAdicional;
        valorPorMin = minSemDesconto * 50 + minAdicional * 30;
    } else if (min <= 20) {
        minSemDesconto = min;
        valorPorMin = minSemDesconto * 50;
    }

    if (km > 10) {
        kmAdicional = km - 10;
        kmSemDesconto = km - kmAdicional;
        valorPorKm = kmSemDesconto * 70 + kmAdicional * 50;
    } else if (km <= 10) {
        kmSemDesconto = km;
        valorPorKm = kmSemDesconto * 70;
    }

    let valorASerPagoEmCentavos = valorPorMin + valorPorKm;
    console.log(valorASerPagoEmCentavos);
}