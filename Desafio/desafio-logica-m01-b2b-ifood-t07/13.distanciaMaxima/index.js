function processData(input) {
    const linhas = input.trim().split('\n');
    const n = parseInt(linhas[0], 10);

    const coordenadas = [];
    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(' ');
        coordenadas.push({
            x: parseFloat(coord[0], 10),
            y: parseFloat(coord[1], 10)
        })
    }

    const distancias = [];
    for (let i = 0; i < coordenadas.length; i++) {
        for (let j = i + 1; j < coordenadas.length; j++) {
            const d = Math.sqrt((coordenadas[i].x - coordenadas[j].x) ** 2 + (coordenadas[i].y - coordenadas[j].y) ** 2);
            distancias.push(d);
        }
    }

    let distanciaMaxima = 0;
    for (const distancia of distancias) {
        if (distancia > distanciaMaxima) {
            distanciaMaxima = distancia;
        }
    }
    console.log(distanciaMaxima);
} 