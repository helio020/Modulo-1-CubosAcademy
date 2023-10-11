const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã", "GRAviolA"];

const arrayModificado = frutas.map((fruta) => {
    return `${frutas.indexOf(fruta)} - ${fruta[0].toUpperCase()}${fruta.slice(1, fruta.length).toLowerCase()}`;
});

console.log(arrayModificado);